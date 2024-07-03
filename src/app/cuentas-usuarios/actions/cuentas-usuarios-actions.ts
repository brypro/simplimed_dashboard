"use server";
import prisma from "@/lib/prisma";
import { Login } from "@prisma/client";

export const getLogins = async () => {
  const login = await prisma.login.findMany();
  return login;
};

export const addLogin = async (
  email: string,
  clave: string,
  rolId: number,
  doctorId: number | null,
): Promise<Login> => {
  console.log("Back data", {
    email,
    clave,
    rolId,
    doctorId,
  });
  return await prisma.login.create({
    data: {
      email,
      clave,
      rolId,
      doctorId,
    },
  });
};

export const updateLogin = async (login: Login): Promise<Login> => {
  const log = await prisma.login.findFirst({
    where: { id: login.id },
  });
  if (!log) {
    throw new Error("Login no encontrado");
  }
  return await prisma.login.update({
    where: { id: login.id },
    data: {
      email: login.email,
      clave: login.clave,
      rolId: login.rolId,
      doctorId: login.doctorId,
    },
  });
};

export const deleteLogin = async (id: number): Promise<Login> => {
  const ins = await prisma.login.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Login no encontrado");
  }
  return await prisma.login.delete({ where: { id } });
};

export const getRoles = async () => {
  return await prisma.rol.findMany();
};
