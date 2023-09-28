import { useState, useEffect, useRef } from "react";
import SectionGrid from "./SectionGrid";
import ClassNames from "@/components/ClassNames";

import axios from "axios";
import { useRouter } from "next/router";
import { Asset } from "@/types/Model";

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
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { pid } = router.query;

  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_PRODUCTS_API + "models/" + pid + "/assets")
      .then((response) => {
        setLoading(false);
        let explodedViews = response.data.assets.filter(
          (asset: Asset) => asset.type == "pdf"
        );
        setAssets(explodedViews);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <SectionGrid center row>
      <div className="relative mb-4"></div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Explore Docs
          </h2>
          {loading == false && assets?.length === 0 && (
            <div>No Docs Found, Please check back later...</div>
          )}
          <div className="relative mb-5 pt-5 flex flex-wrap flex-row gap-5">
            {loading == false ? (
              assets?.map((asset: Asset) => {
                return (
                  <>
                    <a
                      target="_blank"
                      className="flex flex-col items-center justify-center gap-3 text-gray-800 rounded-lg border w-32 py-4 px-2"
                      href={asset.url}
                    >
                      <i className="w-14 h-14 fi fi-rr-file-pdf text-2xl bg-gray-200 rounded-full flex items-center justify-center"></i>
                      <div className="text-center">
                        <div className="text-sm">{asset.description}.pdf</div>
                        <div className="text-xs">{asset.type}</div>
                      </div>
                    </a>
                  </>
                );
              })
            ) : (
              <>
                <div className="flex flex-col items-center justify-center gap-3 text-gray-800 rounded-lg border w-32 py-4 px-2">
                  <i className="w-14 h-14 bg-gray-200 rounded-full animate-pulse"></i>
                  <div className="flex gap-3 flex-col items-center">
                    <div className="h-4 w-16 rounded-lg bg-gray-200 animate-pulse"></div>
                    <div className="h-3 w-6 rounded-lg bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 text-gray-800 rounded-lg border w-32 py-4 px-2">
                  <i className="w-14 h-14 bg-gray-200 rounded-full animate-pulse"></i>
                  <div className="flex gap-3 flex-col items-center">
                    <div className="h-4 w-16 rounded-lg bg-gray-200 animate-pulse"></div>
                    <div className="h-3 w-6 rounded-lg bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 text-gray-800 rounded-lg border w-32 py-4 px-2">
                  <i className="w-14 h-14 bg-gray-200 rounded-full animate-pulse"></i>
                  <div className="flex gap-3 flex-col items-center">
                    <div className="h-4 w-16 rounded-lg bg-gray-200 animate-pulse"></div>
                    <div className="h-3 w-6 rounded-lg bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 text-gray-800 rounded-lg border w-32 py-4 px-2">
                  <i className="w-14 h-14 bg-gray-200 rounded-full animate-pulse"></i>
                  <div className="flex gap-3 flex-col items-center">
                    <div className="h-4 w-16 rounded-lg bg-gray-200 animate-pulse"></div>
                    <div className="h-3 w-6 rounded-lg bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-1/2 flex-col gap-4 relative">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Intelligent Docs
          </h2>
          <div className="flex flex-col p-5 bg-slate-200 rounded-xl mt-9">
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
                  className="flex-grow rounded-lg shadow p-3 pr-6 pb-10 outline-none"
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
