"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addInsumo } from "@/app/medicamentos/actions/medicamentos-actions";
import AlertSuccess from "@/components/Alerts/AlertSuccess";

export const FormMedicamentos = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [valor, setValor] = useState<number>(1);
  const [stock, setStock] = useState<number>(1);
  const [caducidad, setCaducidad] = useState("");
  const [contraindicaciones, setContraindicaciones] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const cleanValues = () => {
    setNombre("");
    setProveedor("");
    setValor(1);
    setStock(1);
    setCaducidad("");
    setContraindicaciones("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Front data", {
      nombre,
      proveedor,
      valor,
      stock,
      caducidad,
      contraindicaciones,
    });

    if (
      nombre.trim().length === 0 ||
      proveedor.trim().length === 0 ||
      valor === 0 ||
      stock === 0 ||
      caducidad.trim().length === 0
    ) return;
    
    try {
      await addInsumo(
        nombre,
        proveedor,
        valor,
        stock,
        new Date(caducidad),
        contraindicaciones
      );
      cleanValues();
      setShowSuccessModal(true);
      router.refresh();
    } catch (error) {
      console.error("Error al guardar el insumo:", error);
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
            placeholder="Ingresa nombre del medicamento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Proveedor
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="text"
            placeholder="Ingresa el proveedor del medicamento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Valor
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="number"
            placeholder="Ingresa el valor del medicamento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={valor}
            onChange={(e) => setValor(+e.target.value)}            
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Stock
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="number"
            placeholder="Ingresa el stock del medicamento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={stock}
            onChange={(e) => setStock(+e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Caducidad
            {true && <span className="text-red">*</span>}
          </label>
          <input
            type="date"
            placeholder="Ingresa la fecha de caducidad del medicamento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-1 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={caducidad}
            onChange={(e) => setCaducidad(e.target.value)}
            min={new Date().toLocaleString('sv-CL').split(' ')[0]}
            required
          />
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
            Contraindicaciones

          </label>
          <textarea
            rows={2}
            placeholder="Ingrese contraindicaciones del medicamento"
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            value={contraindicaciones}
            onChange={(e) => setContraindicaciones(e.target.value)}
       
         ></textarea>
        </div>

         {/* Buttons */}
         <div className="mt-5 flex space-x-4">
          <button
            type="button"
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
          message="Medicamento guardado correctamente"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </form>
  );
};
