import Image from "next/image";
import { Ubuntu } from "next/font/google";
import ProductOverview from "@/sections/ProductOverview";
import Parts from "@/sections/Parts";
import Nav from "@/sections/Nav";
import ExplodedViews from "@/sections/ExplodedViews";
import ClassNames from "@/components/ClassNames";
import ErrorCodes from "@/sections/ErrorCodes";
import IntelligentDocs from "@/sections/IntelligentDocs";
import Support from "@/sections/Support";
import LiveChat from "@/components/LiveChat";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Product() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [activeNav, setActiveNav] = useState(1);

  useEffect(() => {
    console.log(router.query.pid);
    if (router.query.pid != undefined) {
      axios
        .get(
          process.env.NEXT_PUBLIC_PRODUCTS_API + "models/" + router.query.pid
        )
        .then((response) => {
          setLoading(false);
        });
    } else {
      router.push(`/`);
    }
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <main className={ClassNames(ubuntu.className, "bg-slate-100")}>
        <ProductOverview />
        <Nav active={activeNav} setActive={setActiveNav} />
        {
          {
            1: <Parts setActive={setActiveNav} />,
            2: <ExplodedViews />,
            3: <ErrorCodes />,
            4: <IntelligentDocs />,
            5: <Support />,
          }[activeNav]
        }
        <LiveChat />
      </main>
    </>
  );
}
