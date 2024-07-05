"use server";
import prisma from "@/lib/prisma";
import { HistorialMedico } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getPacienteById = async (id: number) => {
  return await prisma.paciente.findFirst({ where: { id } });
};

export const getHistorialMedicoByPacienteId = async (id: number) => {
  return await prisma.historialMedico.findFirst({ where: { pacienteId: id } });
};

export const addHistorialMedico = async (
  pacienteId: number,
  fecha: Date,
  enfermedadesPrevias: string,
  cirugias: string,
  alergias: string,
  observaciones: string,
): Promise<HistorialMedico> => {
  const resp = await prisma.historialMedico.create({
    data: {
      pacienteId,
      fecha,
      enfermedadesPrevias,
      cirugias,
      alergias,
      observaciones,
    },
  });
  revalidatePath("/ficha-medica");
  return resp;
};

export const updateHistorialMedico = async (
  historialMedico: HistorialMedico,
): Promise<HistorialMedico> => {
  const hist = await prisma.historialMedico.findFirst({
    where: { id: historialMedico.id },
  });
  if (!hist) {
    throw new Error("Historial medico no encontrado");
  }
  const resp = await prisma.historialMedico.update({
    where: { id: historialMedico.id },
    data: {
      enfermedadesPrevias: historialMedico.enfermedadesPrevias,
      cirugias: historialMedico.cirugias,
      alergias: historialMedico.alergias,
      observaciones: historialMedico.observaciones,
    },
  });
  revalidatePath("/ficha-medica");
  return resp;
};

export const getConsultasMedicasByPacienteId = async (id: number) => {
  const resp = await prisma.consultaMedica.findMany({
    where: { pacienteId: id },
  });
  revalidatePath("/ficha-medica/" + id);
  return resp;
};

export const getAllMedicos = async () => {
  return await prisma.doctor.findMany();
};
