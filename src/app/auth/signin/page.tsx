import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import Signin from "@/components/Auth/Signin";

export const metadata: Metadata = {
  title: "Inicia sesión",
  description: "Inicia sesión en tu cuenta de SimpliMed.",
};

const SignIn: React.FC = () => {
  return (
    <>
      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signin />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
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

              <div className="mt-1">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={205}
                  height={100}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
