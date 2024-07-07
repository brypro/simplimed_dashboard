import SignIn from "./auth/signin/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Simplimed",
};

export default async function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Bienvenido" />
        <p className=" my-4">
          Al utilizar esta plataforma, usted está aceptando nuestros{" "}
          <a href="/terminos-y-condiciones" className="text-blue-600 underline">
            términos y condiciones
          </a>
          .
        </p>
      </DefaultLayout>
    </>
  );
}
