"use client";
// import { addEspecialidad } from "@/app/especialidades/actions/especialidades-actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HistorialMedico } from "@prisma/client";
import { addHistorialMedico, updateHistorialMedico} from "@/app/ficha-medica/actions/ficha-actions";
import { ro } from "date-fns/locale";
import AlertSuccess from "@/components/Alerts/AlertSuccess";

interface Props {
  historialMedico: HistorialMedico | null;
  pacienteId: number;
}
export const FormInformacionMedica = ({
  historialMedico,
  pacienteId,

}: Props) => {
  const router = useRouter();

  const [enfermedadesPrevias, setEnfermedadesPrevias] = useState<string>( historialMedico ? historialMedico.enfermedadesPrevias : "");
  const [cirugias, setCirugias] = useState<string>( historialMedico ? historialMedico.cirugias : "",);
  const [alergias, setAlergias] = useState<string>( historialMedico ? historialMedico.alergias : "",);
  const [observaciones, setObservaciones] = useState<string>( historialMedico ? historialMedico.observaciones : "",);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (historialMedico) {
      await updateHistorialMedico({
        ...historialMedico,
        enfermedadesPrevias,
        cirugias,
        alergias,
        observaciones,
      });
    } else {
      await addHistorialMedico(
        pacienteId,
        new Date(),
        enfermedadesPrevias,
        cirugias,
        alergias,
        observaciones,
      );
    }
    setShowSuccessModal(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="p-5">
        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Enfermedades previas
          </label>
          <input
            type="text"
            placeholder="Ingrese enfermedades previas del paciente"
            value={enfermedadesPrevias}
            onChange={(e) => setEnfermedadesPrevias(e.target.value)}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Cirugías
          </label>
          <input
            type="text"
            placeholder="Ingrese cirugías previas del paciente"
            value={cirugias}
            onChange={(e) => setCirugias(e.target.value)}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Alergias
          </label>
          <input
            type="text"
            placeholder="Ingrese alergias del paciente"
            value={alergias}
            onChange={(e) => setAlergias(e.target.value)}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Observaciones
          </label>
          <textarea
            rows={2}
            placeholder="Ingrese observaciones del paciente"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex space-x-4">
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
          message="Información médica guardada con éxito." 
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </form>
  );
};
