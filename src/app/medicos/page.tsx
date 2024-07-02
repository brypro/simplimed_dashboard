import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Médicos",
  description: "Médicos de SimpliMed.",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Médicos"/>
      <ButtonDefault
              label="Añadir"
              link="/"
              customClasses="bg-primary text-white rounded-full px-10 py-2 lg:px-8 xl:px-10 mb-3"
      />
      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
