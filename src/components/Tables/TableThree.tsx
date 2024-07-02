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
              TIPO
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              VALOR
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              DURACIÓN
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              PREPARACIÓN PREVIA
            </h5>
          </div>
          <div>
            <h5 className="text-sm font-medium uppercase xsm:text-base">Acciones</h5>
          </div>
        </div>

        {examenesData.map((examen, key) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-6 ${
              key === examenesData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {examen.name}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {examen.type}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                ${examen.price}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {examen.time}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {examen.prep}
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

export default TableThree;
