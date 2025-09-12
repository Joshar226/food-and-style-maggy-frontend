import Testimonios from "../components/Testimonios";
import { servicios } from "../db/servicios";

export default function Servicios() {
  return (
    <>
      <header className="relative -z-10">
        <img 
          src="bg-secundario2.png" 
          alt="background servicios" 
          className="
            -translate-y-[40px]
            lg:-translate-y-[500px]
          "
        />
        <div className="absolute inset-0 flex flex-col items-center text-center text-white
        
          lg:mt-20"
        >
          <h1 className="C_titulo">Servicios</h1>
          <p className="
            max-w-[90%]
            lg:max-w-[50%]"
          >Pellentesque lorem quis in auctor bibendum ullamcorper non purus dui, ultricies sit eu sit pellentesque duis vitae non est eu, quis metus aliquet laoreet.</p>
        </div>
      </header>

      <main className="
        px-6 -translate-y-[50px]
        md:px-10 md:-translate-y-[225px] md:-mb-[100px]
        lg:px-[20%] lg:-translate-y-[600px] lg:-mb-[450px]
      ">
        
        {servicios.map( servicio => (
          <div className="flex 
            not-sm:pb-5 not-sm:flex-col items-center not-sm:border-b-1 border-b-[#dadada] mb-16
            md:gap-10 md:even:flex-row-reverse
            lg:gap-16 lg:mb-10
            "
          >
            <img 
              src={servicio.img}
              alt={servicio.titulo}
              className="
                rounded-2xl h-[170px] w-[300px]
                lg:rounded-none md:w-[50%] md:h-auto
              "
            />

            <div className="flex flex-col
              mt-5 px-8 gap-2.5
              md:mt-0 md:px-0 lg:gap-5
              "
            >
              <h3 className="C_Old-Standard-TT uppercase
                text-xl
                lg:text-2xl"
              >{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
              <ul>
                {servicio.incluye.map( incluye => (
                  <li className="list-disc ml-8">{incluye}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <Testimonios />
      </main>
    </>
  )
}