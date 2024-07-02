import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableFour from "@/components/Tables/TableFour";
import InputGroup from "@/components/FormElements/InputGroup";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Medicamentos",
  description: "Medicamentos de SimpliMed.",
};

const TablesPage = () => {
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
            <form action="#">
              <div className="p-5">

                <InputGroup
                  label="Nombre"
                  type="text"
                  placeholder="Ingresa nombre y apellido"
                  customClasses="mb-3"
                  required
                />

                <InputGroup
                  label="Proveedor"
                  type="text"
                  placeholder="Ingresa el proveedor del medicamento"
                  customClasses="mb-3"
                  required
                />

                <InputGroup
                  label="Valor"
                  type="number"
                  placeholder="Ingresa el valor del medicamento"
                  customClasses="mb-3"
                  required
                />

                <InputGroup
                  label="Stock"
                  type="number"
                  placeholder="Ingresa el stock del medicamento"
                  customClasses="mb-3"
                  required
                />

                <InputGroup
                  label="Caducidad"
                  type="date"
                  placeholder="Ingresa la fecha de caducidad del medicamento"
                  customClasses="mb-3"
                  required
                />
            
                <div className="flex space-x-4 ">
                  <button className="my-1 py-1.5 flex w-full justify-center rounded-[7px] border border-primary font-medium dark:text-white hover:bg-opacity-90">
                    Limpiar
                  </button>
                  <button className="my-1 flex py-1.5 w-full justify-center rounded-[7px] bg-primary font-medium text-white hover:bg-opacity-90">
                    Guardar
                  </button>
                </div>

              </div>
            </form>
          </div>
    
      <div className="flex flex-col gap-10">
        <TableFour />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
