"use client";
// import { addEspecialidad } from "@/app/especialidades/actions/especialidades-actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Paciente } from "@prisma/client";
import { format } from "date-fns";

interface Props {
  paciente: Paciente;
}
export const FormInformacionContacto = ({ paciente }: Props) => {
  const router = useRouter();
  const [nombre, setNombre] = useState<string>("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nombre.trim().length === 0) return;
    // await addEspecialidad(nombre);
    setNombre("");
    router.refresh();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="p-5">
        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Nombre paciente
          </label>
          <input
            type="text"
            placeholder=""
            disabled={true}
            value={paciente.nombre}
            readOnly
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Fecha de nacimiento
          </label>
          <input
            type="text"
            placeholder=""
            disabled={true}
            value={format(new Date(paciente.fechaNac), "dd/MM/yyyy")}
            readOnly
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Dirección
          </label>
          <input
            type="text"
            placeholder=""
            disabled={true}
            value={paciente.direccion}
            readOnly
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Email
          </label>
          <input
            type="email"
            placeholder=""
            disabled={true}
            value={paciente.email}
            readOnly
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Celular
          </label>
          <input
            type="number"
            placeholder=""
            disabled={true}
            value={paciente.celular}
            readOnly
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
    </form>
  );
};
