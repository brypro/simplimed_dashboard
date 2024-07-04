"use server";

import prisma from "@/lib/prisma";

export const sidebarUser = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};
