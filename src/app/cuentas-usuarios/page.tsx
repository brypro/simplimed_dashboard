import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormLogin } from "./components/formCuentasUsuarios";
import { getLogins, getRoles } from "./actions/cuentas-usuarios-actions";
import { LoginItem } from "./components/cuentaUsuarioItem";
import { getMedicos } from "@/app/medicos/actions/medicos-actions";

export const metadata: Metadata = {
  title: "Cuentas de Usuarios",
};

const TablesPage = async () => {
  const usuarios = await getLogins();
  const roles = await getRoles();
  const medicos = await getMedicos();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Cuentas de usuarios" />

      {/* <!-- Form --> */}
      <div
        className="mb-5 rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
        style={{ maxWidth: "600px" }}
      >
        <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Añadir nueva cuenta de usuario.
          </h3>
        </div>

        <FormLogin roles={roles} medicos={medicos} />
      </div>

      <div className="flex flex-col gap-10">
        <div
          className="overflow-x-auto rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card"
          style={{ maxWidth: "600px" }}
        >
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-light dark:bg-gray-dark">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Tipo de usuario
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Médico asignado
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-dark">
              {usuarios.map((login, key) => (
                <LoginItem
                  key={key}
                  login={login}
                  medicos={medicos}
                  roles={roles}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
