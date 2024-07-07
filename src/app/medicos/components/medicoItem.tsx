"use client";

import { Doctor, Especialidad } from "@prisma/client";
import { format } from "date-fns";
import {
  deleteMedico,
  updateMedico,
} from "@/app/medicos/actions/medicos-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AlertError from "@/components/Alerts/AlertError";

interface Props {
  medico: Doctor;
  especialidades: Especialidad[];
}

export const MedicoItem = ({ medico, especialidades }: Props) => {
  const router = useRouter();

  const [update, setUpdate] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState<string>(medico.nombre);
  const [updateApellido, setUpdateApellido] = useState<string>(medico.apellido);
  const [updateDireccion, setUpdateDireccion] = useState<string>(
    medico.direccion,
  );
  const [updateCelular, setUpdateCelular] = useState<string>(medico.celular);
  const [updateFechaNac, setUpdateFechaNac] = useState<Date>(medico.fechaNac);
  const [updateRut, setUpdateRut] = useState<string>(medico.rut);
  const [updateEspecialidadId, setUpdateEspecialidadId] = useState<number>(
    medico.especialidadId,
  );

  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const onEdit = async () => {
    if (update) {
      await updateMedico({
        id: medico.id,
        nombre: updateName,
        apellido: updateApellido,
        direccion: updateDireccion,
        celular: updateCelular,
        fechaNac: updateFechaNac,
        rut: updateRut,
        rolId: 2,
        especialidadId: updateEspecialidadId,
      });
      router.refresh();
      window.location.reload();
    }
    router.refresh();
    setUpdate(!update);
  };

  const onDelete = async () => {
    try {
      await deleteMedico(medico.id);
      router.refresh();
    } catch (error:any) {
      console.error("Error deleting medico:", error);
      setErrorMessage(error.message);
      setShowErrorModal(true);
    }
  };

  const especialidad = especialidades.find(
    (esp) => esp.id === updateEspecialidadId,
  );

  return (
    <tr key={medico.id}>
      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        ) : (
          medico.nombre
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
          medico.apellido
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
          medico.direccion
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
          medico.celular
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
          format(medico.fechaNac, "dd/MM/yyyy")
        )}
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateRut}
            onChange={(e) => setUpdateRut(e.target.value)}
          />
        ) : (
          medico.rut
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          // Select para editar la especialidad si estamos en modo edición
          <select
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateEspecialidadId}
            onChange={(e) => setUpdateEspecialidadId(Number(e.target.value))}
          >
            {especialidades.map((especialidad) => (
              <option key={especialidad.id} value={especialidad.id}>
                {especialidad.nombre}
              </option>
            ))}
          </select>
        ) : // Mostrar el nombre de la especialidad del médico si no estamos en modo edición
        especialidad ? (
          especialidad.nombre
        ) : (
          ""
        )}
      </td>

      <td className="flex space-x-2 whitespace-nowrap px-2 py-4 font-medium">
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
      </td>

      {showErrorModal && (
        <AlertError
          message={errorMessage}
        onClose={() => setShowErrorModal(false)}
        />
      )}

    </tr>
  );
};
