import { examenes } from "@/types/examenes";

const examenesData: examenes[] = [
  {
    name: "Análisis de sangre completo",
    type: "Sangre",
    price: 150,
    time: "1 hora",
    prep: "Ayuno de 8 horas antes del examen.",
  },
  {
    name: "Radiografía de tórax",
    type: "Radiografía",
    price: 200,
    time: "30 minutos",
    prep: "No se requiere preparación especial.",
  },
  {
    name: "Electrocardiograma",
    type: "Cardiología",
    price: 100,
    time: "15 minutos",
    prep: "No se requiere preparación especial.",
  },
];


const TableThree = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-light dark:bg-gray-dark">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TIPO</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VALOR</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DURACIÓN</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PREPARACIÓN PREVIA</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
          {examenesData.map((examen, key) => (
            <tr key={key}>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{examen.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{examen.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">${examen.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{examen.time}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{examen.prep}</td>
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

export default TableThree;
