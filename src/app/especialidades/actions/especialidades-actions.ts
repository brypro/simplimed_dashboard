"use server";

import { Especialidad } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const getEspecialidades = async () => {
  const especialidades = await prisma.especialidad.findMany();
  revalidatePath("/especialidades");
  return especialidades;
};
export const addEspecialidad = async (
  nombre: string,
): Promise<Especialidad> => {
  const esp = await prisma.especialidad.create({ data: { nombre } });
  revalidatePath("/especialidades");
  return esp;
};

export const updateEspecialidad = async (
  especialidad: Especialidad,
): Promise<Especialidad> => {
  const esp = await prisma.especialidad.findFirst({
    where: { id: especialidad.id },
  });
  if (!esp) {
    throw new Error("Especialidad no encontrada....");
  }
  console.log(especialidad);
  const up = await prisma.especialidad.update({
    where: { id: especialidad.id },
    data: { nombre: especialidad.nombre },
  });
  revalidatePath("/especialidades");
  return up;
};

export const deleteEspecialidad = async (id: number): Promise<Especialidad> => {
  const esp = await prisma.especialidad.findFirst({ where: { id } });
  if (!esp) {
    throw new Error("Especialidad no encontrada...");
  }
  const de = await prisma.especialidad.delete({ where: { id } });
  revalidatePath("/especialidades");
  return de;
};
