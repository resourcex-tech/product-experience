import SectionGrid from "./SectionGrid";

export default function Parts() {
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
      <div className="flex overflow-x-scroll pb-5 hide-scroll-bar">
        <div className="flex gap-4 relative">
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center">
            <img src={"/parts/water-filter.png"} className="h-28 mx-4" />
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Water Filter
            </div>
          </div>
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center">
            <img src={"/parts/ice-maker-assembly.png"} className="h-28" />
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Ice Maker Assembly
            </div>
          </div>
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center">
            <img src={"/parts/light-bulb.png"} className="h-28 p-4 mx-3" />
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Light Bulb
            </div>
          </div>
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col justify-between">
            <div className="flex justify-center h-full items-center px-3">
              <img src={"/parts/door-gasket.png"} className="w-28" />
            </div>
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Door Gasket
            </div>
          </div>
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center">
            <img src={"/parts/water-intet.png"} className="h-28 mx-3" />
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Water Filter
            </div>
          </div>
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center">
            <img src={"/parts/light-bulb.png"} className="h-28 p-4 mx-3" />
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Light Bulb
            </div>
          </div>
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col justify-between">
            <div className="flex justify-center h-full items-center px-3">
              <img src={"/parts/door-gasket.png"} className="w-28" />
            </div>
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Door Gasket
            </div>
          </div>
          <div className="w-1/6 drop-shadow-md hover:drop-shadow-lg transition-all cursor-pointer rounded overflow-hidden bg-white py-3 flex flex-col items-center">
            <img src={"/parts/water-intet.png"} className="h-28 mx-3" />
            <div className="text-sm text-light text-center mt-2 text-slate-500 px-3">
              Water Filter
            </div>
          </div>
        </div>
      </div>
    </SectionGrid>
  );
}
