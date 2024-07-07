"use client";
import { addEspecialidad } from "@/app/especialidades/actions/especialidades-actions";
import { useState } from "react";
import { useRouter } from "next/navigation";


export const FormEspecialidad = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState<string>("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nombre.trim().length === 0) return;
    await addEspecialidad(nombre);
    setNombre("");
    router.refresh();
    window.location.reload();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="p-5">
        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Nombre
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa nombre de la especialidad"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mt-5 flex space-x-4">
          <button
            type="button"
            className="my-1 flex w-full justify-center rounded-[7px] border border-primary py-1.5 font-medium hover:bg-opacity-90 dark:text-white"
            onClick={() => setNombre("")}
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
    </form>
  );
};
