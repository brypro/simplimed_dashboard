import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import InputGroup from "@/components/FormElements/InputGroup";

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

          {/* <!-- Contact Form --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-5" style={{ maxWidth: '400px'}}>
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Añadir Médico
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
                  label="Email"
                  type="email"
                  placeholder="Ingresa el correo electrónico"
                  customClasses="mb-3"
                  required
                />

                <InputGroup
                  label="Dirección"
                  type="text"
                  placeholder="Ingresa la dirección"
                  customClasses="mb-3"
                  required
                />

                <InputGroup
                  label="Celular"
                  type="text"
                  placeholder="Ingresa el número de celular"
                  customClasses="mb-3"
                  required
                />

                <InputGroup
                  label="Especialidad"
                  type="text"
                  placeholder="Ingresa la especialidad"
                  customClasses="mb-3"
                  required
                />
            
                <div className="flex space-x-4 ">
                  <button className="my-1 flex w-full justify-center rounded-[7px] border border-primary p-[13px] font-medium dark:text-white hover:bg-opacity-90">
                    Limpiar
                  </button>
                  <button className="my-1 flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                    Guardar
                  </button>
                </div>

              </div>
            </form>
          </div>
    
      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
