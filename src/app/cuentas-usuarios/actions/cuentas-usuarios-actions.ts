"use server";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { LoginModel } from "@/app/cuentas-usuarios/interfaces/cuentas-usuarios.interface";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const getLogins = async () => {
  const login = await prisma.user.findMany();
  //transform to loginModel
  if (login) {
    const resp = login.map((log) => {
      return {
        id: log.id,
        email: log.email,
        rolId: log.rolId,
        doctorId: log.doctorId,
      } as LoginModel;
    });
    revalidatePath("/cuentas-usuarios");
    return resp;
  }
  revalidatePath("/cuentas-usuarios");
  return [];
};

export const addLogin = async (
  email: string,
  password: string,
  rolId: number,
  doctorId: number | null,
): Promise<User> => {
  const resp = await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
      rolId,
      doctorId,
    },
  });
  revalidatePath("/cuentas-usuarios");
  return resp;
};

export const deleteLogin = async (id: string): Promise<User> => {
  const ins = await prisma.user.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Login no encontrado");
  }
  const resp = await prisma.user.delete({ where: { id } });
  revalidatePath("/cuentas-usuarios");
  return resp;
};

export const getRoles = async () => {
  const resp = await prisma.rol.findMany();
  revalidatePath("/cuentas-usuarios");
  return resp;
};
