import ClassNames from "@/components/ClassNames";
import { useEffect, useRef, useState } from "react";

const Navigation = [
  {
    id: 1,
    title: "Part Compatibility",
    href: "#parts",
    icon: "fi fi-rr-puzzle-alt",
  },
  {
    id: 2,
    title: "Exploded Views",
    href: "#explodedViews",
    icon: "fi fi-rr-diagram-project",
  },
  {
    id: 3,
    title: "Error Codes",
    href: "#errorCodes",
    icon: "fi fi-rr-exclamation",
  },
  {
    id: 4,
    title: "Intelligent Docs",
    href: "#intelligentDocs",
    icon: "fi fi-rr-search-alt",
  },
  {
    id: 5,
    title: "Customer Support",
    href: "#support",
    icon: "fi fi-rr-life-ring",
  },
];

export default function Nav({ active, setActive, sticky }: any) {
  return (
    <>
      <div
        className={
          "bg-slate-100 w-full transition-all text-gray-500 z-[999] overflow-hidden before:w-[110%] before:absolute before:h-[1px] before:bg-blue-100 before:-left-[5%] after:w-[110%] after:absolute after:h-[1px] after:bg-blue-100 after:-left-[5%] after:bottom-0"
        }
      >
        <div className="flex flex-row justify-center">
          {Navigation.map((item) => (
            <a
              className={ClassNames(
                "px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100 cursor-pointer",
                active === item.id && "bg-blue-100 text-blue-600"
              )}
              onClick={() => setActive(item.id)}
              href={item.href}
            >
              <i className={ClassNames("text-2xl", item.icon)} />
              <span className="text-sm">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
      <div
        className={ClassNames(
          "bg-slate-100 fixed w-full transition-all text-gray-500 z-[999] overflow-hidden before:w-[110%] before:absolute before:h-[1px] before:bg-blue-100 before:-left-[5%] after:w-[110%] after:absolute after:h-[1px] after:bg-blue-100 after:-left-[5%] after:bottom-0",
          sticky ? "fixed top-0 opacity-1" : "-top-[10%] opacity-0"
        )}
      >
        <div className="flex flex-row justify-center">
          {Navigation.map((item) => (
            <a
              className={ClassNames(
                "px-6 py-4 text-xs flex flex-col justify-center items-center border-r border-blue-100 cursor-pointer",
                active === item.id && "bg-blue-100 text-blue-600"
              )}
              onClick={() => setActive(item.id)}
              href={item.href}
            >
              <i className={ClassNames("text-2xl", item.icon)} />
              <span className="text-sm">{item.title}</span>
            </a>
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
