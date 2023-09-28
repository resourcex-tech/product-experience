import SectionGrid from "./SectionGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Model, { Part } from "@/types/Model";

export default function Parts() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { pid } = router.query;

  const [parts, setParts] = useState<Part[]>([]);

  useEffect(() => {
    if (pid != undefined) {
      axios
        .get(process.env.NEXT_PUBLIC_PRODUCTS_API + "models/" + pid + "/parts")
        .then((response) => {
          setLoading(false);
          setParts(response.data.parts);
        })
        .catch((error) => {
          setLoading(false);
        });
      console.log(parts);
    }
  }, []);
  return (
    <SectionGrid center row>
      <div className="relative mb-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Compatible Parts
        </h2>
        <div className="absolute right-0 -top-2 text-base px-3 rounded-lg flex items-center justify-center hover:bg-blue-100 ">
          <span className="py-2">Try out Interactive View</span>
          <i className="fi fi-rr-angle-small-right text-2xl ml-2 leading-[0]" />
        </div>
      </div>
      <div className="flex relative max-w-full">
        <div className="bg-gradient-to-l from-slate-100 h-full w-36 right-0 absolute z-20"></div>
        <div className="bg-gradient-to-r from-slate-100 h-full w-36 left-0 absolute z-20"></div>
        <div className="overflow-x-scroll flex gap-4 relative pb-5">
          <div className="flex gap-4 relative pb-5">
            {loading == false && parts?.length > 0 ? (
              parts?.map((part: Part) => {
                return (
                  <div className="snap-center w-64 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center justify-between">
                    <img
                      src={"/parts/water-filter.png"}
                      className="h-28 mx-4"
                    />
                    <div>
                      <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
                        {part.part_name}
                      </div>
                      <div className="text-xs text-light text-center mt-2 text-slate-500 px-3">
                        {part.part_number}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : loading ? (
              <>
                <div className="w-64 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center justify-between">
                  <div className="h-28 w-28 bg-slate-200 rounded-full animate-pulse"></div>
                  <div className="flex items-center flex-col gap-3">
                    <div className="bg-slate-200 animate-pulse rounded-lg h-4 w-32"></div>
                    <div className="bg-slate-200 animate-pulse rounded-lg h-3 w-24"></div>
                  </div>
                </div>
                <div className="w-64 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center justify-between">
                  <div className="h-28 w-28 bg-slate-200 rounded-full animate-pulse"></div>
                  <div className="flex items-center flex-col gap-3">
                    <div className="bg-slate-200 animate-pulse rounded-lg h-4 w-32"></div>
                    <div className="bg-slate-200 animate-pulse rounded-lg h-3 w-24"></div>
                  </div>
                </div>
                <div className="w-64 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center justify-between">
                  <div className="h-28 w-28 bg-slate-200 rounded-full animate-pulse"></div>
                  <div className="flex items-center flex-col gap-3">
                    <div className="bg-slate-200 animate-pulse rounded-lg h-4 w-32"></div>
                    <div className="bg-slate-200 animate-pulse rounded-lg h-3 w-24"></div>
                  </div>
                </div>
                <div className="w-64 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center justify-between">
                  <div className="h-28 w-28 bg-slate-200 rounded-full animate-pulse"></div>
                  <div className="flex items-center flex-col gap-3">
                    <div className="bg-slate-200 animate-pulse rounded-lg h-4 w-32"></div>
                    <div className="bg-slate-200 animate-pulse rounded-lg h-3 w-24"></div>
                  </div>
                </div>
                <div className="w-64 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center justify-between">
                  <div className="h-28 w-28 bg-slate-200 rounded-full animate-pulse"></div>
                  <div className="flex items-center flex-col gap-3">
                    <div className="bg-slate-200 animate-pulse rounded-lg h-4 w-32"></div>
                    <div className="bg-slate-200 animate-pulse rounded-lg h-3 w-24"></div>
                  </div>
                </div>
              </>
            ) : (
              //parts not found
              <>
                <div className="z-20">
                  No Parts Found, Please check back later...
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </SectionGrid>
  );
}
