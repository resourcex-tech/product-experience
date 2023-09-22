import React, { useState, useEffect } from "react";
import InteractiveExplodedView from "./InteractiveExplodedView";
import ExplodedView from "./ExplodedView";
import ClassNames from "@/components/ClassNames";

export default function ExplodedViews() {
  const [active, setActive] = useState(0);

  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    console.log(transitioning);
  }, [transitioning]);

  useEffect(() => {
    if (active === 0) {
      const timer = setTimeout(() => {
        setTransitioning(true);

        console.log("transitioning");
      }, 100);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTransitioning(false);

        console.log("transitioning");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [active]);

  if (active === 0) {
    return (
      <div
        className={ClassNames(
          "transition-all transform origin-center overflow-hidden",
          transitioning ? "scale-100" : "scale-0"
        )}
      >
        <ExplodedView toggle={setActive} />
      </div>
    );
  } else {
    return (
      <div
        className={ClassNames(
          "transition-all transform origin-center overflow-hidden",
          transitioning == false ? "scale-100" : "scale-0"
        )}
      >
        <InteractiveExplodedView toggle={setActive} />
      </div>
    );
  }
}
