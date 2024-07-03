import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FormInformacionMedica } from "./components/formInformacionMedica";
import { FormInformacionContacto } from "./components/formInformacionContacto";
import { ConsultasMedicasTable } from "./components/consultasTable";


import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Ficha médica",
  description: "Ficha médica de SimpliMed.",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Ficha médica"/>

          {/* <!-- Form --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-5" style={{ maxWidth: '600px'}}>
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Información de contacto
              </h3>
            </div>
            <FormInformacionContacto />
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Información médica
              </h3>
            </div>
            <FormInformacionMedica />
          </div>

          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-5">
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Consultas médicas realizadas
              </h3>
            </div>
            <ConsultasMedicasTable />
          </div>
    
    </DefaultLayout>
  );
};

export default TablesPage;
