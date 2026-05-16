import { OAuthLoginButton } from "@/app/components/ui/OAuthLoginButton";
import { AuthRedirectLink } from "@/app/components/auth/AuthRedirectLink";
import SignUpForm from "./SignUpForm";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-full text-nowrap">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <p className="text-sm">Enter your details bellow</p>
      </div>

      <SignUpForm />
      <OAuthLoginButton />
      <AuthRedirectLink
        redirectText="Already have an account?"
        linkText="Log In"
        linkPath="/log-in"
      />
    </div>
  );
};

export default page;
