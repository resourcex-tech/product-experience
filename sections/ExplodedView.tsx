import SectionGrid from "./SectionGrid";
import ImageMagnifier from "@/components/ImageMagnifier";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Model, { Part, Asset } from "@/types/Model";

// const parts = [
//   {
//     name: "Water Filter",
//     image: "./parts/water-filter.png",
//     partno: "123456",
//     price: "$12.99",
//   },
//   {
//     name: "Ice Maker Assembly",
//     image: "./parts/ice-maker-assembly.png",
//     partno: "133256",
//     price: "$15.99",
//   },
//   {
//     name: "Light Bulb",
//     image: "./parts/light-bulb.png",
//     partno: "223436",
//     price: "$42.99",
//   },
//   {
//     name: "Door Gasket",
//     image: "./parts/door-gasket.png",
//     partno: "393456",
//     price: "$22.99",
//   },
//   {
//     name: "Turbidity Sensor",
//     image: "./parts/turbidy-sensor.png",
//     partno: "553456",
//     price: "$32.99",
//   },
//   {
//     name: "Water Inlet",
//     image: "./parts/water-intet.png",
//     partno: "623456",
//     price: "$52.99",
//   },
// ];

export default function ExplodedView({ toggle }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const { pid } = router.query;

  const [parts, setParts] = useState<Part[]>();
  const [filteredParts, setFilteredParts] = useState<Part[]>([]);
  const [images, setImages] = useState<Asset[]>([]);

  const [selectedImage, setSelectedImage] = useState<Asset>();

  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pid != undefined) {
      axios
        .get(process.env.NEXT_PUBLIC_PRODUCTS_API + "models/" + pid + "/parts")
        .then((response) => {
          setLoading(false);
          setParts(response.data.parts);
          setFilteredParts(response.data.parts);
        })
        .catch((error) => {
          setLoading(false);
        });
      axios
        .get(process.env.NEXT_PUBLIC_PRODUCTS_API + "models/" + pid + "/assets")
        .then((response) => {
          setLoadingImages(false);

          let explodedViews = response.data.assets.filter(
            (asset: Asset) => asset.type == "Exploded Views"
          );
          setImages(explodedViews);
        })
        .catch((error) => {
          setLoadingImages(false);
        });
    }
  }, []);

  function searchParts() {
    if (search.current?.value !== undefined && search.current?.value !== null) {
      if (search.current?.value.length > 0) {
        let fp = parts?.filter((part: Part) =>
          part.part_name
            .toLowerCase()
            .includes(search.current?.value?.toLowerCase() as string)
        );
        setFilteredParts(fp as Part[]);
      } else {
        setFilteredParts(parts as Part[]);
      }
    }
  }

  return (
    <SectionGrid center row>
      <div className="relative mb-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Exploded Views
        </h2>
        {loadingImages == false && images.length == 0 && (
          <div>No Exploded Views Found, Please check back later...</div>
        )}
        <div
          className="absolute right-0 -top-2 text-base px-3 rounded-lg flex items-center justify-center hover:bg-blue-100 cursor-pointer"
          onClick={() => toggle(1)}
        >
          <span className="py-2">Try out Interactive View</span>
          <i className="fi fi-rr-angle-small-right text-2xl ml-2 leading-[0]" />
        </div>
      </div>
      {loadingImages == true || images.length > 0 ? (
        <>
          <div className="flex flex-row w-full mb-4 gap-3 flex-wrap">
            {loadingImages == false ? (
              images?.map((image: Asset) => (
                <div
                  className="w-36 space-y-2 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                  key={image.id}
                >
                  <div
                    className="w-full h-36 bg-white bg-contain bg-no-repeat bg-center bg-slate-200 rounded-lg border hover:border-blue-600 "
                    style={{ backgroundImage: `url(${image.url})` }}
                  ></div>
                  <div className="text-xs text-center font-medium">
                    {image.description}
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="w-36 space-y-2">
                  <div className="w-full h-36 bg-slate-200 rounded-lg animate-pulse"></div>
                  <div className="h-3 w-26 bg-slate-200 animate-pulse rounded-lg"></div>
                </div>
                <div className="w-36 space-y-2">
                  <div className="w-full h-36 bg-slate-200 rounded-lg animate-pulse"></div>
                  <div className="h-3 w-26 bg-slate-200 animate-pulse rounded-lg"></div>
                </div>
                <div className="w-36 space-y-2">
                  <div className="w-full h-36 bg-slate-200 rounded-lg animate-pulse"></div>
                  <div className="h-3 w-26 bg-slate-200 animate-pulse rounded-lg"></div>
                </div>
                <div className="w-36 space-y-2">
                  <div className="w-full h-36 bg-slate-200 rounded-lg animate-pulse"></div>
                  <div className="h-3 w-26 bg-slate-200 animate-pulse rounded-lg"></div>
                </div>
                <div className="w-36 space-y-2">
                  <div className="w-full h-36 bg-slate-200 rounded-lg animate-pulse"></div>
                  <div className="h-3 w-26 bg-slate-200 animate-pulse rounded-lg"></div>
                </div>
              </>
            )}
          </div>
          <div className="flex gap-5">
            <div className="w-1/2 relative">
              {/* <img src="./parts/exploded-view.png" className="max-w-full" /> */}
              {loadingImages == false && images ? (
                <ImageMagnifier
                  // src="/parts/exploded-view-transparent.png"
                  src={selectedImage ? selectedImage.url : images[0].url}
                  width="100%"
                  height="auto"
                  magnifierHeight={200}
                  magnifieWidth={200}
                  zoomLevel={2.0}
                />
              ) : (
                <>
                  <div className="flex justify-center items-center py-16 border rounded-3xl border-slate-100 bg-slate-200 animate-pulse h-full"></div>
                </>
              )}
            </div>
            <div className="flex w-1/2 flex-col gap-4 relative ">
              <div className="relative px-2">
                <input
                  ref={search}
                  onChange={searchParts}
                  className="px-4 py-4 w-full bg-transparent border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-100"
                  placeholder="Search for parts"
                />

                <i className="fi fi-rr-search text-xl text-gray-300 absolute right-7 top-4" />
              </div>
              <div className="relative flex flex-col gap-4 max-h-[80vh] min-h-full">
                <div className="bg-gradient-to-t from-slate-100 h-20 w-full bottom-0 absolute z-20"></div>
                <div className="bg-gradient-to-b from-slate-100 h-20 w-full top-0 absolute z-20"></div>
                <div className="overflow-y-scroll px-2 min-h-full">
                  <div className="flex gap-3 flex-col pt-5">
                    {loading == false ? (
                      filteredParts?.map((part: Part, index) => (
                        <div
                          key={index}
                          className="w-full px-4 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4"
                        >
                          <div
                            className="h-24 w-24 bg-contain bg-no-repeat bg-center bg-slate-200 rounded-lg"
                            // style={{ backgroundImage: `url(${part.image})` }}
                          ></div>

                          <div>
                            <div className="text-lg font-medium text-gray-900">
                              {part.part_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              Part #{part.part_number}
                            </div>
                            <div className="text-xs text-gray-500 mt-3">
                              40 USD
                            </div>
                          </div>

                          <div className="ml-auto mr-3">
                            <i className="fi fi-rr-shopping-cart-add text-2xl leading-[0]" />
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="w-full px-4 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4">
                          <div className="h-24 w-24 bg-contain bg-no-repeat bg-center bg-slate-200 rounded-lg animate-pulse"></div>

                          <div>
                            <div className="h-7 bg-slate-200 w-56 animate-pulse rounded-lg"></div>
                            <div className="h-5 bg-slate-200 w-32 animate-pulse rounded-lg mt-2"></div>
                            <div className="h-3 bg-slate-200 w-10 animate-pulse rounded-lg mt-3"></div>
                          </div>

                          <div className="ml-auto w-10 h-10 bg-slate-200 animate-pulse rounded-full mr-3"></div>
                        </div>
                        <div className="w-full px-4 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4">
                          <div className="h-24 w-24 bg-contain bg-no-repeat bg-center bg-slate-200 rounded-lg animate-pulse"></div>

                          <div>
                            <div className="h-7 bg-slate-200 w-56 animate-pulse rounded-lg"></div>
                            <div className="h-5 bg-slate-200 w-32 animate-pulse rounded-lg mt-2"></div>
                            <div className="h-3 bg-slate-200 w-10 animate-pulse rounded-lg mt-3"></div>
                          </div>

                          <div className="ml-auto w-10 h-10 bg-slate-200 animate-pulse rounded-full mr-3"></div>
                        </div>
                        <div className="w-full px-4 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4">
                          <div className="h-24 w-24 bg-contain bg-no-repeat bg-center bg-slate-200 rounded-lg animate-pulse"></div>

                          <div>
                            <div className="h-7 bg-slate-200 w-56 animate-pulse rounded-lg"></div>
                            <div className="h-5 bg-slate-200 w-32 animate-pulse rounded-lg mt-2"></div>
                            <div className="h-3 bg-slate-200 w-10 animate-pulse rounded-lg mt-3"></div>
                          </div>

                          <div className="ml-auto w-10 h-10 bg-slate-200 animate-pulse rounded-full mr-3"></div>
                        </div>
                        <div className="w-full px-4 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4">
                          <div className="h-24 w-24 bg-contain bg-no-repeat bg-center bg-slate-200 rounded-lg animate-pulse"></div>

                          <div>
                            <div className="h-7 bg-slate-200 w-56 animate-pulse rounded-lg"></div>
                            <div className="h-5 bg-slate-200 w-32 animate-pulse rounded-lg mt-2"></div>
                            <div className="h-3 bg-slate-200 w-10 animate-pulse rounded-lg mt-3"></div>
                          </div>

                          <div className="ml-auto w-10 h-10 bg-slate-200 animate-pulse rounded-full mr-3"></div>
                        </div>
                        <div className="w-full px-4 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4">
                          <div className="h-24 w-24 bg-contain bg-no-repeat bg-center bg-slate-200 rounded-lg animate-pulse"></div>

                          <div>
                            <div className="h-7 bg-slate-200 w-56 animate-pulse rounded-lg"></div>
                            <div className="h-5 bg-slate-200 w-32 animate-pulse rounded-lg mt-2"></div>
                            <div className="h-3 bg-slate-200 w-10 animate-pulse rounded-lg mt-3"></div>
                          </div>

                          <div className="ml-auto w-10 h-10 bg-slate-200 animate-pulse rounded-full mr-3"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </SectionGrid>
  );
}
