"use server";
import prisma from "@/lib/prisma";
import { Paciente } from "@prisma/client";

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
  console.log("Back data", {
    nombre,
    apellido,
    fechaNac,
    direccion,
    email,
    celular,
  });
  return await prisma.paciente.create({
    data: {
        nombre,
        apellido,
        fechaNac,
        direccion,
        email,
        celular
    },
  });
};

export const updatePaciente = async (paciente: Paciente): Promise<Paciente> => {
  const pac = await prisma.examen.findFirst({
    where: { id: paciente.id },
  });
  if (!pac) {
    throw new Error("Paciente no encontrado");
  }
  return await prisma.paciente.update({
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
};

export const deletePaciente = async (id: number): Promise<Paciente> => {
  const ins = await prisma.paciente.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Paciente no encontrado");
  }
  return await prisma.paciente.delete({ where: { id } });
};
