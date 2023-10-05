import { Ubuntu } from "next/font/google";
import ClassNames from "@/components/ClassNames";
import { Combobox } from "@headlessui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Model from "@/types/Model";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const models = [
  {
    model_number: "GSH25JSTASS",
    model_stock_photo:
      "https://cdn11.bigcommerce.com/s-pacto3wrn2/images/stencil/1280x1280/products/5902/603743/f814b95c569b0a932bc750e546870a977793efd1__20070.1679180905.jpg",
    model_id: 548272,
    category_name: "Refrigerator",
    manufucture_name: "General Electric",
  },
] as unknown as Model[];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState<Model>({} as Model);
  const [loading, setLoading] = useState(false);

  const [filteredModel, setFilteredPeople] = useState<Model[]>([]);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      axios
        .get(`https://products-api.macaan.ai/v1/search/models/${query}`)
        .then((response) => {
          setFilteredPeople(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      setFilteredPeople([]);
    }
  }, [query]);

  const router = useRouter();
  useEffect(() => {
    console.log(selectedModel);
    if (selectedModel.model_id != undefined) {
      router.push(
        {
          pathname: `/product`,
          query: { pid: selectedModel.model_id },
        },
        `/product`
      );
    }
  }, [selectedModel]);

  return (
    <>
      <main
        className={ClassNames(
          ubuntu.className,
          "bg-slate-100 h-screen flex items-center"
        )}
      >
        <div className="mx-auto w-full max-w-2xl">
          <h1 className="text-4xl mb-3">Search for your model</h1>
          <p className="font-light mb-4">
            Enter your model number to search for your product
          </p>

          <Combobox as="div" value={selectedModel} onChange={setSelectedModel}>
            <div className="relative mt-1">
              <Combobox.Input
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(model: Model) => model.model_number}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                {loading ? (
                  <i className="fi fi-rr-spinner animate-spin flex items-center justify-center w-5 h-5"></i>
                ) : (
                  <i className="fi fi-rr-angle-small-down"></i>
                )}
              </Combobox.Button>

              {filteredModel.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredModel.map((model: Model, index: number) => (
                    <Combobox.Option
                      key={index}
                      value={model}
                      className={({ active }) =>
                        ClassNames(
                          "group relative cursor-default select-none py-2 pl-3 pr-9",
                          active ? "bg-blue-600 text-white" : "text-gray-900"
                        )
                      }
                    >
                      {({ active, selected }) => (
                        <>
                          <div className="flex items-center">
                            {/* <img
                              src={model.imageUrl}
                              alt=""
                              className="h-6 w-6 flex-shrink-0 rounded-full"
                            /> */}
                            {model.model_stock_photo ? (
                              <div className="w-10 h-10 bg-white p-1 rounded flex items-center justify-center mr-2">
                                <img
                                  src={model.model_stock_photo}
                                  alt={model.model_number}
                                />
                              </div>
                            ) : (
                              <div className="w-10 h-10 bg-slate-200 p-1 rounded flex items-center justify-center mr-2"></div>
                            )}
                            <div>
                              <div
                                className={ClassNames(
                                  "ml-3 truncate",
                                  selected && "font-semibold"
                                )}
                              >
                                {model.model_number}
                              </div>
                              <div className="flex items-center">
                                <div
                                  className={ClassNames(
                                    "text-xs ml-3",
                                    active ? "text-blue-100" : "text-gray-500"
                                  )}
                                >
                                  {model.manufucture_name}
                                </div>
                                <div
                                  className={ClassNames(
                                    "w-1 h-1 rounded-full ml-2",
                                    active ? "bg-blue-300" : "bg-gray-500"
                                  )}
                                ></div>
                                <div
                                  className={ClassNames(
                                    "text-xs ml-2",
                                    active ? "text-blue-100" : "text-gray-500"
                                  )}
                                >
                                  {model.category_name}
                                </div>
                              </div>
                            </div>
                          </div>

                          {selected && (
                            <span
                              className={ClassNames(
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                active ? "text-white" : "text-indigo-600"
                              )}
                            >
                              <i className="fi fi-rr-check"></i>
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
          <div className="my-4 flex items-center">
            <div className="text-sm mr-3">Popular Models:</div>
            {models.map((model: any, index: any) => (
              <div
                key={index}
                className="px-3 py-1 inline-block border-2 rounded-full text-sm text-gray-600 hover:bg-gray-600 hover:text-gray-200 hover:border-gray-600 cursor-pointer"
                onClick={() => setSelectedModel(model)}
              >
                {model.model_number}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
