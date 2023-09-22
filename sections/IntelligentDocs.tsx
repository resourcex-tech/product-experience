import { useState, useEffect, useRef } from "react";
import SectionGrid from "./SectionGrid";
import ClassNames from "@/components/ClassNames";

const messages = [
  {
    type: "user",
    text: "Hi, I'm looking for the manual for my refrigerator",
  },
  {
    type: "bot",
    text: "Sure, I can help you with that. What is the model number of your refrigerator?",
  },
  {
    type: "user",
    text: "JF42NXFXDE02",
  },
  {
    type: "bot",
    text: "Great, I found the manual for your refrigerator. Is there anything else I can help you with?",
  },
  {
    type: "user",
    text: "Thanks!",
  },
];

export default function IntelligentDocs() {
  const [selected, setSelected] = useState<number>();

  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    search.current?.addEventListener("input", (e) => {
      //   const value = e.target.value;
      //   if (value.length > 0) {
      //   } else {
      //   }
    });
  }, []);

  return (
    <SectionGrid center row>
      <div className="relative mb-4"></div>
      <div className="flex">
        <div className="w-1/2">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Explore Docs
          </h2>
          <div className="relative mb-5 flex flex-wrap flex-row items-center gap-5">
            <div className="mt-5 flex items-center gap-5 text-gray-800 transition delay-700 animate-[pulse_0.5s_ease-in-out]">
              <i className="fi fi-rr-poll-h text-lg p-4 bg-gray-200 rounded-full flex items-center justify-center"></i>
              <div>
                <div className="text-sm">Manual-JF42NXFXDE02.PDF</div>
                <div className="text-xs">Page 25, Line 48</div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-5 text-gray-800 transition delay-700 animate-[pulse_0.5s_ease-in-out]">
              <i className="fi fi-rr-poll-h text-lg p-4 bg-gray-200 rounded-full flex items-center justify-center"></i>
              <div>
                <div className="text-sm">Manual-JF42NXFXDE02.PDF</div>
                <div className="text-xs">Page 25, Line 48</div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-5 text-gray-800 transition delay-700 animate-[pulse_0.5s_ease-in-out]">
              <i className="fi fi-rr-poll-h text-lg p-4 bg-gray-200 rounded-full flex items-center justify-center"></i>
              <div>
                <div className="text-sm">Manual-JF42NXFXDE02.PDF</div>
                <div className="text-xs">Page 25, Line 48</div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-5 text-gray-800 transition delay-700 animate-[pulse_0.5s_ease-in-out]">
              <i className="fi fi-rr-poll-h text-lg p-4 bg-gray-200 rounded-full flex items-center justify-center"></i>
              <div>
                <div className="text-sm">Manual-JF42NXFXDE02.PDF</div>
                <div className="text-xs">Page 25, Line 48</div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-5 text-gray-800 transition delay-700 animate-[pulse_0.5s_ease-in-out]">
              <i className="fi fi-rr-poll-h text-lg p-4 bg-gray-200 rounded-full flex items-center justify-center"></i>
              <div>
                <div className="text-sm">Manual-JF42NXFXDE02.PDF</div>
                <div className="text-xs">Page 25, Line 48</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex-col gap-4 relative">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Intelligent Docs
          </h2>
          <div className="flex flex-col p-5 bg-slate-200 rounded-xl">
            <div className="flex-1 overflow-y-auto flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={ClassNames(
                    "p-2 max-w-md my-2 rounded-lg text-sm",
                    message.type === "user"
                      ? "bg-blue-600 text-white ml-auto"
                      : "bg-slate-100 mr-auto"
                  )}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <div className="flex relative">
                <input
                  type="text"
                  className="flex-grow rounded-lg shadow p-3 pb-10 outline-none"
                  placeholder="Type your message..."
                />
                <div className="bg-white absolute right-3 top-3 flex flex-col gap-3">
                  <i className="fi fi-rr-microphone"></i>
                  <i className="fi fi-rr-paper-plane-top"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionGrid>
  );
}
