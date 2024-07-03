"use server";
import prisma from "@/lib/prisma";
import { Examen } from "@prisma/client";

export const getExamenes= async () => {
  const examen = await prisma.examen.findMany();
  return examen;
};

export const addExamen = async (
    nombre: string,
    tipo: string,
    valor: number,
    duracion: string,
    preparacionPrevia: string
): Promise<Examen> => {
  console.log("Back data", {
    nombre,
    tipo,
    valor,
    duracion,
    preparacionPrevia
  });
  return await prisma.examen.create({
    data: {
        nombre,
        tipo,
        valor,
        duracion,
        preparacionPrevia
    },
  });
};

export const updateExamen = async (examen: Examen): Promise<Examen> => {
  const exam = await prisma.examen.findFirst({
    where: { id: examen.id },
  });
  if (!exam) {
    throw new Error("Examen no encontrado");
  }
  return await prisma.examen.update({
    where: { id: examen.id },
    data: {
        nombre: examen.nombre,
        tipo: examen.tipo,
        valor: examen.valor,
        duracion: examen.duracion,
        preparacionPrevia: examen.preparacionPrevia
    },
  });
};

export const deleteExamen = async (id: number): Promise<Examen> => {
  const ins = await prisma.examen.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Examen no encontrado");
  }
  return await prisma.examen.delete({ where: { id } });
};
