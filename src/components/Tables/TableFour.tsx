import { medicamentos } from "@/types/medicamentos";

const medicamentosData: medicamentos[] = [
    {
      name: "Paracetamol",
      proveedor: "Farmacia XYZ",
      price: 15,
      stock: 100,
      caducidad: "2025-06-30",
    },
    {
      name: "Amoxicilina",
      proveedor: "Farmacia ABC",
      price: 25,
      stock: 50,
      caducidad: "2024-12-15",
    },
    {
      name: "Omeprazol",
      proveedor: "Farmacia DEF",
      price: 30,
      stock: 80,
      caducidad: "2023-09-20",
    },
  ];
  


const Table = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">

      <div className="flex flex-col">
        <div className="grid grid-cols-6 sm:grid-cols-6">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Nombre
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
                Proveedor
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
                Precio
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
                Stock
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
                Caducidad
            </h5>
          </div>
          <div>
            <h5 className="text-sm font-medium uppercase xsm:text-base">Acciones</h5>
          </div>
        </div>

        {medicamentosData.map((medicamento, key) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-6 ${
              key === medicamentosData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {medicamento.name}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {medicamento.proveedor}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                ${medicamento.price}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {medicamento.stock}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {medicamento.caducidad}
              </p>
            </div>

            <div className="flex space-x-4">
                  <button className="rounded-[7px] bg-primary p-1 font-medium text-white hover:bg-opacity-90 my-5">
                    Editar
                  </button>
                  <button className="rounded-[7px] bg-red-400 p-1 font-medium text-white hover:bg-opacity-90 my-5">
                    Eliminar
                  </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
