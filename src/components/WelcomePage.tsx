import Image from "next/image";
import { HominisLogo } from "../../public/icons";

interface WelcomePageProps {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleGoProducts: () => void;
}


export const WelcomePage = ({ showPopup, setShowPopup, handleGoProducts }: WelcomePageProps) => {
  return (
    <div className="font-poppins text-black flex w-full">
      <div className="w-full mt-14 ml-5 mr-5 md:ml-8">
        <div className="flex items-center">
          <HominisLogo styles="" width={92} height={91} />
          <h2 className="text-6xl md:text-8xl ml-5">HOMINIS</h2>
        </div>

        <h4 className="font-bold text-3xl md:text-4xl my-5"><span className="text-violet">NUEVO</span> Catálogo de Armazones</h4>
        <ul className="list-disc pl-5 text-2xl md:text-3xl font-bold">
          <li className="">Totalmente renovado</li>
          <li className="">Con muchas más piezas para tu elección</li>
          <li className="">Modelos actuales de excelente calidad y diseño, tanto en aleación metal como en acetato y nylon.</li>
          <li className=""> Intuitivo y completo: Cada modelo se presenta en tres imágenes que incluyen también sus medidas.</li>
        </ul>
        <div className="flex justify-end mt-8">
          <button onClick={() => setShowPopup(true)} className="bg-violet px-8 py-3 text-white rounded-xl">Ver más</button>
        </div>
      </div>
      <div className="w-2/4 hidden justify-end md:flex">
        <div className="relative w-full h-[90%]">
          <Image
            src="/hominis-welcome-image.png"
            alt="anteojos"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowPopup(false)} // Optional: close on clicking the overlay
          ></div>
          <div className="relative z-10 w-96 p-7 bg-white rounded-lg shadow-lg md:w-[840px] md:p-8">
            <h2 className="text-violet text-3xl font-bold text-center md:text-start">¡Muy importante!</h2>
            <ul className="list-disc mt-6 ml-5">
              <li className="text-xl font-bold">Te recomendamos asistir a tu óptica rápidamente luego de solicitar tu autorización y haber elegido el anteojo. De esta manera podés asegurarte que el armazón elegido esté disponible, y que tu receta tendrá la validez estipulada de 60 días.</li>
              <li className="text-xl font-bold">Cuando elijas tu modelo, te sugerimos anotar su código o sacarle una captura de pantalla para cuando te sea solicitado en tu óptica.</li>
            </ul>
            <div className="flex justify-between mt-8">
              <button className="text-violet font-medium text-sm" onClick={() => setShowPopup(false)}>VOLVER</button>
              <button className="text-violet text-xl font-bold" onClick={handleGoProducts}>¡ENTENDIDO!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}