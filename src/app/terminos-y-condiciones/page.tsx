import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Simplimed - Términos y Condiciones",
};

const Terminos = () => {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Términos y condiciones" />
        <div className="max-w-3xl px-2 py-8">
          <section>
            <p className="mb-4">
              Bienvenido/a a SimpliMed. Los siguientes términos y condiciones
              rigen el uso de nuestra plataforma por parte de administradores y
              médicos. Al acceder y utilizar nuestros servicios, usted acepta
              estar legalmente vinculado por estos términos y condiciones. Por
              favor, léalos detenidamente.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold">
              Acceso y uso del servicio
            </h2>
            <p className="mb-4">
              Cuentas y seguridad: Usted es responsable de mantener la
              confidencialidad de su cuenta y contraseña. Cualquier actividad
              realizada bajo su cuenta es su responsabilidad.
            </p>
            <p className="mb-4">
              Uso adecuado: Usted se compromete a utilizar nuestros servicios de
              manera ética y conforme a las leyes aplicables.
            </p>
            <p className="mb-4">
              Restricción de uso: Esta plataforma está diseñada para ser utilizada exclusivamente en el entorno laboral del centro médico. Cualquier uso no autorizado fuera de este contexto está prohibido.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold">
              Responsabilidades específicas
            </h2>
            <p className="mb-4">
              Administradores: Son responsables de la gestión de usuarios,
              médicos, especialidades, medicamentos, exámenes y cuentas de usuario.
            </p>
            <p className="mb-4">
              Médicos: Son responsables de la gestión de pacientes, historias
              clínicas y consultas médicas.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold">
              Privacidad y confidencialidad
            </h2>
            <p className="mb-4">
              Protección de la información: La información médica y personal de
              los pacientes debe ser tratada con la máxima confidencialidad y
              conforme a las leyes de protección de datos y salud aplicables.
            </p>
            <p className="mb-4">
              Acceso limitado: Los médicos solo pueden acceder a la información
              del paciente cuando sea necesario para la prestación de servicios
              médicos o administrativos.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold">Propiedad intelectual</h2>
            <p className="mb-4">
              Derechos de autor: Todo el contenido proporcionado en nuestra
              plataforma está protegido por derechos de autor y no debe ser
              utilizado sin autorización.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold">
              Modificaciones y actualizaciones
            </h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos y
              condiciones en cualquier momento. Las actualizaciones entrarán en
              vigencia inmediatamente después de su publicación.
            </p>
          </section>

          <hr className="border-t-2 border-grey mb-4" />

          <section>
            <p>
              Al utilizar nuestros servicios, usted acepta cumplir con estos términos y condiciones. Si tiene alguna pregunta sobre estos términos, por favor contáctenos.
            </p>
          </section>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Terminos;
