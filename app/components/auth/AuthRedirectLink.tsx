import Link from "next/link";

type Props = {
  className?: string;
  linkPath: string;
  redirectText: string;
  linkText: string;
};

export const AuthRedirectLink = ({
  className,
  linkPath,
  redirectText,
  linkText,
}: Props) => {
  return (
    <div className={`flex justify-center items-center gap-3 ${className}`}>
      <p>{redirectText}</p>
      <Link
        href={linkPath}
        className="bg-white hover:bg-white text-black hover:text-gray-500 underline border-none px-0"
      >
        {linkText}
      </Link>
    </div>
  );
};
