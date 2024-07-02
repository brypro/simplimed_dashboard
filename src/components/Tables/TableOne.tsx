import { MEDICOS } from "@/types/medicos";

const medicosData: MEDICOS[] = [
  {
    name: "Gloria Navarro",
    email: "glorianavarro@gmail.com",
    direccion: "Calle 1 #23",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
  {
    name: "Carlos Sánchez",
    email: "carlossanchez@gmail.com",
    direccion: "Calle 2 #24",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
  {
    name: "María Pérez",
    email: "mariaperez@gmail.com",
    direccion: "Calle 3 #25",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
  {
    name: "José Rodríguez",
    email: "joserodriguez@gmail.com",
    direccion: "Calle 4 #26",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-light dark:bg-gray-dark">
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DIRECCIÓN</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TELÉFONO</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ESPECIALIDAD</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
          {medicosData.map((medico, key) => (
            <tr key={key}>
              <td className="px-2 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{medico.name}</td>
              <td className="px-2 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{medico.email}</td>
              <td className="px-2 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{medico.direccion}</td>
              <td className="px-2 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{medico.telefono}</td>
              <td className="px-2 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{medico.especialidad}</td>
              <td className="px-2 py-4 whitespace-nowrap font-medium flex space-x-2">
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

export default TableOne;
