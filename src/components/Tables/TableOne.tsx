import { MEDICOS } from "@/types/medicos";
import Image from "next/image";

const medicosData: MEDICOS[] = [
  {
    picture: "/images/medicos/1.jpg",
    name: "Gloria Navarro",
    email: "glorianavarro@gmail.com",
    direccion: "Calle 1 #23",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
  {
    picture: "/images/medicos/2.jpg",
    name: "Carlos Sánchez",
    email: "carlossanchez@gmail.com",
    direccion: "Calle 2 #24",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
  {
    picture: "/images/medicos/3.jpg",
    name: "María Pérez",
    email: "mariaperez@gmail.com",
    direccion: "Calle 3 #25",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
  {
    picture: "/images/medicos/4.jpg",
    name: "José Rodríguez",
    email: "joserodriguez@gmail.com",
    direccion: "Calle 4 #26",
    telefono: 56988552266,
    especialidad: "Medicina General",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">

      <div className="flex flex-col">
        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Nombre
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              EMAIL
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              DIRECCIÓN
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              TELÉFONO
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ESPECIALIDAD
            </h5>
          </div>
        </div>

        {medicosData.map((medico, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === medicosData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <div className="flex-shrink-0">
                <Image src={medico.picture} alt="medico" width={48} height={48} />
              </div>
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {medico.name}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {medico.email}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {medico.direccion}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {medico.telefono}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {medico.especialidad}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
