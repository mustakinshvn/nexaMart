import Image from "next/image";
import displayImage from "../../../public/auth-display-image.png";

export const AuthDisplayImage = () => {
  return (
    <Image
      src={displayImage}
      alt="Display Image"
      width={500}
      height={500}
      className="w-full sm:max-h-65  md:max-h-140  "
    />
  );
};
