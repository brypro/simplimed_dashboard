import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "./components/TableThree";
import { FormExamenes } from "./components/formExamenes";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Exámenes",
  description: "Exámenes de SimpliMed.",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Exámenes"/>

          {/* <!-- Form --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-5" style={{ maxWidth: '600px'}}>
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Añadir Examen
              </h3>
            </div>
            <FormExamenes />
          </div>
    
      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
