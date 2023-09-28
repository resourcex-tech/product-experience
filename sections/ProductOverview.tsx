import axios from "axios";
import SectionGrid from "./SectionGrid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Model from "@/types/Model";

export default function ProductOverview() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { pid } = router.query;

  const [model, setModel] = useState({} as Model);

  useEffect(() => {
    if (pid != undefined) {
      axios
        .get(process.env.NEXT_PUBLIC_PRODUCTS_API + "models/" + pid)
        .then((response) => {
          setLoading(false);
          setModel(response.data);
        });
    }
  }, []);
  return (
    <SectionGrid center>
      <div className="lg:w-1/2">
        {loading ? (
          <div className="flex justify-center items-center py-16 border rounded-3xl border-slate-100 bg-slate-200 animate-pulse">
            <div className="w-96 h-96 rounded-full bg-slate-300 animate-pulse"></div>
          </div>
        ) : model.model_stock_photo === null ? (
          <div className="flex justify-center items-center py-16 border rounded-3xl border-slate-100 bg-slate-200">
            <div className="w-96 h-96 rounded-full bg-slate-300"></div>
          </div>
        ) : (
          <div className="flex justify-center items-center py-16 border rounded-3xl border-slate-100 bg-white">
            <img
              src={model.model_stock_photo}
              alt={model.model_number}
              className="object-contain h-96"
            />
          </div>
        )}
      </div>
      <div className="lg:w-1/2 px-10">
        <div className="text-lg text-gray-600 mb-3">
          {loading ? (
            <div className="w-20 h-6 rounded-lg bg-slate-200 animate-pulse"></div>
          ) : (
            //@ts-ignore
            model.manufacture_name
          )}
        </div>
        <h1 className="text-4xl font-bold text-gray-800">
          {loading ? (
            <div className="w-full h-10 rounded-lg bg-slate-200 animate-pulse"></div>
          ) : (
            model.model_number
          )}
        </h1>
        <div className="mt-3">
          {loading ? (
            <div className="w-64 h-6 rounded-lg bg-slate-200 animate-pulse"></div>
          ) : (
            <>
              <a href="#" className="text-gray-500 hover:underline">
                Home
              </a>
              <span className="mx-2 text-gray-300">/</span>
              <a href="#" className="text-gray-500 hover:underline">
                {model.category_name}
              </a>
              {/* <span className="mx-2 text-gray-300">/</span>
              <a href="#" className="text-gray-500 hover:underline">
                French Door Refrigerators
              </a> */}
            </>
          )}
        </div>

        <div className="mt-7">
          <ul className="flex flex-col gap-5 bullet list-disc ml-4">
            <li>ExtendFresh™ Temperature Management System</li>
            <li>Interior Water Dispenser</li>
            <li>Professionally-Inspired Design</li>
          </ul>
        </div>

        <div className="mt-7">
          <div className="text-gray-600 font-medium text-sm">
            Find age of appliance
          </div>
          <div className="relative w-96">
            <input
              className="w-full px-4 py-2 bg-transparent border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-100"
              placeholder="Enter serial number"
            />
            <i className="fi fi-rr-search text-xl text-gray-300 absolute right-4 top-2" />
          </div>
        </div>
      </div>
    </SectionGrid>
  );
}
