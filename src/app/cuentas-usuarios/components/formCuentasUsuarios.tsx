"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addLogin } from "@/app/cuentas-usuarios/actions/cuentas-usuarios-actions";
import { Doctor, Rol } from "@prisma/client";
import AlertSuccess from "@/components/Alerts/AlertSuccess";


interface Props {
  roles: Rol[];
  medicos: Doctor[];
}

export const FormLogin = ({ roles, medicos }: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rolId, setRolId] = useState<number>(1);
  const [doctorId, setDoctorId] = useState<number>(0);

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  // if ! exist medico with id 0
  if (!medicos.find((medico) => medico.id === 0)) {
    // at first place
    medicos.unshift({
      id: 0,
      nombre: "Ninguno.",
      apellido: "",
      especialidadId: 0,
      celular: "",
      fechaNac: new Date(),
      direccion: "",
      rut: "",
      rolId: 0,
    });
  }
  const cleanValues = () => {
    setEmail("");
    setPassword("");
    setRolId(0);
    setDoctorId(0);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Front data", {
      email,
      clave: password,
      rolId,
      doctorId,
    });

    if (
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      rolId === 0
    )
      return;

    try {
      await addLogin(email, password, rolId, doctorId === 0 ? null : doctorId);
      setShowSuccessModal(true);
      cleanValues();
      router.refresh();
    } catch (error) {
      console.error("Error al guardar el paciente:", error);
    }
    router.refresh();
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            {roles.map((rol) => (
              <option key={rol.id} value={rol.id}>
                {rol.tipoRol}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Selecciona Médico (si corresponde)
          </label>
          <select
            value={doctorId}
            onChange={(e) => setDoctorId(parseInt(e.target.value))}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          >
            {medicos.map((medico) => (
              <option key={medico.id} value={medico.id}>
                {medico.nombre + " " + medico.apellido}
              </option>
            ))}
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

      {showSuccessModal && (
        <AlertSuccess
          message="Usuario guardado correctamente"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
      
    </form>
  );
};
