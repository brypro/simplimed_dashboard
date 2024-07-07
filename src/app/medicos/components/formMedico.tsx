"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addMedico } from "@/app/medicos/actions/medicos-actions";
import { Especialidad } from "@prisma/client";
import AlertSuccess from "@/components/Alerts/AlertSuccess";

interface Props {
  especialidades: Especialidad[];
}

export const FormMedico = ({ especialidades }: Props) => {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [rut, setRut] = useState("");
  const [selectedEspecialidad, setSelectedEspecialidad] = useState<number>(1);

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const cleanValues = () => {
    setNombre("");
    setApellido("");
    setTelefono("");
    setDireccion("");
    setFechaNac("");
    setRut("");
    setSelectedEspecialidad(1);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nombre.trim().length === 0 ||
      apellido.trim().length === 0 ||
      telefono.trim().length === 0 ||
      direccion.trim().length === 0 ||
      fechaNac.trim().length === 0 ||
      rut.trim().length === 0
    ) return;

    try {
      await addMedico(
        nombre,
        apellido,
        telefono,
        direccion,
        new Date(fechaNac),
        rut,
        selectedEspecialidad,
      );
      cleanValues();
      router.refresh();
    } catch (error:any) {
      setShowSuccessModal(true);
      console.error("Error al guardar el médico:", error);
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
            placeholder="Ingresa el nombre"
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
            placeholder="Ingresa el Apellido"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Teléfono
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa el Teléfono"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
            placeholder="Ingresa la Dirección"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Fecha de Nacimiento
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="date"
            placeholder="Ingresa fecha de nacimiento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={fechaNac}
            onChange={(e) => setFechaNac(e.target.value)}
            required
            max={(new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())).toISOString().split('T')[0]}
            min={(new Date(new Date().getFullYear() - 115, new Date().getMonth(), new Date().getDate())).toISOString().split('T')[0]}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            RUT
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa Rut"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Seleccione una especialidad
            {true && <span className="text-red">*</span>}
          </label>
          <select
            onChange={(e) => setSelectedEspecialidad(parseInt(e.target.value))}
            value={selectedEspecialidad}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
          >
            {especialidades.map((especialidad) => (
              <option key={especialidad.id} value={especialidad.id}>
                {especialidad.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* buttons */}
        <div className="flex space-x-4 ">
          <button
            onClick={cleanValues}
            className="my-1 flex w-full justify-center rounded-[7px] border border-primary py-1.5 font-medium hover:bg-opacity-90 dark:text-white"
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
          message="Médico guardado correctamente"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </form>
  );
};
