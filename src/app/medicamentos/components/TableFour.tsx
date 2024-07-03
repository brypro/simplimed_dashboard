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
  


  const TableFour = () => {
    return (
      <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-light dark:bg-gray-dark">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caducidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
            {medicamentosData.map((medicamento, key) => (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{medicamento.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{medicamento.proveedor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">${medicamento.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{medicamento.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{medicamento.caducidad}</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium flex space-x-2">
                  <button className="rounded-[7px] bg-primary p-1 text-white font-medium hover:bg-opacity-90">
                    Editar
                  </button>
                  <button className="rounded-[7px] bg-red-400 p-1 text-white font-medium hover:bg-opacity-90">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableFour;
  