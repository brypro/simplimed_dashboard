"use client";

import { Examen } from "@prisma/client";
import { format } from "date-fns";
import {
  deleteExamen,
  updateExamen,
} from "@/app/examenes/actions/examenes-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  examen: Examen;
}

export const ExamenItem = ({ examen }: Props) => {
  const router = useRouter();

  const [update, setUpdate] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState<string>(examen.nombre);
  const [updateTipo, setUpdateTipo] = useState<string>(examen.tipo);
  const [updateValor, setUpdateValor] = useState<number>(examen.valor);
  const [updateDuracion, setUpdateDuracion] = useState<string>(examen.duracion);
  const [updatePreparacionPrevia, setUpdatePreparacionPrevia] =
    useState<string>(examen.preparacionPrevia);

  const onEdit = async () => {
    if (update) {
      await updateExamen({
        id: examen.id,
        nombre: updateName,
        tipo: updateTipo,
        valor: updateValor,
        duracion: updateDuracion,
        preparacionPrevia: updatePreparacionPrevia,
      });
      router.refresh();
      window.location.reload();
    }
    router.refresh();
    setUpdate(!update);
  };

  const onDelete = async () => {
    await deleteExamen(examen.id);
    router.refresh();
  };

  return (
    <tr key={examen.id}>
      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        ) : (
          examen.nombre
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateTipo}
            onChange={(e) => setUpdateTipo(e.target.value)}
          />
        ) : (
          examen.tipo
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="number"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateValor}
            onChange={(e) => setUpdateValor(Number(e.target.value))}
          />
        ) : (
          examen.valor
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateDuracion}
            onChange={(e) => setUpdateDuracion(e.target.value)}
          />
        ) : (
          examen.duracion
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updatePreparacionPrevia}
            onChange={(e) => setUpdatePreparacionPrevia(e.target.value)}
          />
        ) : (
          examen.preparacionPrevia
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
    </tr>
  );
};
