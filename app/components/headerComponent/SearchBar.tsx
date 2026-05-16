import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [inputValue, setInputValue] = useState(query);

  const handleSearch = () => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );
    if (inputValue) {
      currentParams.set("query", inputValue);
    } else {
      currentParams.delete("query");
    }
    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div className="flex lg:min-w-85 xl:min-w-110  items-center lg:bg-[#F0EEED] rounded-2xl px-5   h-10 ">
      <Search size={22} className="inline-block mr-2" />
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="hidden lg:flex w-full outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
