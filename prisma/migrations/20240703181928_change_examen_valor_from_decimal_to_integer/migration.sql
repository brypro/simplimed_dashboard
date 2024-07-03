/*
  Warnings:

  - You are about to alter the column `valor` on the `examen` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "examen" ALTER COLUMN "valor" SET DATA TYPE INTEGER;
