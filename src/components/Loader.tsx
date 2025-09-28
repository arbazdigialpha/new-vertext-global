"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
  
    useEffect(() => {
      setLoading(true);
      requestAnimationFrame(() => setLoading(false));
    }, [pathname]);
  
    if (!loading) return null;
  return (
    <div className="loaderWrapper">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;