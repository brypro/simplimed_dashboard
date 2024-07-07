"use client";

import { Paciente } from "@prisma/client";
import { format } from "date-fns";
import { deletePaciente, updatePaciente,} from "@/app/pacientes/actions/pacientes-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AlertError from "@/components/Alerts/AlertError";

interface Props {
  paciente: Paciente;
}

export const PacienteItem = ({ paciente }: Props) => {
  const router = useRouter();

  const [update, setUpdate] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState<string>(paciente.nombre);
  const [updateApellido, setUpdateApellido] = useState<string>(
    paciente.apellido,
  );
  const [updateFechaNac, setUpdateFechaNac] = useState<Date>(paciente.fechaNac);
  const [updateDireccion, setUpdateDireccion] = useState<string>(
    paciente.direccion,
  );
  const [updateEmail, setUpdateEmail] = useState<string>(paciente.email);
  const [updateCelular, setUpdateCelular] = useState<string>(paciente.celular);

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");


  const onEdit = async () => {
    if (update) {
      await updatePaciente({
        id: paciente.id,
        nombre: updateName,
        apellido: updateApellido,
        fechaNac: updateFechaNac,
        direccion: updateDireccion,
        email: updateEmail,
        celular: updateCelular,
      });
    }
    setUpdate(!update);
    router.refresh();
  };

  const onDelete = async () => {
    try {
      await deletePaciente(paciente.id);
      router.refresh();
    } catch (error: any) {
      console.error("Error al eliminar el paciente:", error);
      setErrorMessage(error.message);
      setShowSuccessModal(true);
    }
  };

  const goToFichaMedica = () => {
    router.push("/ficha-medica/" + paciente.id);
  };

  return (
    <tr key={paciente.id}>
      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        ) : (
          paciente.nombre
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateApellido}
            onChange={(e) => setUpdateApellido(e.target.value)}
          />
        ) : (
          paciente.apellido
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="date"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={format(updateFechaNac, "yyyy-MM-dd")}
            onChange={(e) => setUpdateFechaNac(new Date(e.target.value))}
          />
        ) : (
          format(paciente.fechaNac, "dd/MM/yyyy")
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateDireccion}
            onChange={(e) => setUpdateDireccion(e.target.value)}
          />
        ) : (
          paciente.direccion
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="email"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
        ) : (
          paciente.email
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateCelular}
            onChange={(e) => setUpdateCelular(e.target.value)}
          />
        ) : (
          paciente.celular
        )}
      </td>

      <td className="flex space-x-2 whitespace-nowrap px-6 py-4 font-medium">
        <button
          className="rounded-[7px] bg-primary p-1 font-medium text-white hover:bg-opacity-90"
          onClick={onEdit}
        >
          {update ? "Guardar" : "Editar"}
        </button>
        <button
          className="rounded-[7px] bg-red-400 p-1 font-medium text-white hover:bg-opacity-90"
          onClick={onDelete}
        >
          Eliminar
        </button>
        <button
          className="rounded-[7px] bg-green-500 p-1 font-medium text-white hover:bg-opacity-90"
          onClick={goToFichaMedica}
        >
          Ficha médica
        </button>
      </td>
    
    {showSuccessModal && (
      <AlertError
        message={errorMessage}
        onClose={() => setShowSuccessModal(false)}
      />
      )}

    </tr>
    
    
  );
};
