"use client";

import { Doctor, User, Rol } from "@prisma/client";
import { deleteLogin } from "@/app/cuentas-usuarios/actions/cuentas-usuarios-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginModel } from "@/app/cuentas-usuarios/interfaces/cuentas-usuarios.interface";

interface Props {
  login: LoginModel;
  medicos: Doctor[];
  roles: Rol[];
}

export const LoginItem = ({ login, medicos, roles }: Props) => {
  const medico = login.doctorId
    ? medicos.find((m) => m.id === login.doctorId)
    : null;
  const rol = roles.find((r) => r.id === login.rolId);
  const router = useRouter();

  const [update, setUpdate] = useState<boolean>(false);
  const [updateEmail, setUpdateEmail] = useState<string>(login.email);
  const [updateRolId, setUpdateRolId] = useState<number>(login.rolId);
  const [updateDoctorId, setUpdateDoctorId] = useState<number | null>(
    login.doctorId,
  );

  const onDelete = async () => {
    await deleteLogin(login.id);
    router.refresh();
  };

  return (
    <tr key={login.id}>
      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="text"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
        ) : (
          login.email
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="number"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={updateRolId}
            onChange={(e) => setUpdateRolId(parseInt(e.target.value))}
          />
        ) : (
          rol?.tipoRol
        )}
      </td>

      <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
        {update ? (
          <input
            type="number"
            className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={"login.doctorId"}
            disabled={true}
          />
        ) : medico ? (
          medico.nombre + " " + medico.apellido
        ) : (
          "No asignado"
        )}
      </td>

      <td className="flex space-x-2 whitespace-nowrap px-2 py-4 font-medium">
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
