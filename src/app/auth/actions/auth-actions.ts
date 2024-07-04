import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  }
  return null;
};

export const getUserbyEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};
