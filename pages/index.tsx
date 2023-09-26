import { Ubuntu } from "next/font/google";
import ClassNames from "@/components/ClassNames";
import { Combobox } from "@headlessui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const model = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More users...
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState();
  const [loading, setLoading] = useState(false);

  const [filteredModel, setFilteredPeople] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      axios
        .get(`http://products-api.macaan.ai/v1/search/models/${query}`)
        .then((response) => {
          console.log(response.data);
          setFilteredPeople(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setFilteredPeople([]);
    }
  }, [query]);

  const router = useRouter();
  useEffect(() => {
    if (selectedModel) {
      router.push(`/product/${selectedModel["model/id"]}`);
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
                displayValue={(model: any) => model["model/number"]}
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
                  {filteredModel.map((model) => (
                    <Combobox.Option
                      key={model["model/id"]}
                      value={model}
                      className={({ active }) =>
                        ClassNames(
                          "relative cursor-default select-none py-2 pl-3 pr-9",
                          active ? "bg-indigo-600 text-white" : "text-gray-900"
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
                            <div>
                              <div
                                className={ClassNames(
                                  "ml-3 truncate",
                                  selected && "font-semibold"
                                )}
                              >
                                {model["model/number"]}
                              </div>
                              <div className="text-xs text-gray-500 ml-3">
                                {model["category/name"]}
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
        </div>
      </main>
    </>
  );
}
