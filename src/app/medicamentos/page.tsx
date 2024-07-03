import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormMedicamentos } from "@/app/medicamentos/components/formMedicamentos";
import { getInsumos } from "@/app/medicamentos/actions/medicamentos-actions";
import { InsumoItem } from "@/app/medicamentos/components/insumoItem";

export const metadata: Metadata = {
  title: "Medicamentos",
  description: "Medicamentos de SimpliMed.",
};

const TablesPage = async () => {
  const medicamentosData = await getInsumos();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Medicamentos"/>

        {/* <!-- Form --> */}
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-5" style={{ maxWidth: '600px'}}>
          <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              Añadir Medicamento
            </h3>
          </div>
          <FormMedicamentos />
        </div>
    
        <div className="flex flex-col gap-10">
          <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-light dark:bg-gray-dark">
                <tr>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caducidad</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contraindicaciones</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
                {medicamentosData.map((medicamento, key) => (
                  <InsumoItem key={key} insumo={medicamento} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </DefaultLayout>
  );
};

export default TablesPage;
