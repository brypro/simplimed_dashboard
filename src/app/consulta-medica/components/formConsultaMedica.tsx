"use client";
// import { addEspecialidad } from "@/app/especialidades/actions/especialidades-actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Paciente } from "@prisma/client";
import { addConsulta } from "@/app/consulta-medica/actions/consulta-actions";
import AlertSuccess from "@/components/Alerts/AlertSuccess";

interface Props {
  pacientes: Paciente[];
  medicoId: number;
  medicoName: string;
}

export const FormConsultaMedica = ({
  pacientes,
  medicoId,
  medicoName,

}: Props) => {
  const router = useRouter();
  const [fecha, setFecha] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("");
  const [sintomas, setSintomas] = useState<string>("");
  const [diagnostico, setDiagnostico] = useState<string>("");
  const [receta, setReceta] = useState<string>("");

  const [selectedPaciente, setSelectedPaciente] = useState<number>(1);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const cleanForm = () => {
    setFecha("");
    setMotivo("");
    setSintomas("");
    setDiagnostico("");
    setReceta("");
    setSelectedPaciente(1);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      fecha.trim().length === 0 ||
      motivo.trim().length === 0 ||
      sintomas.trim().length === 0 ||
      diagnostico.trim().length === 0
    )
      return;
    await addConsulta(
      selectedPaciente,
      medicoId,
      new Date(fecha),
      motivo,
      sintomas,
      diagnostico,
      receta,
    );
    cleanForm();
    setShowSuccessModal(true);
    router.refresh();
  };



  return (
    <form onSubmit={onSubmit}>
      <div className="p-5">
        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Médico Tratante
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            value={medicoName}
            disabled={true}
            placeholder="médico"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Paciente seleccionado
          </label>
          <select
            onChange={(e) => setSelectedPaciente(parseInt(e.target.value))}
            value={selectedPaciente}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          >
            {pacientes.map((especialidad) => (
              <option key={especialidad.id} value={especialidad.id}>
                {especialidad.nombre + " " + especialidad.apellido}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Fecha Atención
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="date"
            onChange={(e) => setFecha(e.target.value)}
            value={fecha}
            max={new Date().toLocaleString('sv-CL').split(' ')[0]}
            min={(new Date(new Date().getFullYear(), new Date().getMonth() - 3, new Date().getDate())).toISOString().split('T')[0]}
            placeholder=""
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Motivo consulta
            {true && <span className="text-red">*</span>}
          </label>
          <textarea
            rows={1}
            placeholder="Ingrese el motivo de la consulta"
            onChange={(e) => setMotivo(e.target.value)}
            value={motivo}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Síntomas
            {true && <span className="text-red">*</span>}
          </label>
          <textarea
            rows={1}
            placeholder="Ingrese los síntomas del paciente"
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Diagnóstico
            {true && <span className="text-red">*</span>}
          </label>
          <textarea
            rows={1}
            placeholder="Ingrese el diagnóstico del paciente"
            onChange={(e) => setDiagnostico(e.target.value)}
            value={diagnostico}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Receta
          </label>
          <textarea
            rows={4}
            placeholder="Ingrese receta médica"
            onChange={(e) => setReceta(e.target.value)}
            value={receta}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex space-x-4">
          <button
            type="button"
            className="my-1 flex w-full justify-center rounded-[7px] border border-primary py-1.5 font-medium hover:bg-opacity-90 dark:text-white"
            onClick={cleanForm}
          >
            Limpiar
          </button>
          <button
            type="submit"
            className="my-1 flex w-full justify-center rounded-[7px] bg-primary py-1.5 font-medium text-white hover:bg-opacity-90"
          >
            Guardar
          </button>
        </div>
      </div>
      
      {showSuccessModal && (
        <AlertSuccess
          message="Consulta médica guardada con éxito" 
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </form>
  );
};
