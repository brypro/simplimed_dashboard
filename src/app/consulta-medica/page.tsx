import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormConsultaMedica } from "@/app/consulta-medica/components/formConsultaMedica";
import {
  getMedicoById,
  getPacientes,
} from "@/app/pacientes/actions/pacientes-actions";
import { auth } from "@/auth";
import { getUserbyEmail } from "@/app/auth/actions/auth-actions";

export const metadata: Metadata = {
  title: "Consulta Médica",
  description: "Consulta médica de SimpliMed.",
};

const TablesPage = async () => {
  const pacientes = await getPacientes();
  const session = await auth();
  const user = await getUserbyEmail(session?.user!.email!);
  const medicoLogeado = await getMedicoById(user?.doctorId!);
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

        <FormConsultaMedica
          pacientes={pacientes}
          medicoId={user?.doctorId!}
          medicoName={medicoLogeado?.nombre! + " " + medicoLogeado?.apellido!}
        />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
