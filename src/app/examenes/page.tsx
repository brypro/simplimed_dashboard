import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormExamenes } from "./components/formExamenes";
import { getExamenes } from "./actions/examenes-actions";
import { ExamenItem } from "./components/examenItem";

export const metadata: Metadata = {
  title: "Exámenes",
  description: "Exámenes de SimpliMed.",
};

const TablesPage = async () => {
  const examenesData = await getExamenes();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Exámenes" />

      <div
        className="mb-5 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
        style={{ maxWidth: "600px" }}
      >
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Añadir Examen
          </h3>
        </div>
        <FormExamenes />
      </div>

      <div className="flex flex-col gap-10">
        <div className="overflow-x-auto rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-light dark:bg-gray-dark">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Nombre
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Tipo
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Valor
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Duración
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Preparación previa
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-dark">
              {examenesData.map((examen, key) => (
                <ExamenItem key={key} examen={examen} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
