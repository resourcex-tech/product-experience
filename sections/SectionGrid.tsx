import ClassNames from "@/components/ClassNames";

export default function SectionGrid({ children, border, center, row }: any) {
  return (
    <section
      className={ClassNames(
        "text-gray-600 body-font bg-slate-100",
        border && "border-t border-b border-blue-300"
      )}
    >
      <div className="container px-5 py-24 mx-auto border -mb-1 border-blue-100 py-20">
        <div
          className={ClassNames(
            "flex px-5 flex-wrap",
            center && row ? "justify-center" : center && "items-center",
            row && "flex-col"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
