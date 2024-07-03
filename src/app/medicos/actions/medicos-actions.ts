"use server";
import prisma from "@/lib/prisma";
import { Doctor } from "@prisma/client";
import { useRouter } from "next/navigation";

export const getMedicos = async () => {
  const medicos = await prisma.doctor.findMany();
  return medicos;
};

export const addMedico = async (
  nombre: string,
  apellido: string,
  celular: string,
  direccion: string,
  fechaNac: Date,
  rut: string,
  especialidadId: number,
  rolId: number = 2,
): Promise<Doctor> => {
  console.log("data", {
    nombre,
    apellido,
    celular,
    direccion,
    fechaNac,
    rut,
    especialidadId,
    rolId,
  });
  return await prisma.doctor.create({
    data: {
      nombre,
      apellido,
      celular,
      direccion,
      fechaNac,
      rut,
      rolId,
      especialidadId,
    },
  });
};

export const updateMedico = async (medico: Doctor): Promise<Doctor> => {
  const doc = await prisma.doctor.findFirst({
    where: { id: medico.id },
  });
  if (!doc) {
    throw new Error("Medico no encontrado");
  }
  return await prisma.doctor.update({
    where: { id: medico.id },
    data: {
      nombre: medico.nombre,
      apellido: medico.apellido,
      celular: medico.celular,
      direccion: medico.direccion,
      fechaNac: medico.fechaNac,
      rut: medico.rut,
      especialidadId: medico.especialidadId,
    },
  });
};

export const deleteMedico = async (id: number): Promise<Doctor> => {
  const doc = await prisma.doctor.findFirst({ where: { id } });
  if (!doc) {
    throw new Error("Medico no encontrado");
  }
  return await prisma.doctor.delete({ where: { id } });
};

export const getEspecialidadById = async (id: number) => {
  return await prisma.especialidad.findFirst({ where: { id } });
};

export const getAllEspecialidades = async () => {
  return await prisma.especialidad.findMany();
};
