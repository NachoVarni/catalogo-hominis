"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { HominisLogo } from "../../public/icons"

interface CatalogQuestionProps {
    isMobile: boolean
}

export const CatalogQuestion = ({ isMobile }: CatalogQuestionProps) => {

    const router = useRouter()

    const handleSelectMaterial = (material: string) => {
        router.push(`/productos/${material.toLowerCase()}`)
    }

    return (
        <>
            {isMobile ?
                <div className="flex flex-col items-center">
                    <h3 className="mt-14 text-blue text-3xl font-bold font-roboto text-center">CATÁLOGO DIGITAL</h3>
                    <p className="mt-6 pt-2 text-blue text-xl font-bold font-roboto text-center">¿QUÉ TIPO DE LENTES TE GUSTAN?</p>
                    <button onClick={() => handleSelectMaterial("Acetato")} className="text-2xl min-w-44 mt-10 font-semibold border-solid border border-violet rounded-xl hover:bg-red hover:text-white px-10 py-5">Acetato</button>
                    <button onClick={() => handleSelectMaterial("Metal")} className="text-2xl min-w-44 mt-10 font-semibold border-solid border border-violet rounded-xl hover:bg-red hover:text-white px-10 py-5">Metal</button>
                </div> :
                <main className="hidden md:flex min-h-screen w-full">
                    <div className="w-1/3 bg-violet min-h-screen relative">
                        <div className="absolute top-[55%] right-0 translate-x-1/2 -translate-y-1/2">
                            <Image
                                src="/question-image.png"
                                width={544}
                                height={597}
                                alt="pregunta"
                                className=""
                            />
                        </div>

                    </div>
                    <div className="flex flex-col items-center w-full xl:justify-center">
                        <div className="flex items-center">
                            <HominisLogo styles="" width={61} height={60} />
                            <h2 className="text-7xl ml-5">HOMINIS</h2>
                        </div>
                        <h3 className="mt-14 text-blue text-3xl font-bold text-center">CATALOGO DE OPTICA</h3>
                        <h3 className="mt-5 text-blue text-3xl font-bold text-center">MUESTRARIO DIGITAL</h3>
                        <p className="mt-6 pt-2 text-violet text-xl font-bold text-center">¿QUÉ TIPO DE LENTES TE GUSTAN?</p>
                        <div className="flex">
                            <button onClick={() => handleSelectMaterial("Acetato")} className="text-2xl min-w-44 mt-10 font-semibold border-solid border border-violet rounded-xl hover:bg-red hover:text-white px-10 py-5">Acetato</button>
                            <button onClick={() => handleSelectMaterial("Metal")} className="text-2xl min-w-44 mt-10 font-semibold border-solid border border-violet rounded-xl ml-5 hover:bg-red hover:text-white px-10 py-5">Metal</button>
                        </div>
                    </div>
                </main>
            }
        </>
    )
}