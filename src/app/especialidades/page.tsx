import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { EspecialidadItem } from "@/app/especialidades/components/especialidadItem";
import {
  addEspecialidad,
  getEspecialidades,
} from "@/app/especialidades/actions/especialidades-actions";
import { FormEspecialidad } from "@/app/especialidades/components/formEspecialidad";

export const metadata: Metadata = {
  title: "Especialidades",
  description: "Especialidades de SimpliMed.",
};

const TablesPage = async () => {
  const especialidades = await getEspecialidades();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Especialidades" />
      <div
        className="mb-5 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
        style={{ maxWidth: "600px" }}
      >
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Añadir Especialidad
          </h3>
        </div>
        <FormEspecialidad />
      </div>
      <div className="flex flex-col gap-10">
        <div
          style={{ maxWidth: "600px" }}
          className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card"
        >
          {especialidades.map((especialidad) => (
            <EspecialidadItem
              especialidad={especialidad}
              key={especialidad.id}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
