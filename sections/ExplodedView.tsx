import { url } from "inspector";
import SectionGrid from "./SectionGrid";
import ImageMagnifier from "@/components/ImageMagnifier";

const parts = [
  {
    name: "Water Filter",
    image: "./parts/water-filter.png",
    partno: "123456",
    price: "$12.99",
  },
  {
    name: "Ice Maker Assembly",
    image: "./parts/ice-maker-assembly.png",
    partno: "133256",
    price: "$15.99",
  },
  {
    name: "Light Bulb",
    image: "./parts/light-bulb.png",
    partno: "223436",
    price: "$42.99",
  },
  {
    name: "Door Gasket",
    image: "./parts/door-gasket.png",
    partno: "393456",
    price: "$22.99",
  },
  {
    name: "Turbidity Sensor",
    image: "./parts/turbidy-sensor.png",
    partno: "553456",
    price: "$32.99",
  },
  {
    name: "Water Inlet",
    image: "./parts/water-intet.png",
    partno: "623456",
    price: "$52.99",
  },
];

export default function ExplodedView({ toggle }: any) {
  return (
    <SectionGrid center row>
      <div className="relative mb-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Exploded Views
        </h2>
        <div
          className="absolute right-0 -top-2 text-base px-3 rounded-lg flex items-center justify-center hover:bg-blue-100 cursor-pointer"
          onClick={() => toggle(1)}
        >
          <span className="py-2">Try out Interactive View</span>
          <i className="fi fi-rr-angle-small-right text-2xl ml-2 leading-[0]" />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 relative">
          {/* <img src="./parts/exploded-view.png" className="max-w-full" /> */}
          <ImageMagnifier
            // src="/parts/exploded-view-transparent.png"
            src="/parts/exploded-view-transparent.png"
            width="100%"
            height="auto"
            magnifierHeight={200}
            magnifieWidth={200}
            zoomLevel={2.0}
          />
        </div>
        <div className="flex w-1/2 flex-col gap-4 relative">
          {parts.map((part, index) => (
            <div
              key={index}
              className="w-full px-4 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-row items-center gap-4"
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
