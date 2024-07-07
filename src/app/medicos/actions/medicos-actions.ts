"use server";
import prisma from "@/lib/prisma";
import { Doctor } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getMedicos = async () => {
  const medicos = await prisma.doctor.findMany();
  return medicos;
};

export const addMedico = async (
  nombre: string,
  apellido: string,
  celular: string,
  direccion: string,
  fechaNac: Date,
  rut: string,
  especialidadId: number,
  rolId: number = 2,
): Promise<Doctor> => {
  const existingDoctor = await prisma.doctor.findUnique({ where: { rut } });
  if (existingDoctor) {
    throw new Error("Ya existe un médico con este rut.");
  }
  const resp = await prisma.doctor.create({
    data: {
      nombre,
      apellido,
      celular,
      direccion,
      fechaNac,
      rut,
      rolId,
      especialidadId,
    },
  });
  revalidatePath("/medicos");
  return resp;
};

export const updateMedico = async (medico: Doctor): Promise<Doctor> => {
  const doc = await prisma.doctor.findFirst({
    where: { id: medico.id },
  });
  if (!doc) {
    throw new Error("Medico no encontrado");
  }
  const resp = await prisma.doctor.update({
    where: { id: medico.id },
    data: {
      nombre: medico.nombre,
      apellido: medico.apellido,
      celular: medico.celular,
      direccion: medico.direccion,
      fechaNac: medico.fechaNac,
      rut: medico.rut,
      especialidadId: medico.especialidadId,
    },
  });
  revalidatePath("/medicos");
  return resp;
};

export const deleteMedico = async (id: number): Promise<Doctor> => {
  const medico = await prisma.doctor.findUnique({ where: { id } });
  const consultasMedicas = await prisma.consultaMedica.findMany({
    where: { doctorId: id },
  });
  const tieneLogin = await prisma.user.findFirst({ where: { doctorId: id } });
  if (!medico) {
    throw new Error("Médico no encontrado");
  }
  if (consultasMedicas.length > 0) {
    throw new Error(
      "No se puede eliminar el médico porque tiene consultas médicas asociadas.",
    );
  }
  if (tieneLogin) {
    throw new Error(
      "No se puede eliminar el médico porque tiene un login asociado. Debes eliminar la cuenta de usuario primero.",
    );
  } else {
    const resp = await prisma.doctor.delete({ where: { id } });
    revalidatePath("/medicos");
    return resp;
  }
};

export const getEspecialidadById = async (id: number) => {
  const resp = await prisma.especialidad.findFirst({ where: { id } });
  revalidatePath("/medicos");
  return resp;
};

export const getAllEspecialidades = async () => {
  const resp = await prisma.especialidad.findMany();
  revalidatePath("/medicos");
  return resp;
};
