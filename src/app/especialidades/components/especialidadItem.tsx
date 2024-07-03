"use client";
import { Especialidad } from "@prisma/client";

interface Props {
  especialidad: Especialidad;
}
export const EspecialidadItem = ({ especialidad }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-body-md font-medium text-dark dark:text-dark-6">
              {especialidad.nombre}
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="rounded-[7px] bg-primary p-1 font-medium text-white hover:bg-opacity-90">
            Editar
          </button>
          <button className="rounded-[7px] bg-red-400 p-1 font-medium text-white hover:bg-opacity-90">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
