import Image from "next/image";
import versaceLogo from "../../../public/brand/brand-versace.png";
import zaraLogo from "../../../public/brand/brand-zara.png";
import gucciLogo from "../../../public/brand/brand-gucci.png";
import pradaLogo from "../../../public/brand/brand-prada.png";
import calvinKleinLogo from "../../../public/brand/brand-calvin-klein.png";

const brands = [
  { src: versaceLogo, alt: "Versace" },
  { src: zaraLogo, alt: "Zara" },
  { src: gucciLogo, alt: "Gucci" },
  { src: pradaLogo, alt: "Prada" },
  { src: calvinKleinLogo, alt: "Calvin Klein" },
];

const BrandShowcase = () => {
  return (
    <div className="bg-black w-full  mx-auto py-6 px-6">
      <div className="gap-6 flex flex-wrap justify-evenly">
        {brands.map((brand) => (
          <Image
            key={brand.alt}
            className="h-8 sm:h-10 w-auto"
            src={brand.src}
            alt={brand.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandShowcase;
