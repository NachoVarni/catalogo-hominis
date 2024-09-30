'use client'

import { useEffect, useState } from "react"
import { CatalogQuestion } from "@/components/CatalogQuestion"
import { HeaderProducts } from "@/components/HeaderProducts"

export default function ProductsPage() {

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
    <>
      <main className="font-poppins text-black h-full w-full flex flex-col md:flex-row md:min-h-screen">
        {isMobile && <HeaderProducts goBackTo="/" />}
        <CatalogQuestion isMobile={isMobile} />
      </main>
    </>
  )
}