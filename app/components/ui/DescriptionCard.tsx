import { cn } from "@/app/lib/utils";

type DescriptionCardProps = {
  description: string;
  isQuote?: boolean;
  classname?: string;
};

function DescriptionCard(Props: DescriptionCardProps) {
  return (
    <div className={cn(" font-thicker text-gray-600", Props.classname)}>
      {Props.isQuote ? (
        <blockquote>&quot;{Props.description}&quot;</blockquote>
      ) : (
        <p className="">{Props.description}</p>
      )}
    </div>
  );
}

export { DescriptionCard };
