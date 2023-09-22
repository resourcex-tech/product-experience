import { useState, useEffect, useRef } from "react";
import SectionGrid from "./SectionGrid";
import ClassNames from "@/components/ClassNames";

const dishwasherErrorCodes = [
  {
    code: "1-1",
    description: "Stuck relay on the electronic control board",
    solution: [
      "Shut off power to the dishwasher for 5 minutes.",
      "Check the wiring connected to the control board for damage and repair any broken wires.",
      "Measure the resistance through all components connected to the control board using the tech sheet as a guide.",
      "Replace any defective components.",
      "If the wiring and components are okay, replace the electronic control board.",
    ],
  },
  {
    code: "F1E1",
    description: "Stuck relay on the electronic control board",
    solution: [
      "Shut off power to the dishwasher for 5 minutes.",
      "Check the wiring connected to the control board for damage and repair any broken wires.",
      "Measure the resistance through all components connected to the control board using the tech sheet as a guide.",
      "Replace any defective components.",
      "If the wiring and components are okay, replace the electronic control board.",
    ],
  },
  {
    code: "1-2",
    description: "Failed or incompatible electronic control board",
    solution: [
      "The code appears if you install the wrong electronic control board.",
      "Order and install the correct electronic control board for your model of dishwasher.",
      "If the code appears and you didn't just replace the electronic control board, shut off power to the dishwasher for 5 minutes.",
      "If the code resumes when you restore power, replace the electronic control board.",
    ],
  },
  {
    code: "F1E2",
    description: "Failed or incompatible electronic control board",
    solution: [
      "The code appears if you install the wrong electronic control board.",
      "Order and install the correct electronic control board for your model of dishwasher.",
      "If the code appears and you didn't just replace the electronic control board, shut off power to the dishwasher for 5 minutes.",
      "If the code resumes when you restore power, replace the electronic control board.",
    ],
  },
  {
    code: "10-1",
    description: "Detergent dispenser failure",
    solution: [
      "Unplug the dishwasher to disconnect electrical power.",
      "Remove the outer door panel and check the wiring connections between the electronic control board and the detergent dispenser.",
      "Reconnect any loose wires or replace the wire harness if damaged.",
      "If the wiring is intact, replace the detergent dispenser.",
    ],
  },
  {
    code: "FAE1",
    description: "Detergent dispenser failure",
    solution: [
      "Unplug the dishwasher to disconnect electrical power.",
      "Remove the outer door panel and check the wiring connections between the electronic control board and the detergent dispenser.",
      "Reconnect any loose wires or replace the wire harness if damaged.",
      "If the wiring is intact, replace the detergent dispenser.",
    ],
  },
  {
    code: "10-2",
    description: "Vent wax motor electrical problem",
    solution: [
      "Shut off power to the dishwasher.",
      "Check the wiring in the vent wax motor circuit.",
      "If the wiring is intact, replace the vent wax motor.",
    ],
  },
  {
    code: "FAE2",
    description: "Vent wax motor electrical problem",
    solution: [
      "Shut off power to the dishwasher.",
      "Check the wiring in the vent wax motor circuit.",
      "If the wiring is intact, replace the vent wax motor.",
    ],
  },
  {
    code: "10-3",
    description: "Drying fan failure",
    solution: [
      "Unplug the dishwasher to disconnect electrical power.",
      "Check the wiring between the electronic control board and the drying fan.",
      "Reconnect any loose wires or replace the wire harness if damaged.",
      "If the wiring is intact, replace the drying fan.",
    ],
  },
  {
    code: "FAE3",
    description: "Drying fan failure",
    solution: [
      "Unplug the dishwasher to disconnect electrical power.",
      "Check the wiring between the electronic control board and the drying fan.",
      "Reconnect any loose wires or replace the wire harness if damaged.",
      "If the wiring is intact, replace the drying fan.",
    ],
  },
];

export default function ErrorCodes() {
  const [selected, setSelected] = useState<number>();

  const search = useRef<HTMLInputElement>(null);

  const [codes, setCodes] = useState(dishwasherErrorCodes);

  useEffect(() => {
    search.current?.addEventListener("input", (e) => {
      const value = e.target.value;

      if (value.length > 0) {
        const filteredCodes = dishwasherErrorCodes.filter((code) =>
          code.code.toLocaleLowerCase().includes(value)
        );

        setCodes([...filteredCodes]);
        setSelected(0);
      } else {
        setCodes([...dishwasherErrorCodes]);
        setSelected(undefined);
      }
    });
  }, []);

  return (
    <SectionGrid center row>
      <div className="relative mb-4">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Error Code Search
        </h2>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="relative w-96 mb-5">
            <input
              ref={search}
              type="text"
              className="w-full px-4 py-2 bg-transparent border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-100"
              placeholder="Enter error code to search"
            />
            <i className="fi fi-rr-search text-xl text-gray-300 absolute right-4 top-2" />
          </div>
          {codes.map((code, index) => {
            return (
              <div
                key={index}
                className={ClassNames(
                  "text-lg font-base text-gray-900 px-4 py-3 rounded-lg shadow mr-3 mb-3 border-box inline-block cursor-pointer",
                  selected === index
                    ? "bg-blue-100 border-blue-500 border-2"
                    : "bg-white border-white border-2"
                )}
                onClick={() => setSelected(index)}
              >
                {code.code}
              </div>
            );
          })}
        </div>
        <div className="flex w-1/2 flex-col gap-4 relative">
          {selected !== undefined && codes[selected] ? (
            <div className="text-lg text-gray-900">
              <div className="font-medium text-lg text-gray-900">
                {codes[selected].description}
              </div>
              <div className="space-y-4">
                {codes[selected].solution.map((solution, index) => (
                  <div key={index} className="mt-2">
                    <div className="font-base text-base">
                      Solution {index + 1}:{" "}
                      <span className="text-sm">{solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-lg text-gray-900">
              <div className="font-medium text-lg text-gray-900">
                Select an error code to get more information
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionGrid>
  );
}
