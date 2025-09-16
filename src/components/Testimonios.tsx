import { testimonios } from "../db/testimonios";
import TestimonioCard from "./TestimonioCard";


export default function Testimonios() {
  return (
    <div className="
      mt-28
      lg:mt-60
    ">
        <h2 className="C_titulo">Que dicen nuestros clientes</h2>
        <p className="lg:w-[70%]">Sus palabras son nuestro mayor orgullo. Cada evento es un reto que nos llena de alegría, y aquí te compartimos las historias y los momentos inolvidables que hemos creado juntos.</p>

        <div className="grid 
          grid-cols-1 gap-5
          lg:grid-cols-3 lg:gap-16 mt-5
        ">
            { testimonios.map( testimonio => <TestimonioCard testimonio={testimonio}/>) }
        </div>
    </div>
  )
}
