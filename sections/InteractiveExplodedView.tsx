import { url } from "inspector";
import SectionGrid from "./SectionGrid";
import { useEffect, useState } from "react";
import ClassNames from "@/components/ClassNames";

const parts = [
  {
    name: "Water Filter",
    image: "/parts/water-filter.png",
    partno: "123456",
    price: "$12.99",
    pos: {
      top: 31,
      left: 7.8,
    },
  },
  {
    name: "Ice Maker Assembly",
    image: "/parts/ice-maker-assembly.png",
    partno: "133256",
    price: "$15.99",
    pos: {
      top: 19,
      left: 81,
    },
  },
  {
    name: "Light Bulb",
    image: "/parts/light-bulb.png",
    partno: "223436",
    price: "$42.99",
    pos: {
      top: 52.8,
      left: 86,
    },
  },
  {
    name: "Door Gasket",
    image: "/parts/door-gasket.png",
    partno: "393456",
    price: "$22.99",
    pos: {
      top: 57.8,
      left: 21,
    },
  },
  {
    name: "Turbidity Sensor",
    image: "/parts/turbidy-sensor.png",
    partno: "553456",
    price: "$32.99",
    pos: {
      top: 65,
      left: 58,
    },
  },
  {
    name: "Water Inlet",
    image: "/parts/water-intet.png",
    partno: "623456",
    price: "$52.99",
    pos: {
      top: 83.3,
      left: 20,
    },
  },
];

export default function InteractiveExplodedView({ toggle }: any) {
  const [activePart, setActivePart] = useState<number>();

  useEffect(() => {}, []);

  return (
    <SectionGrid center row>
      <div className="relative mb-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Interactive Exploded Views
        </h2>
        <div
          className="absolute right-0 -top-2 text-base px-3 rounded-lg flex items-center justify-center hover:bg-blue-100 cursor-pointer"
          onClick={() => toggle(0)}
        >
          <span className="py-2">Try out Exploded View</span>
          <i className="fi fi-rr-angle-small-right text-2xl ml-2 leading-[0]" />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center">
          <div className="relative">
            <img src="/parts/exploded-view.svg" className="max-w-full" />
            {parts.map((part, index) => (
              <div
                key={index}
                className={ClassNames(
                  "absolute w-10 h-10 border-2 rounded border-black flex items-center justify-center cursor-pointer",
                  activePart === index && "bg-blue-100 border-blue-500 border-2"
                )}
                style={{
                  top: `${part.pos.top}%`,
                  left: `${part.pos.left}%`,
                }}
                onClick={() => setActivePart(index)}
              >
                <span>{index + 1}</span>
                {/* <span>{part.name}</span> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4 relative">
          {parts.map((part, index) => (
            <div
              key={index}
              className={ClassNames(
                "w-full px-4 drop-shadow-md hover:drop-shadow-lg border-box transition-all outline outline-none cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4",
                activePart === index && "outline-blue-500 outline-2"
              )}
            >
              <div
                className="h-24 w-24 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${part.image})` }}
              ></div>

              <div>
                <div className="text-lg font-medium text-gray-900">
                  {part.name}
                </div>
                <div className="text-xs text-gray-500">Part #{part.partno}</div>
                <div className="text-xs text-gray-500 mt-3">{part.price}</div>
              </div>

              <div className="ml-auto mr-3">
                <i className="fi fi-rr-shopping-cart-add text-2xl leading-[0]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionGrid>
  );
}
