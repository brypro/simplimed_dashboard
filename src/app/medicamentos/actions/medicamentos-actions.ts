"use server";
import prisma from "@/lib/prisma";
import { Insumo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getInsumos = async () => {
  const insumos = await prisma.insumo.findMany();
  return insumos;
};

export const addInsumo = async (
  nombre: string,
  proveedor: string,
  valor: number,
  stock: number,
  caducidad: Date,
  contraindicaciones: string,
): Promise<Insumo> => {
  console.log("Back data", {
    nombre,
    proveedor,
    valor,
    stock,
    caducidad,
    contraindicaciones,
  });
  const resp = await prisma.insumo.create({
    data: {
      nombre,
      proveedor,
      valor,
      stock,
      caducidad,
      contraindicaciones,
    },
  });
  revalidatePath("/medicamentos");
  return resp;
};

export const updateInsumo = async (insumo: Insumo): Promise<Insumo> => {
  const ins = await prisma.insumo.findFirst({
    where: { id: insumo.id },
  });
  if (!ins) {
    throw new Error("Insumo no encontrado");
  }
  const resp = await prisma.insumo.update({
    where: { id: insumo.id },
    data: {
      nombre: insumo.nombre,
      proveedor: insumo.proveedor,
      valor: insumo.valor,
      stock: insumo.stock,
      caducidad: insumo.caducidad,
      contraindicaciones: insumo.contraindicaciones,
    },
  });
  revalidatePath("/medicamentos");
  return resp;
};

export const deleteInsumo = async (id: number): Promise<Insumo> => {
  const ins = await prisma.insumo.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Insumo no encontrado");
  }
  const resp = await prisma.insumo.delete({ where: { id } });
  revalidatePath("/medicamentos");
  return resp;
};
