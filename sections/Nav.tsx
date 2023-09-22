export default function Nav() {
  return (
    <>
      <div className="bg-slate-100 fixed w-full text-gray-500 relative overflow-hidden before:w-[110%] before:absolute before:h-[1px] before:bg-blue-100 before:-left-[5%] after:w-[110%] after:absolute after:h-[1px] after:bg-blue-100 after:-left-[5%] after:bottom-0">
        <div className="flex flex-row justify-center">
          <div className="px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100 ">
            <i className="fi fi-rr-puzzle-alt text-3xl" />
            <span className="text-xs">Part Compatibility</span>
          </div>
          <div className="px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100">
            <i className="fi fi-rr-diagram-project text-3xl" />
            <span className="text-xs">Exploded Views</span>
          </div>
          <div className="px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100 ">
            <i className="fi fi-rr-exclamation text-3xl" />
            <span className="text-xs">Error Codes</span>
          </div>
          <div className="px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100">
            <i className="fi fi-rr-file-pdf text-3xl" />
            <span className="text-xs">Documents</span>
          </div>
          <div className="px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100">
            <i className="fi fi-rr-search-alt text-3xl" />
            <span className="text-xs">Intelligent Docs</span>
          </div>
          <div className="px-6 py-4 text-xs flex flex-col justify-center items-center border-blue-200">
            <i className="fi fi-rr-life-ring text-3xl" />
            <span className="text-xs">Customer Support</span>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-4 text-xs text-gray-600">
        <div className="flex flex-row justify-center gap-4">
          <div className="">Parts List</div>
          <div className="">Exploded Views</div>
          <div className="">Interactive Exploded Views</div>
        </div>
      </div>
    </>
  );
}
