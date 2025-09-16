import { Link } from "react-router-dom";
import NuestrosServicios from "../components/NuestrosServicios";
import Testimonios from "../components/Testimonios";

export default function Home() {
  return (
    <>
      <header className="
        mt-5 
        lg:mt-0 lg:relative"
      >
        <div className=" flex flex-col justify-center items-start 
          px-5 gap-3
          md:pl-8 md:gap-4
          lg:pl-12 lg:mt-0 lg:absolute lg:inset-0 
          xl:pl-40
        ">
          <h1 className="C_Old-Standard-TT uppercase italic
            text-2xl
            md:text-3xl
            lg:text-4xl
            xl:text-6xl
            "
          >Catering Service <br />
            para tus momentos  <br />
            especiales
          </h1>

          <p className="
            max-w-[65%]
            md:max-w-[50%]  
          "
          >Delicias culinarias diseñadas para tus momentos especiales. Saborea la calidad y el servicio excepcional en cada evento.</p>

          <a 
            href="https://wa.link/q178gy"
            className="C_Montserrat text-white shadow-xl bg-[#760000] py-2.5 rounded-lg font-medium text-center
              px-5 not-lg:w-full not-lg:mx-auto
              md:text-lg md:px-10

              hover:bg-[#630000] hover:scale-110 active:bg-[#630000] active:scale-110
              transition-all duration-300"
            target="_blank"
            >Solicita una cotización</a>
        </div>

        <img 
          src="cta.avif"
          alt="Pierna de Cerdo con papas"
          loading="lazy"
          className="hidden md:block"
        />
      </header>

      <main className="
        mt-32 px-7
        md:px-20
        lg:mt-16 lg:px-[15%]
      ">
        <NuestrosServicios />
        <Testimonios />

        <div className="
          my-20
          lg:mt-60 lg:mb-44 lg:flex lg:items-center lg:gap-5
            
          "
        >
          <img 
            src="ensalada.jpg" 
            alt="Ensalada verde con tomate" 
            className="mx-auto
              mb-10
              md:w-[60%] 
              lg:w-[50%] lg:mb-0
            "
          />

          <div className="flex flex-col">
            <h2 className="C_titulo">Sobre Nosotros</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <Link 
              to={'/sobre-nosotros'}
              className="C_Montserrat uppercase font-semibold mt-2.5 text-lg"
            >Leer Más</Link>
          </div>
        </div>
      </main>


    </>
  )
}
