import Main from "@/components/Main/Main";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Simplimed"
};

export default function Home() {
  return (
    <>
        <Main />
    </>
  );
}
