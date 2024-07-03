import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormConsultaMedica } from "@/app/consulta-medica/components/formConsultaMedica";

export const metadata: Metadata = {
  title: "Consulta Médica",
  description: "Consulta médica de SimpliMed.",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Consulta médica" />

      {/* <!-- Form --> */}
      <div
        className="mb-5 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
        style={{ maxWidth: "600px" }}
      >
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Generar consulta
          </h3>
        </div>

        <FormConsultaMedica />
     
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
