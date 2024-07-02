import { especialidades } from "@/types/especialidades";

const especialidadesData: especialidades[] = [
  { name: "Medicina General"},
  { name: "Pediatría"},
  { name: "Ginecología" },
  { name: "Cardiología" },
  { name: "Neurología" },
  { name: "Dermatología" },
  { name: "Oftalmología" },
  { name: "Otorrinolaringología" },
  { name: "Traumatología" },
  { name: "Psiquiatría" },
  { name: "Nutrición" },
  { name: "Odontología" },
  { name: "Fisioterapia" },
  { name: "Psicología" },
  { name: "Reumatología" },
  { name: "Urología" },
  { name: "Endocrinología" },
  { name: "Oncología" },
  { name: "Nefrología" },
  { name: "Neumología" },
  { name: "Geriatría" },
  { name: "Cirugía General" },
  { name: "Cirugía Plástica" },
  { name: "Cirugía Cardiovascular" },
  { name: "Cirugía Maxilofacial" },
  { name: "Cirugía Pediátrica" },
  { name: "Cirugía Vascular" },
  { name: "Cirugía Torácica" },
  { name: "Cirugía Oncológica" },
  { name: "Cirugía Ginecológica" },
  { name: "Cirugía Urológica" },
  { name: "Cirugía Oftalmológica" },
  { name: "Cirugía Otorrinolaringológica" },

];

const TableTwo = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto" style={{ maxWidth: '600px'}}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
          {especialidadesData.map((especialidad, key) => (
            <tr key={key}>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white" colSpan={3}>
                {especialidad.name}
              </td>
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

export default TableTwo;
