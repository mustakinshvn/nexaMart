import { BBH_Sans_Hegarty } from "next/font/google";

const geist = BBH_Sans_Hegarty({
  weight: ["400"],
});

function Logo() {
  return (
    <h1 className={`text-2xl sm:text-3xl md:text-4xl  ${geist.className}`}>
      SHOP.CO
    </h1>
  );
}

export { Logo };
