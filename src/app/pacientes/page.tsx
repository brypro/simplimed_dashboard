import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormPacientes } from "./components/formPacientes";
import { getPacientes } from "./actions/pacientes-actions";
import { InsumoItem } from "../medicamentos/components/insumoItem";
import { PacienteItem } from "./components/pacienteItem";


export const metadata: Metadata = {
  title: "Pacientes",
  description: "Pacientes de SimpliMed.",
};

const TablesPage = async () => {
  const pacientesData = await getPacientes();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pacientes"/>

          {/* <!-- Form --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-5" style={{ maxWidth: '600px'}}>
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Añadir Paciente
              </h3>
            </div>

            <FormPacientes />
            
          </div>
    
          <div className="flex flex-col gap-10">
          <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-light dark:bg-gray-dark">
                <tr>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Nac</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Celular</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
                {pacientesData.map((paciente, key) => (
                  <PacienteItem key={key} paciente={paciente} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </DefaultLayout>
  );
};

export default TablesPage;
