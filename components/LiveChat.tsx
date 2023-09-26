import { useState, useEffect } from "react";
import ClassNames from "./ClassNames";

export default function LiveChat() {
  const [active, setActive] = useState(false);

  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (active === true) {
      const timer = setTimeout(() => {
        setTransitioning(true);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTransitioning(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <>
      <div
        className="shadow-2xl shadow-slate-900 hover:shadow-blue-800 transition-all w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 fixed bottom-4 right-4 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <i className="fi fi-rr-comments text-white text-3xl"></i>
      </div>
      {active && (
        <div
          className={ClassNames(
            "overflow-hidden bg-slate-200 transition-all z-40 shadow-xl border w-full h-full max-w-md max-h-[450px] fixed right-4 rounded-t-xl flex items-center flex-col cursor-pointer",
            transitioning == false ? "-bottom-[100%]" : "bottom-0"
          )}
        >
          <span
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-all"
            onClick={() => setActive(!active)}
          >
            <i className="fi fi-rr-cross"></i>
          </span>
          <div className="w-full px-8 py-5 bg-white border-b border-slate-300">
            <div className="flex items-center flex-row gap-5">
              <i className="fi fi-rr-comments text-3xl"></i>
              <div className="flex flex-col">
                <div className="text-lg font-medium">Chat with us</div>
                <div className="text-sm text-gray-500">
                  We are here to help with all your technical needs
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <i className="fi fi-rr-user text-gray-500 text-xl"></i>
                  <div className="flex flex-col">
                    <div className="text-sm text-gray-500">Name</div>
                    <div className="text-sm font-medium">John Doe</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fi fi-rr-envelope text-gray-500 text-xl"></i>
                  <div className="flex flex-col">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-sm font-medium">amin@x.com</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col mt-5 w-full px-5 gap-4">
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-7 h-7 bg-slate-500 rounded-full"></div>
              <div className="inline-block p-2 bg-blue-600 text-white rounded-lg text-sm">
                Hello, My fridge is not working.
              </div>
            </div>
            <div className="flex gap-3 flex-row">
              <div className="w-7 h-7 bg-slate-500 rounded-full"></div>
              <div className="inline-block p-2 bg-slate-100 rounded-lg text-sm">
                Hello, Thank you for contacting live support.
              </div>
            </div>
          </div>
          <div className="mt-5 w-full px-5 absolute bottom-5">
            <div className="flex relative">
              <input
                type="text"
                className="flex-grow rounded-lg shadow-lg p-3 pr-6 pb-10 outline-none"
                placeholder="Type your message..."
              />
              <div className="bg-white absolute right-3 top-3 flex flex-col gap-3">
                <i className="fi fi-rr-microphone"></i>
                <i className="fi fi-rr-paper-plane-top"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
