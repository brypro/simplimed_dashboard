"use server";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { LoginModel } from "@/app/cuentas-usuarios/interfaces/cuentas-usuarios.interface";
import bcrypt from "bcryptjs";

export const getLogins = async () => {
  const login = await prisma.user.findMany();
  //transform to loginModel
  if (login) {
    return login.map((log) => {
      return {
        id: log.id,
        email: log.email,
        rolId: log.rolId,
        doctorId: log.doctorId,
      } as LoginModel;
    });
  }
  return [];
};

export const addLogin = async (
  email: string,
  password: string,
  rolId: number,
  doctorId: number | null,
): Promise<User> => {
  return await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
      rolId,
      doctorId,
    },
  });
};

export const deleteLogin = async (id: string): Promise<User> => {
  const ins = await prisma.user.findFirst({ where: { id } });
  if (!ins) {
    throw new Error("Login no encontrado");
  }
  return await prisma.user.delete({ where: { id } });
};

export const getRoles = async () => {
  return await prisma.rol.findMany();
};
