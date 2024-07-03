import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormMedico } from "@/app/medicos/components/formMedico";
import {
  getAllEspecialidades,
  getMedicos,
} from "@/app/medicos/actions/medicos-actions";
import { MedicoItem } from "@/app/medicos/components/medicoItem";

export const metadata: Metadata = {
  title: "Médicos",
  description: "Médicos de SimpliMed.",
};

const TablesPage = async () => {
  const especialidades = await getAllEspecialidades();
  const medicosData = await getMedicos();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Médicos" />

      {/* <!-- Form --> */}
      <div
        className="mb-5 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
        style={{ maxWidth: "600px" }}
      >
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Añadir Médico
          </h3>
        </div>
        <FormMedico especialidades={especialidades} />
      </div>

      <div className="flex flex-col gap-10">
        <div className="overflow-x-auto rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-light dark:bg-gray-dark">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  NOMBRE
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  APELLIDO
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  DIRECCIÓN
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  TELÉFONO
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  FECHA NAC.
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  RUT
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ESPECIALIDAD
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-dark">
              {medicosData.map((medico, key) => (
                <MedicoItem
                  key={key}
                  medico={medico}
                  especialidades={especialidades}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
