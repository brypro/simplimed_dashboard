import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FormInformacionMedica } from "../components/formInformacionMedica";
import { FormInformacionContacto } from "../components/formInformacionContacto";
import { ConsultasMedicasTable } from "../components/consultasTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import {
  getAllMedicos,
  getConsultasMedicasByPacienteId,
  getHistorialMedicoByPacienteId,
  getPacienteById,
} from "@/app/ficha-medica/actions/ficha-actions";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Ficha médica",
  description: "Ficha médica de SimpliMed.",
};

interface Props {
  params: {
    id: string;
  };
}

const TablesPage = async ({ params }: Props) => {
  const { id } = params;

  const paciente = await getPacienteById(parseInt(id));
  if (!paciente) {
    notFound();
  }
  const historialMedico = await getHistorialMedicoByPacienteId(parseInt(id));
  const consultasMedicas = await getConsultasMedicasByPacienteId(parseInt(id));
  const medicos = await getAllMedicos();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Ficha médica" />

      {/* <!-- Form --> */}
      <div
        className="mb-5 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
        style={{ maxWidth: "600px" }}
      >
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Información de contacto
          </h3>
        </div>
        <FormInformacionContacto paciente={paciente} />
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Información médica
          </h3>
        </div>
        <FormInformacionMedica
          historialMedico={historialMedico}
          pacienteId={paciente.id}
        />
      </div>

      <div className="mb-5 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Consultas médicas realizadas
          </h3>
        </div>
        <ConsultasMedicasTable consultas={consultasMedicas} medicos={medicos} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
