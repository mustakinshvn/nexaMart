import { cn } from "@/app/lib/utils";

type Props = {
  className?: string;
  count?: string;
  description?: string;
};

const NeumericCountWithDescription = (props: Props) => {
  return (
    <div className={cn("flex flex-col items-center", props.className)}>
      <div className="flex justify-center">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl ">
          {props.count}+
        </h1>
      </div>

      <p className="text-gray-500 text-sm sm:text-base text-center">
        {props.description}
      </p>
    </div>
  );
};

export default NeumericCountWithDescription;
