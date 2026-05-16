import { Breadcrumb } from "@/app/components/BreadCrumb";
import ProfileClient from "./ProfileClient";

const page = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "Profile", href: "/profile" }]} />
      <ProfileClient logOutNavigateTo="/log-in" />
    </>
  );
};

export default page;
