'use client'

import { useState } from "react"
import { WelcomePage } from "@/components/WelcomePage"
import { HeaderHome } from "@/components/HeaderHome"
import { useRouter } from "next/navigation"

export default function HomePage() {

  const router = useRouter()

  const [showPopup, setShowPopup] = useState(false);

  const handleNextClick = () => {
    setShowPopup(true);
  };

  const handleGoProducts = () => {
    router.push(`/productos`)
  }

  return (
    <main className="h-full flex flex-col md:flex-row md:min-h-screen">
      <WelcomePage
        handleNextClick={handleNextClick}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        handleGoProducts={handleGoProducts}
      />
    </main>
  )
}