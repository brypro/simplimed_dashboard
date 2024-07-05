"use server";
import prisma from "@/lib/prisma";
import { Examen } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getExamenes = async () => {
  const examen = await prisma.examen.findMany();
  revalidatePath("/examenes");
  return examen;
};

export const addExamen = async (
  nombre: string,
  tipo: string,
  valor: number,
  duracion: string,
  preparacionPrevia: string,
): Promise<Examen> => {
  console.log("Back data", {
    nombre,
    tipo,
    valor,
    duracion,
    preparacionPrevia,
  });
  const resp = await prisma.examen.create({
    data: {
      nombre,
      tipo,
      valor,
      duracion,
      preparacionPrevia,
    },
  });
  revalidatePath("/examenes");
  return resp;
};

export const updateExamen = async (examen: Examen): Promise<Examen> => {
  const exam = await prisma.examen.findFirst({
    where: { id: examen.id },
  });
  if (!exam) {
    throw new Error("Examen no encontrado");
  }
  const resp = await prisma.examen.update({
    where: { id: examen.id },
    data: {
      nombre: examen.nombre,
      tipo: examen.tipo,
      valor: examen.valor,
      duracion: examen.duracion,
      preparacionPrevia: examen.preparacionPrevia,
    },
  });
  revalidatePath("/examenes");
  return resp;
};

export const deleteExamen = async (id: number): Promise<Examen> => {
  const ins = await prisma.examen.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Examen no encontrado");
  }
  const resp = await prisma.examen.delete({ where: { id } });
  revalidatePath("/examenes");
  return resp;
};
