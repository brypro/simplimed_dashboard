import { especialidades } from "@/types/especialidades";

const especialidadesData: especialidades[] = [
  { name: "Medicina General" },
  { name: "Pediatría" },
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

const TableTwo = async () => {
  return (
    <div
      style={{ maxWidth: "600px" }}
      className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card"
    >
      {especialidadesData.map(
        (especialidades) => (
          console.log(especialidades.name),
          (
            <div
              className="grid grid-cols-2 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-4 md:px-6 2xl:px-7.5"
              key={especialidades.id}
            >
              <div className="col-span-3 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-body-md font-medium text-dark dark:text-dark-6">
                    {especialidades.name}
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="rounded-[7px] bg-primary p-1 font-medium text-white hover:bg-opacity-90">
                  Editar
                </button>
                <button className="rounded-[7px] bg-red-400 p-1 font-medium text-white hover:bg-opacity-90">
                  Eliminar
                </button>
              </div>
            </div>
          )
        ),
      )}
    </div>
  );
};

export default TableTwo;
