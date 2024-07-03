"use server";
import prisma from "@/lib/prisma";
import { Insumo } from "@prisma/client";

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
  return await prisma.insumo.create({
    data: {
        nombre,
        proveedor,
        valor,
        stock,
        caducidad,
        contraindicaciones,
    },
  });
};

export const updateInsumo = async (insumo: Insumo): Promise<Insumo> => {
  const ins = await prisma.insumo.findFirst({
    where: { id: insumo.id },
  });
  if (!ins) {
    throw new Error("Insumo no encontrado");
  }
  return await prisma.insumo.update({
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
};

export const deleteInsumo = async (id: number): Promise<Insumo> => {
  const ins = await prisma.insumo.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Insumo no encontrado");
  }
  return await prisma.insumo.delete({ where: { id } });
};
