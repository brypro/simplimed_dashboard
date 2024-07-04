import SignIn from "./auth/signin/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title: "Simplimed",
};

export default async function Home() {
  return (
    <>
      <DefaultLayout>
        <SignIn />
      </DefaultLayout>
    </>
  );
}
