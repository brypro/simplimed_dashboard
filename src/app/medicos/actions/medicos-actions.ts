import prisma from "@/lib/prisma";
import { Doctor } from "@prisma/client";

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
  const doc = await prisma.doctor.create({
    data: { nombre, apellido, celular, direccion, fechaNac, rut, rolId },
  });
  const docEspecialidad = await prisma.doctorEspecialidad.create({
    data: { doctorId: doc.id, especialidadId },
  });

  return doc;
};

export const updateMedico = async (
  medico: Doctor,
  especialidadId: number,
): Promise<Doctor> => {
  const doc = await prisma.doctor.findFirst({
    where: { id: medico.id },
  });
  if (!doc) {
    throw new Error("Medico no encontrado");
  }
  const docEspecialidad = await prisma.doctorEspecialidad.findFirst({
    where: { doctorId: doc.id },
  });
  if (!docEspecialidad) {
    throw new Error("Especialidad no encontrada");
  }
  if (docEspecialidad.especialidadId !== especialidadId) {
    await prisma.doctorEspecialidad.update({
      where: { id: docEspecialidad.id },
      data: { especialidadId },
    });
  }
  return await prisma.doctor.update({
    where: { id: medico.id },
    data: {
      nombre: medico.nombre,
      apellido: medico.apellido,
      celular: medico.celular,
      direccion: medico.direccion,
      fechaNac: medico.fechaNac,
      rut: medico.rut,
    },
  });
};

export const deleteMedico = async (id: number): Promise<Doctor> => {
  const doc = await prisma.doctor.findFirst({ where: { id } });
  if (!doc) {
    throw new Error("Medico no encontrado");
  }
  return await prisma.doctor.delete({ where: { id } });
};

export const getEspecialidadByMedico = async (id: number) => {
  const especialidadMedico = await prisma.doctorEspecialidad.findFirst({
    where: { doctorId: id },
  });
  if (!especialidadMedico) {
    throw new Error("Especialidad no encontrada");
  }
  const especialidad = await prisma.especialidad.findFirst({
    where: { id: especialidadMedico.especialidadId },
  });
  return especialidad;
};
