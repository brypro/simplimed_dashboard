"use server";
import prisma from "@/lib/prisma";

export const getPacientes = async () => {
  return await prisma.paciente.findMany();
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
  return await prisma.consultaMedica.create({
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
};
