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
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { useInView } from "react-intersection-observer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Product() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [activeNav, setActiveNav] = useState(1);

  const [sticky, setSticky] = useState(false);

  const nav = useInView({ threshold: 0 });

  const overview = useInView({ threshold: 0.5 });
  const parts = useInView({ threshold: 0.5 });
  const explodedViews = useInView({ threshold: 0.5 });
  const errorCodes = useInView({ threshold: 0.5 });
  const intelligentDocs = useInView({ threshold: 0.6 });
  const support = useInView({ threshold: 0.5 });

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

  useEffect(() => {
    if (support.inView) {
      setActiveNav(5);
    } else if (intelligentDocs.inView) {
      setActiveNav(4);
    } else if (errorCodes.inView) {
      setActiveNav(3);
    } else if (explodedViews.inView) {
      setActiveNav(2);
    } else {
      setActiveNav(1);
    }

    if (nav.inView) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  }, [
    explodedViews.inView,
    errorCodes.inView,
    intelligentDocs.inView,
    support.inView,
    nav.inView,
  ]);

  if (loading) {
    return <></>;
  }
  return (
    <>
      <main className={ClassNames(ubuntu.className, "bg-slate-100")}>
        <div ref={overview.ref} className="inview-block">
          <ProductOverview />
        </div>
        <div ref={nav.ref} className="inview-block">
          <Nav active={activeNav} setActive={setActiveNav} sticky={sticky} />
        </div>
        {/* {
          {
            1: <Parts setActive={setActiveNav} />,
            2: <ExplodedViews />,
            3: <ErrorCodes />,
            4: <IntelligentDocs />,
            5: <Support />,
          }[activeNav]
        } */}
        <div ref={parts.ref} className="inview-block" id="parts">
          <Parts setActive={setActiveNav} />
        </div>
        <div
          ref={explodedViews.ref}
          className="inview-block"
          id="explodedViews"
        >
          <ExplodedViews />
        </div>
        <div ref={errorCodes.ref} className="inview-block" id="errorCodes">
          <ErrorCodes />
        </div>
        <div
          ref={intelligentDocs.ref}
          className="inview-block"
          id="intelligentDocs"
        >
          <IntelligentDocs />
        </div>
        <div ref={support.ref} className="inview-block" id="support">
          <Support />
        </div>
        <LiveChat />
      </main>
    </>
  );
}
