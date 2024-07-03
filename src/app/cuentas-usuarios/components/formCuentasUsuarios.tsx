"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addLogin } from "@/app/cuentas-usuarios/actions/cuentas-usuarios-actions";

export const FormLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [clave, setClave] = useState<string>("");
    const [rolId, setRolId] = useState<number>(0);
    const [doctorId, setDoctorId] = useState<number>(0);

  const cleanValues = () => {
    setEmail("");
    setClave("");
    setRolId(0);
    setDoctorId(0);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
        email.trim().length === 0 ||
        clave.trim().length === 0 ||
        rolId === 0
    ) return;
    
    try {
      await addLogin(
        email,
        clave,
        rolId,
        doctorId
      );
      cleanValues();
      router.refresh();
    } catch (error) {
      console.error("Error al guardar el paciente:", error);
    }

  };
  return (
    <form onSubmit={onSubmit}>
      <div className="p-5">

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Email
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="email"
            placeholder="Ingresa el correo electrónico"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Clave
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="password"
            placeholder="Ingresa la clave"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Selecciona tipo de usuario
            {true && <span className="text-red">*</span>}
          </label>
          <select
            value={rolId}
            onChange={(e) => setRolId(parseInt(e.target.value))}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          >
            {/* {login.map((rol) => (
              <option key={rol.id} value={rol.id}>
                {login.nombre}
              </option>
            ))} */}
          </select>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Selecciona Médico (si corresponde)
          </label>
          <select
            value={rolId}
            onChange={(e) => setRolId(parseInt(e.target.value))}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          >
            {/* {login.map((rol) => (
              <option key={rol.id} value={rol.id}>
                {login.nombre}
              </option>
            ))} */}
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex space-x-4">
          <button
            type="button"
            className="my-1 flex w-full justify-center rounded-[7px] border border-primary py-1.5 font-medium hover:bg-opacity-90 dark:text-white"
            onClick={cleanValues}
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
