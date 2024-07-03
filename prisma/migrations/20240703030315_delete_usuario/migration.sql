/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `doctor` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `login` table. All the data in the column will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[rut]` on the table `doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[doctorId]` on the table `login` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apellido` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celular` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_nac` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rolId` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rut` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rolId` to the `login` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "doctor" DROP CONSTRAINT "doctor_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "login" DROP CONSTRAINT "login_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_rolId_fkey";

-- DropIndex
DROP INDEX "doctor_usuarioId_key";

-- DropIndex
DROP INDEX "login_usuarioId_key";

-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "usuarioId",
ADD COLUMN     "apellido" VARCHAR(255) NOT NULL,
ADD COLUMN     "celular" VARCHAR(20) NOT NULL,
ADD COLUMN     "direccion" VARCHAR(255) NOT NULL,
ADD COLUMN     "fecha_nac" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "rolId" INTEGER NOT NULL,
ADD COLUMN     "rut" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "login" DROP COLUMN "usuarioId",
ADD COLUMN     "doctorId" INTEGER,
ADD COLUMN     "rolId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "usuario";

-- CreateIndex
CREATE UNIQUE INDEX "doctor_rut_key" ON "doctor"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "login_doctorId_key" ON "login"("doctorId");

-- AddForeignKey
ALTER TABLE "login" ADD CONSTRAINT "login_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login" ADD CONSTRAINT "login_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
