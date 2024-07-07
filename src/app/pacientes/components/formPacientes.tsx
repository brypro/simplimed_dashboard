"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addPaciente } from "@/app/pacientes/actions/pacientes-actions";
import AlertSuccess from "@/components/Alerts/AlertSuccess";

export const FormPacientes = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [direccion, setDireccion] = useState<string>("");
  const [fechaNac, setFechaNac] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [celular, setCelular] = useState<string>("");

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const cleanValues = () => {
    setNombre("");
    setApellido("");
    setDireccion("");
    setFechaNac("");
    setEmail("");
    setCelular("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nombre.trim().length === 0 ||
      apellido.trim().length === 0 ||
      fechaNac.trim().length === 0 ||
      direccion.trim().length === 0 ||
      email.trim().length === 0 ||
      celular.trim().length === 0
    ) return;
    
    try {
      await addPaciente(
        nombre,
        apellido,
        new Date(fechaNac),
        direccion,
        email,
        celular
      );
      cleanValues();
      setShowSuccessModal(true);
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
            Nombre
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa nombre del paciente"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Apellido
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa apellido del paciente"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
   

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Fecha de nacimiento
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="date"
            placeholder="Ingresa la fecha de nacimiento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={fechaNac}
            onChange={(e) => setFechaNac(e.target.value)}
            max={new Date().toLocaleString('sv-CL').split(' ')[0]}
            min={(new Date(new Date().getFullYear() - 115, new Date().getMonth(), new Date().getDate())).toISOString().split('T')[0]}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Dirección
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa la dirección"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

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
            Teléfono
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="number"
            placeholder="Ingresa el teléfono del paciente"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
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
          message="Paciente guardado correctamente"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </form>
  );
};
