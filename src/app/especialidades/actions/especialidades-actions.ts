"use server";

import { Especialidad } from "@prisma/client";
import prisma from "@/lib/prisma";

export const getEspecialidades = async () => {
  const especialidades = await prisma.especialidad.findMany();
  return especialidades;
};
export const addEspecialidad = async (
  nombre: string,
): Promise<Especialidad> => {
  return await prisma.especialidad.create({ data: { nombre } });
};

export const updateEspecialidad = async (
  especialidad: Especialidad,
): Promise<Especialidad> => {
  const esp = await prisma.especialidad.findFirst({
    where: { id: especialidad.id },
  });
  if (!esp) {
    throw new Error("Especialidad no encontrada");
  }
  console.log(especialidad);
  return await prisma.especialidad.update({
    where: { id: especialidad.id },
    data: { nombre: especialidad.nombre },
  });
};

export const deleteEspecialidad = async (id: number): Promise<Especialidad> => {
  const esp = await prisma.especialidad.findFirst({ where: { id } });
  if (!esp) {
    throw new Error("Especialidad no encontrada");
  }
  return await prisma.especialidad.delete({ where: { id } });
};
