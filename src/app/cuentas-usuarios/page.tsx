import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { FormLogin } from "./components/formCuentasUsuarios";
import { getLogin } from "./actions/cuentas-usuarios-actions";
import { LoginItem } from "./components/cuentaUsuarioItem";


export const metadata: Metadata = {
  title: "Cuentas de Usuarios",
};

const TablesPage = async () => {
  const loginData = await getLogin();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Cuentas de usuarios"/>

          {/* <!-- Form --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-5" style={{ maxWidth: '600px'}}>
            <div className="border-b border-stroke px-5 py-3 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Añadir cuenta de usuario
              </h3>
            </div>

            <FormLogin />
            
          </div>
    
          <div className="flex flex-col gap-10">
            <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto" style={{ maxWidth: '600px'}}>
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-light dark:bg-gray-dark">
                  <tr>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de usuario</th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
                  {loginData.map((login, key) => (
                    <LoginItem key={key} login={login} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    </DefaultLayout>
  );
};

export default TablesPage;
