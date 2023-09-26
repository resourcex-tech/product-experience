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

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Product() {
  return (
    <>
      <main className={ClassNames(ubuntu.className, "bg-slate-100")}>
        <ProductOverview />
        <Nav />
        <Parts />
        <ExplodedViews />
        <ErrorCodes />
        <IntelligentDocs />
        <Support />
        <LiveChat />
      </main>
    </>
  );
}
