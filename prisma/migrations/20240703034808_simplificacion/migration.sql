/*
  Warnings:

  - You are about to drop the `atencion_medica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `consulta_examenes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `consulta_insumos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctor_especialidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `receta_medica` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `especialidadId` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "atencion_medica" DROP CONSTRAINT "atencion_medica_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "atencion_medica" DROP CONSTRAINT "atencion_medica_pacienteId_fkey";

-- DropForeignKey
ALTER TABLE "consulta_examenes" DROP CONSTRAINT "consulta_examenes_consultaId_fkey";

-- DropForeignKey
ALTER TABLE "consulta_examenes" DROP CONSTRAINT "consulta_examenes_examenId_fkey";

-- DropForeignKey
ALTER TABLE "consulta_insumos" DROP CONSTRAINT "consulta_insumos_consultaId_fkey";

-- DropForeignKey
ALTER TABLE "consulta_insumos" DROP CONSTRAINT "consulta_insumos_insumoId_fkey";

-- DropForeignKey
ALTER TABLE "doctor_especialidad" DROP CONSTRAINT "doctor_especialidad_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "doctor_especialidad" DROP CONSTRAINT "doctor_especialidad_especialidadId_fkey";

-- DropForeignKey
ALTER TABLE "receta_medica" DROP CONSTRAINT "receta_medica_consultaId_fkey";

-- AlterTable
ALTER TABLE "consulta_medica" ADD COLUMN     "recetaMedica" VARCHAR(255);

-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "especialidadId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "atencion_medica";

-- DropTable
DROP TABLE "consulta_examenes";

-- DropTable
DROP TABLE "consulta_insumos";

-- DropTable
DROP TABLE "doctor_especialidad";

-- DropTable
DROP TABLE "receta_medica";

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
