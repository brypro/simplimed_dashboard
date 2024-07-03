"use client";

import { Login } from "@prisma/client";
import {
  deleteLogin,
  updateLogin,
} from "@/app/cuentas-usuarios/actions/cuentas-usuarios-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  login: Login;
}

export const LoginItem = ({ login }: Props) => {
    const router = useRouter();

    const [update, setUpdate] = useState<boolean>(false);
    const [updateEmail, setUpdateEmail] = useState<string>(login.email);
    const [updateClave, setUpdateClave] = useState<string>(login.clave);
    const [updateRolId, setUpdateRolId] = useState<number>(login.rolId);
    const [updateDoctorId, setUpdateDoctorId] = useState<number>(login.doctorId);

  const onEdit = async () => {
    if (update) {
      await updateLogin({
        id: login.id,
        email: updateEmail, 
        clave: updateClave,
        rolId: updateRolId,
        doctorId: updateDoctorId
      });
    }
    setUpdate(!update);
    router.refresh();
  };

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
                type="text"
                className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                value={updateClave}
                onChange={(e) => setUpdateClave(e.target.value)}
            />
            ) : (
            login.clave
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
            login.rolId
            )}
        </td>

        <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white">
            {update ? (
            <input
                type="number"
                className="rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                value={login.doctorId}
                disabled={true}
            />
            ) : (
            login.doctorId
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
