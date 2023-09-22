import SectionGrid from "./SectionGrid";

export default function ProductOverview() {
  return (
    <SectionGrid center>
      <div className="lg:w-1/2 flex justify-center items-center py-16 border rounded-3xl border-slate-100 bg-slate-200">
        <img
          src="https://ultimate-product-experience.vercel.app/product.png"
          alt="Whirlpool KRFF305EBL00"
          className="object-contain h-96"
        />
      </div>
      <div className="lg:w-1/2 px-10">
        <div className="text-lg text-gray-600 mb-3">Apple</div>
        <h1 className="text-4xl font-bold text-gray-800">
          Whirlpool KRFF305EBL00
        </h1>
        <div className="mt-3">
          <a href="#" className="text-gray-500 hover:underline">
            Home
          </a>
          <span className="mx-2 text-gray-300">/</span>
          <a href="#" className="text-gray-500 hover:underline">
            Refrigerators
          </a>
          <span className="mx-2 text-gray-300">/</span>
          <a href="#" className="text-gray-500 hover:underline">
            French Door Refrigerators
          </a>
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
