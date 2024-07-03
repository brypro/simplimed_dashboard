"use client";

import { Doctor } from "@prisma/client";
import { format } from "date-fns";
import { deleteMedico } from "@/app/medicos/actions/medicos-actions";
import { useRouter } from "next/navigation";

interface Props {
  medico: Doctor;
}

export const MedicoItem = ({ medico }: Props) => {
  const router = useRouter();
  const onDelete = async () => {
    await deleteMedico(medico.id);
    router.refresh();
  };
  return (
    <tr key={medico.id}>
      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {medico.nombre}
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {medico.apellido}
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {medico.direccion}
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {medico.celular}
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {format(medico.fechaNac, "dd/MM/yyyy")}
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {medico.rut}
      </td>
      <td className="whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {medico.especialidadId}
      </td>
      <td className="flex space-x-2 whitespace-nowrap px-2 py-4 font-medium">
        <button className="rounded-[7px] bg-primary p-1 font-medium text-white hover:bg-opacity-90">
          Editar
        </button>
        <button
          className="rounded-[7px] bg-red-400 p-1 font-medium text-white hover:bg-opacity-90"
          onClick={onDelete}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
