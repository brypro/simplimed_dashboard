"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addExamen } from "@/app/examenes/actions/examenes-actions";
import AlertSuccess from "@/components/Alerts/AlertSuccess";

export const FormExamenes = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [valor, setValor] = useState<number>(1);
  const [duracion, setDuracion] = useState<string>("");
  const [preparacionPrevia, setPreparacionPrevia] = useState<string>("");

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const cleanValues = () => {
    setNombre("");
    setTipo("");
    setValor(1);
    setDuracion("");
    setPreparacionPrevia("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nombre.trim().length === 0 ||
      tipo.trim().length === 0 ||
      valor === 0 ||
      duracion.trim().length === 0
    ) return;
    
    try {
      await addExamen(
        nombre,
        tipo,
        valor,
        duracion,
        preparacionPrevia
      );
      cleanValues();
      setShowSuccessModal(true);
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.error("Error al guardar el examen:", error);
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
            placeholder="Ingresa examen"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Tipo
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa el tipo de examen"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Valor
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="number"
            placeholder="Ingresa el valor del examen"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
            value={valor}
            onChange={(e) => setValor(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Duración
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa la duración del examen"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            required
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Preparación previa
          
          </label>
          <input
            type="text"
            placeholder="Ingresa la preparación previa del examen"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
       
            value={preparacionPrevia}
            onChange={(e) => setPreparacionPrevia(e.target.value)}
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
          message="Examen guardado correctamente"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </form>
  );
};
