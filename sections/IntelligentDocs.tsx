import { useState, useEffect, useRef } from "react";
import SectionGrid from "./SectionGrid";
import ClassNames from "@/components/ClassNames";

export default function ErrorCodes() {
  const [selected, setSelected] = useState<number>();

  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    search.current?.addEventListener("input", (e) => {
      //   const value = e.target.value;
      //   if (value.length > 0) {
      //   } else {
      //   }
    });
  }, []);

  return (
    <SectionGrid center row>
      <div className="relative mb-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Error Code Search
        </h2>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="relative w-96 mb-5">
            <input
              ref={search}
              type="text"
              className="w-full px-4 py-2 bg-transparent border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-100"
              placeholder="Enter error code to search"
            />
            <i className="fi fi-rr-search text-xl text-gray-300 absolute right-4 top-2" />
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4 relative"></div>
      </div>
    </SectionGrid>
  );
}
