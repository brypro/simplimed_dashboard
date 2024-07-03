-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "tipo_rol" VARCHAR(255) NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "apellido" VARCHAR(255) NOT NULL,
    "rut" VARCHAR(20) NOT NULL,
    "fecha_nac" TIMESTAMP(3) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,
    "rolId" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "clave" VARCHAR(255) NOT NULL,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "apellido" VARCHAR(255) NOT NULL,
    "fecha_nac" TIMESTAMP(3) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,

    CONSTRAINT "Especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor_especialidad" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "especialidadId" INTEGER NOT NULL,

    CONSTRAINT "doctor_especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historial_medico" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "enfermedades_previas" VARCHAR(255) NOT NULL,
    "cirugias" VARCHAR(255) NOT NULL,
    "alergias" VARCHAR(255) NOT NULL,
    "observaciones" VARCHAR(255) NOT NULL,

    CONSTRAINT "historial_medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atencion_medica" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "motivo_consulta" VARCHAR(255) NOT NULL,
    "sintomas" VARCHAR(255) NOT NULL,

    CONSTRAINT "atencion_medica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta_medica" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "motivo_consulta" VARCHAR(255) NOT NULL,
    "sintomas" VARCHAR(255) NOT NULL,
    "diagnostico" VARCHAR(255) NOT NULL,

    CONSTRAINT "consulta_medica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receta_medica" (
    "id" SERIAL NOT NULL,
    "consultaId" INTEGER NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,

    CONSTRAINT "receta_medica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "examen" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "duracion" VARCHAR(255) NOT NULL,
    "preparacion_previa" VARCHAR(255) NOT NULL,

    CONSTRAINT "examen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta_examenes" (
    "id" SERIAL NOT NULL,
    "consultaId" INTEGER NOT NULL,
    "examenId" INTEGER NOT NULL,

    CONSTRAINT "consulta_examenes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insumo" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "proveedor" VARCHAR(255) NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL,
    "caducidad" TIMESTAMP(3) NOT NULL,
    "contraindicaciones" VARCHAR(255) NOT NULL,

    CONSTRAINT "insumo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta_insumos" (
    "id" SERIAL NOT NULL,
    "consultaId" INTEGER NOT NULL,
    "insumoId" INTEGER NOT NULL,

    CONSTRAINT "consulta_insumos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_rut_key" ON "usuario"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "login_usuarioId_key" ON "login"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_usuarioId_key" ON "doctor"("usuarioId");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login" ADD CONSTRAINT "login_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_especialidad" ADD CONSTRAINT "doctor_especialidad_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_especialidad" ADD CONSTRAINT "doctor_especialidad_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_medico" ADD CONSTRAINT "historial_medico_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atencion_medica" ADD CONSTRAINT "atencion_medica_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atencion_medica" ADD CONSTRAINT "atencion_medica_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta_medica" ADD CONSTRAINT "consulta_medica_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta_medica" ADD CONSTRAINT "consulta_medica_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receta_medica" ADD CONSTRAINT "receta_medica_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "atencion_medica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta_examenes" ADD CONSTRAINT "consulta_examenes_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "atencion_medica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta_examenes" ADD CONSTRAINT "consulta_examenes_examenId_fkey" FOREIGN KEY ("examenId") REFERENCES "examen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta_insumos" ADD CONSTRAINT "consulta_insumos_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "atencion_medica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta_insumos" ADD CONSTRAINT "consulta_insumos_insumoId_fkey" FOREIGN KEY ("insumoId") REFERENCES "insumo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
