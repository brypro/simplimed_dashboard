import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Inicio",
};

const Profile = () => {
  return (
    <DefaultLayout>

    <Breadcrumb pageName="Bienvenido" />
    </DefaultLayout>
  );
};

export default Profile;
