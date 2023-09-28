import ClassNames from "@/components/ClassNames";

const Navigation = [
  {
    id: 1,
    title: "Part Compatibility",
    icon: "fi fi-rr-puzzle-alt",
  },
  {
    id: 2,
    title: "Exploded Views",
    icon: "fi fi-rr-diagram-project",
  },
  {
    id: 3,
    title: "Error Codes",
    icon: "fi fi-rr-exclamation",
  },
  {
    id: 4,
    title: "Intelligent Docs",
    icon: "fi fi-rr-search-alt",
  },
  {
    id: 5,
    title: "Customer Support",
    icon: "fi fi-rr-life-ring",
  },
];

export default function Nav({ active, setActive }: any) {
  return (
    <>
      <div className="bg-slate-100 fixed w-full text-gray-500 relative overflow-hidden before:w-[110%] before:absolute before:h-[1px] before:bg-blue-100 before:-left-[5%] after:w-[110%] after:absolute after:h-[1px] after:bg-blue-100 after:-left-[5%] after:bottom-0">
        <div className="flex flex-row justify-center">
          {/* <div className="flex flex-row gap-4 py-4">
            {Navigation.map((item) => (
              <div className="flex flex-row items-center justify-center gap-4 px-4">
                <i
                  className={ClassNames(
                    "text-2xl flex items-center",
                    item.icon
                  )}
                />
                <div className="text-sm">{item.title}</div>
              </div>
            ))}
          </div> */}
          {Navigation.map((item) => (
            <div
              className={ClassNames(
                "px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100 cursor-pointer",
                active === item.id && "bg-blue-100 text-blue-600"
              )}
              onClick={() => setActive(item.id)}
            >
              <i className={ClassNames("text-2xl", item.icon)} />
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-blue-100 py-4 text-xs text-gray-600">
        <div className="flex flex-row justify-center gap-4">
          <div className="">Parts List</div>
          <div className="">Exploded Views</div>
          <div className="">Interactive Exploded Views</div>
        </div>
      </div> */}
    </>
  );
}
