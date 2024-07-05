"use server";
import prisma from "@/lib/prisma";
import { Paciente } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getPacientes = async () => {
  const paciente = await prisma.paciente.findMany();
  return paciente;
};

export const addPaciente = async (
  nombre: string,
  apellido: string,
  fechaNac: Date,
  direccion: string,
  email: string,
  celular: string,
): Promise<Paciente> => {
  const resp = await prisma.paciente.create({
    data: {
      nombre,
      apellido,
      fechaNac,
      direccion,
      email,
      celular,
    },
  });
  revalidatePath("/pacientes");
  return resp;
};

export const updatePaciente = async (paciente: Paciente): Promise<Paciente> => {
  const pac = await prisma.examen.findFirst({
    where: { id: paciente.id },
  });
  if (!pac) {
    throw new Error("Paciente no encontrado.");
  }
  const resp = await prisma.paciente.update({
    where: { id: paciente.id },
    data: {
      nombre: paciente.nombre,
      apellido: paciente.apellido,
      fechaNac: paciente.fechaNac,
      direccion: paciente.direccion,
      email: paciente.email,
      celular: paciente.celular,
    },
  });
  revalidatePath("/pacientes");
  return resp;
};

export const deletePaciente = async (id: number): Promise<Paciente> => {
  const ins = await prisma.paciente.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Paciente no encontrado");
  }
  const resp = await prisma.paciente.delete({ where: { id } });
  revalidatePath("/pacientes");
  return resp;
};

export const getMedicoById = async (id: number) => {
  const resp = await prisma.doctor.findUnique({
    where: {
      id: id,
    },
  });
  revalidatePath("/medicos");
  return resp;
};
