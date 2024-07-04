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
      </DefaultLayout>
    </>
  );
}
