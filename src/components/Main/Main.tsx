import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ButtonDefault from "@/components/Buttons/ButtonDefault";


export const metadata: Metadata = {
  title: "SimpliMed",
  description: "Inicia sesión en tu cuenta de SimpliMed.",
};

const Main: React.FC = () => {
  return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-dark">
      <div className="flex flex-wrap items-center h-full">

        <div className="w-full p-7.5 h-full">
          <div className="bg-white rounded-2xl px-12.5 py-12.5 dark:!bg-dark-2 dark:bg-none h-full flex flex-col justify-center">
            <Link className="mb-10 inline-block" href="/">
              <Image
                className="hidden dark:block"
                src={"/images/logo/logo.svg"}
                alt="Logo"
                width={176}
                height={32}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo/logo-dark.svg"}
                alt="Logo"
                width={176}
                height={32}
              />
            </Link>
            <p className="mb-3 text-2xl font-medium text-dark dark:text-white">
              Inicia sesión
            </p>

            <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
              Inicia sesión en tu cuenta de SimpliMed para acceder a todas las
              funciones.
            </p>


            <ButtonDefault
              label="Ingresar"
              link="/"
              customClasses="mt-5 font-bold bg-primary text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10"
            />

          </div>
        </div>
      </div>
  

</div>

    </>
  );
};

export default Main;
