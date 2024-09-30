"use client"

import Image from "next/image"
import { useEffect, useState } from "react";

export const HeaderHome = () => {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex items-center bg-lightBlue py-8 pl-10 relative w-full h-auto md:flex-col md:justify-center md:w-4/12 md:px-10 2xl:w-3/12">
      <div className="relative w-[70px] h-[100px] md:w-full md:h-3/5">
        <Image
          src="/hominis-logo.svg"
          fill
          alt="HominisLogo"
        />
      </div>
      <p className="w-9/12 pl-10 text-blue text-xl font-bold font-roboto md:pl-0 md:text-center md:mt-5 md:w-full">BENEFICIO NACIONAL DE OPTICA</p>
    </div>
  )
}