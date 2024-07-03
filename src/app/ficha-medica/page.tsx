import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import InputGroup from "@/components/FormElements/InputGroup";

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
            <form action="#">
              <div className="p-5">

                <InputGroup
                  label="Nombre paciente"
                  type="text"
                  placeholder=""
                  customClasses="mb-3"
                />

                <InputGroup
                  label="Fecha de nacimiento"
                  type="text"
                  placeholder=""
                  customClasses="mb-3"
                />

                <InputGroup
                  label="Dirección"
                  type="text"
                  placeholder=""
                  customClasses="mb-3"
                />

                <InputGroup
                  label="Email"
                  type="email"
                  placeholder=""
                  customClasses="mb-3"
                />

                <InputGroup
                  label="Celular"
                  type="number"
                  placeholder=""
                  customClasses="mb-3"
                />
              </div>  
            </form>
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Información médica
              </h3>
            </div>
            <form action="#">
              <div className="p-5">

                <InputGroup
                  label="Enfermedades previas"
                  type="text"
                  placeholder="Ingrese enfermedades previas del paciente"
                  customClasses="mb-3"
                />

                <InputGroup
                  label="Cirugías"
                  type="text"
                  placeholder="Ingrese cirugías previas del paciente"
                  customClasses="mb-3"
                />

                <InputGroup
                  label="Alergias"
                  type="text"
                  placeholder="Ingrese alergias del paciente"
                  customClasses="mb-3"
                />

                <InputGroup
                  label="Observaciones"
                  type="text"
                  placeholder="Ingrese observaciones"
                  customClasses="mb-3"
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
    
    </DefaultLayout>
  );
};

export default TablesPage;
