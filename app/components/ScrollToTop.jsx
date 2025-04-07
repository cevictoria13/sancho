"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const menuitem = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [menuitem]);

  return null;
};

export default ScrollToTop;
