"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const getPacientes = async () => {
  const resp = await prisma.paciente.findMany();
  return resp;
};

export const addConsulta = async (
  pacienteId: number,
  doctorId: number,
  fecha: Date,
  motivoConsulta: string,
  sintomas: string,
  diagnostico: string,
  recetaMedica: string,
) => {
  const resp = await prisma.consultaMedica.create({
    data: {
      pacienteId,
      doctorId,
      fecha,
      motivoConsulta,
      sintomas,
      diagnostico,
      recetaMedica,
    },
  });
  revalidatePath("/consulta-medica");
  return resp;
};
