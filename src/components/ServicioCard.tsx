import type { JSX } from "react";
import { Link } from "react-router-dom";

type ServicioCardProps = {
  servicio: {
    titulo: string;
    descripcion: string;
    icono: JSX.Element;
    incluye: string[];
  }
}

export default function ServicioCard({servicio} : ServicioCardProps) {
  return (
    <div
      className="bg-[#FFD3C8] px-8 py-5 rounded-lg flex flex-col items-start gap-3 justify-center shadow-xl"
    >
      <div className="bg-white p-2 rounded-full" >
        <div className="w-5 h-5 text-[#a42424]">{servicio.icono}</div>
      </div>
      <h3 className="C_Montserrat font-semibold">{servicio.titulo}</h3>
      <p>{servicio.descripcion}</p>
      <Link 
        to={'/servicios'}
        className="uppercase text-white font-semibold"  
      >Ver más</Link>
    </div>
  )
}
