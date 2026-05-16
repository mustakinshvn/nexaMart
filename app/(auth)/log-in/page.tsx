import { AuthRedirectLink } from "@/app/components/auth/AuthRedirectLink";
import LoginForm from "./LoginForm";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-4   ">
      <div className="flex flex-col gap-2 w-full text-nowrap  ">
        <h1 className="text-2xl ">Log in to Exclusive</h1>
        <p className="text-sm">Enter your details bellow</p>
      </div>

      <LoginForm />

      <AuthRedirectLink
        redirectText="Don't have an account?"
        linkText="Sign Up"
        linkPath="/sign-up"
      />
    </div>
  );
};

export default page;
