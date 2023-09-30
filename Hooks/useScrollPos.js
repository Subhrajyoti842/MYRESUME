import { useEffect, useState } from "react";

function useScrollPos() {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrollPos(Math.floor(window.pageYOffset));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);
  return scrollPos;
}

export { useScrollPos };
