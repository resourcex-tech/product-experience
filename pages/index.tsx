import Image from "next/image";
import { Ubuntu } from "next/font/google";
import ProductOverview from "@/sections/ProductOverview";
import Parts from "@/sections/Parts";
import Nav from "@/sections/Nav";
import ExplodedViews from "@/sections/ExplodedViews";
import ClassNames from "@/components/ClassNames";
import ErrorCodes from "@/sections/ErrorCodes";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <main className={ClassNames(ubuntu.className, "bg-slate-100")}>
        <ProductOverview />
        <Nav />
        <Parts />
        <ExplodedViews />
        <ErrorCodes />
      </main>
    </>
  );
}
