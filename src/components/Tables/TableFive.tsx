import { pacientes } from "@/types/pacientes";

const pacientesData: pacientes[] = [
    {
        name: "María Pérez",
        birthDate: "1990-06-30",
        direccion: "Calle 1 #23",
        email: "mariaperez@gmail.com",
        celular: 56988552266,
    },
    {
        name: "Manuel Rodríguez",
        birthDate: "1991-06-30",
        direccion: "Calle 2 #24",
        email: "manuelrodriguez@gmail.com",
        celular: 56988552266,
    },
    {
        name: "Mónica Sánchez",
        birthDate: "1992-06-30",
        direccion: "Calle 3 #25",
        email: "monicasanchez@gmail.com",
        celular: 56988552266,
    },

];

const TableFive = () => {
    return (
      <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-light dark:bg-gray-dark">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FECHA NAC.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DIRECCIÓN</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CELULAR</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
            {pacientesData.map((paciente, key) => (
              <tr key={key}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{paciente.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{paciente.birthDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{paciente.direccion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{paciente.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{paciente.celular}</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium flex space-x-2">
                  <button className="rounded-[7px] bg-primary p-1 text-white font-medium hover:bg-opacity-90">
                    Editar
                  </button>
                  <button className="rounded-[7px] bg-red-400 p-1 text-white font-medium hover:bg-opacity-90">
                    Eliminar
                  </button>
                  <button className="rounded-[7px] bg-green-500 p-1 text-white font-medium hover:bg-opacity-90">
                    Ficha médica
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  

export default TableFive;
