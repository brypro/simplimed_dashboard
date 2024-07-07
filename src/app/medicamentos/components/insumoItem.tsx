"use client";

import { Insumo } from "@prisma/client";
import { format } from "date-fns";
import {
  deleteInsumo,
  updateInsumo,
} from "@/app/medicamentos/actions/medicamentos-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  insumo: Insumo;
}

export const InsumoItem = ({ insumo }: Props) => {
  const router = useRouter();

  const [update, setUpdate] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState<string>(insumo.nombre);
  const [updateProveedor, setUpdateProveedor] = useState<string>(
    insumo.proveedor,
  );
  const [updateValor, setUpdateValor] = useState<number>(insumo.valor);
  const [updateStock, setUpdateStock] = useState<number>(insumo.stock);
  const [updateCaducidad, setUpdateCaducidad] = useState<Date>(
    insumo.caducidad,
  );
  const [updateContraindicaciones, setUpdateContraindicaciones] =
    useState<string>(insumo.contraindicaciones);

  const onEdit = async () => {
    if (update) {
      await updateInsumo({
        id: insumo.id,
        nombre: updateName,
        proveedor: updateProveedor,
        valor: updateValor,
        stock: updateStock,
        caducidad: updateCaducidad,
        contraindicaciones: updateContraindicaciones,
      });
      window.location.reload();
    }
    setUpdate(!update);
    router.refresh();
  };

  const onDelete = async () => {
    await deleteInsumo(insumo.id);
    router.refresh();
  };
  return (
    <tr key={insumo.id}>
      <td className=" align-top whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        ) : (
          insumo.nombre
        )}
      </td>

      <td className=" align-top whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateProveedor}
            onChange={(e) => setUpdateProveedor(e.target.value)}
          />
        ) : (
          insumo.proveedor
        )}
      </td>

      <td className=" align-top whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateValor}
            onChange={(e) => setUpdateValor(+e.target.value)}
          />
        ) : (
          insumo.valor
        )}
      </td>

      <td className=" align-top whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateStock}
            onChange={(e) => setUpdateStock(+e.target.value)}
          />
        ) : (
          insumo.stock
        )}
      </td>

      <td className=" align-top whitespace-nowrap px-2 py-4 text-gray-500 dark:text-gray-200">
        {update ? (
          <input
            type="date"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={format(updateCaducidad, "yyyy-MM-dd")}
            onChange={(e) => setUpdateCaducidad(new Date(e.target.value))}
          />
        ) : (
          format(insumo.caducidad, "dd/MM/yyyy")
        )}
      </td>

      <td className="whitespace-normal px-2 py-4 text-gray-500 dark:text-gray-200 ">
        {update ? (
          <input
            type="text"
            className="max-w-md break-words rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateContraindicaciones}
            onChange={(e) => setUpdateContraindicaciones(e.target.value)}
          />
        ) : (
          <span className="inline-block min-w-[300px] max-w-md break-words  align-top">
            {insumo.contraindicaciones}
          </span>
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
