"use client";
import { Especialidad } from "@prisma/client";
import {
  deleteEspecialidad,
  updateEspecialidad,
} from "@/app/especialidades/actions/especialidades-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  especialidad: Especialidad;
}
export const EspecialidadItem = ({ especialidad }: Props) => {
  const router = useRouter();
  const [update, setUpdate] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState<string>(especialidad.nombre);
  const deleteOnClick = () => async () => {
    await deleteEspecialidad(especialidad.id);
    router.refresh();
    window.location.reload();
  };
  const updateOnClick = () => async () => {
    console.log("updateOnClick");
    if (update) {
      await updateEspecialidad({ id: especialidad.id, nombre: updateName });
    }
    setUpdate(!update);
    router.refresh();
    window.location.reload();
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/*if (update)*/}
            {update ? (
              <input
                type="text"
                className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                value={updateName}
                onChange={(e) => setUpdateName(e.target.value)}
              />
            ) : (
              <p className="text-body-md font-medium text-dark dark:text-dark-6">
                {especialidad.nombre}
              </p>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            className="rounded-[7px] bg-primary p-1 font-medium text-white hover:bg-opacity-90"
            onClick={updateOnClick()}
          >
            {update ? "Guardar" : "Editar"}
          </button>
          <button
            className="rounded-[7px] bg-red-400 p-1 font-medium text-white hover:bg-opacity-90"
            onClick={deleteOnClick()}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
