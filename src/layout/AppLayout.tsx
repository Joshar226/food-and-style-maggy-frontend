import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink, Outlet } from "react-router-dom";
import { servicios } from "../db/servicios";

export default function AppLayout() {

  const primerosCuatro = servicios.slice(0, 4)

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    
    if(showMenu) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [showMenu])
  

  return (
    <>
      <nav>
        <div className="flex items-center justify-around py-4 bg-white">
          <Link 
            to={'/'}
            className="flex items-center gap-2"
          >
            <img 
              srcSet="logo.webp 1x, logo@2x.webp 2x"
              alt="Logo de Food and Style Maggy" 
              className=" 
                w-[50px] 
                md:w-[60px]
              "
              loading="lazy"
            />

            <p className=" C_Old-Standard-TT 
              text-lg 
              md:text-xl
              "
            >Food and Style Maggy</p>
          </Link>

          {/* LG Menu */}
          <div
            className="lg:flex text-lg items-center gap-12 
              hidden 
              *:hover:scale-110 *:transition *:duration-300
            "
          >
            <NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#760000] font-bold ' : ''}>Inicio</NavLink>
            <NavLink to={'/servicios'} className={({isActive}) => isActive ? 'text-[#760000] font-bold ' : ''}>Servicios</NavLink>
            <NavLink to={'/sobre-nosotros'} className={({isActive}) => isActive ? 'text-[#760000] font-bold ' : ''}>Sobre Nosotros</NavLink>
            <a 
              href="https://wa.link/q178gy"
              className="bg-[#760000] text-white C_Montserrat font-semibold text-lg py-2.5 px-12 rounded-lg hover:bg-[#630000]"
              target="_blank"
            >Cotiza tu evento</a>
          </div>

          {/* SM Menu */}
          <div className="bg-[#760000]  rounded-full text-white
            p-2.5 
            md:w-10 md:h-10 md:p-2
            lg:hidden
          "
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <FiX className="w-full h-full"/> : <TiThMenu className="w-full h-full"/>}
          </div>  
        </div>  

      </nav>

      <div className="relative">
        <AnimatePresence>
          {showMenu && 
            <motion.div
              initial={{y: '-100%'}}
              animate={{y: 0}}
              exit={{y: '-200%'}}
              transition={{
                type: 'spring',
                bounce: 0.4
              }}
              className="flex flex-col bg-[#f7f7f7] absolute w-full z-20
              
              *:py-2.5 *:border-b-1 *:border-b-[#c7c7c7] *:px-5
              "
              onClick={() => setShowMenu(false)}
            >
            
              <NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#760000] font-bold ' : ''}>Inicio</NavLink>
              <NavLink to={'/servicios'} className={({isActive}) => isActive ? 'text-[#760000] font-bold ' : ''}>Servicios</NavLink>
              <NavLink to={'/sobre-nosotros'} className={({isActive}) => isActive ? 'text-[#760000] font-bold ' : ''}>Sobre Nosotros</NavLink>
            </motion.div>
          }
        </AnimatePresence>

        <AnimatePresence>
          {showMenu && 
            <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 100}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              className="h-svh bg-black/50 absolute inset-0 z-10"
              onClick={() => setShowMenu(false)}
            ></motion.div>
          }   
        </AnimatePresence> 
      </div>

      <div className="mt-5 lg:mt-0">
        <Outlet />
      </div>

      <div className="relative">
        <img 
          src="cta-intermedio.avif"
          alt="Comidas completas"
          loading="lazy"
          className="hidden lg:block"
        />
        <img 
          src="cta-intermedio@2x.avif"
          alt="Comidas completas"
          loading="lazy"
          className="lg:hidden"
        />

        <div className="absolute inset-0 flex items-center
          flex-col justify-center text-center gap-5 
          lg:flex-row
          lg:justify-evenly"
        >
          <h3 className="C_Old-Standard-TT text-white uppercase
            text-2xl
            md:text-4xl"
          >Tu trae los invitados <br /> Dejanos el resto</h3>

          <a 
            href="https://wa.link/q178gy"
            className="C_Montserrat text-white bg-[#760000] py-2.5 font-semibold rounded-lg
              px-5
              md:text-xl lg:px-10

              hover:bg-[#630000] hover:scale-110 active:bg-[#630000] active:scale-110
              transition-all duration-300
              "
            target="_blank"
          >Hablemos de tu evento</a>
          
        </div>
      </div>

      <footer className="bg-black text-white py-5 px-5
        text-center
        lg:text-left lg:px-[10%]
      ">
        <div className="flex border-b-1 pb-5
          flex-col gap-10
          lg:flex-row items-center
          *:flex-1/3 *:not-first-of-type:text-center
        ">
          <div className="flex flex-col 
            gap-3
            lg:gap-2
          ">
            <h3 className="C_Old-Standard-TT
              text-2xl
              md:text-3xl 
            ">Food and Style Maggy</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>

            <div className="flex 
              justify-center gap-10
              lg:justify-start

              *:w-10 *:h-10
            ">
              <a 
                href="https://www.facebook.com/foodandstylemaggy"
                target="_blank"
              >
                <FaFacebookF className="w-full h-full" />
              </a>
              <a 
                href="https://www.instagram.com/foodandstylemaggy"
                target="_blank"
              >
                <FaInstagram className="w-full h-full" />
              </a>
              <a 
                href="https://wa.link/q178gy"
                target="_blank"
              >
                <FaWhatsapp className="w-full h-full"/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="C_Old-Standard-TT uppercase 
              text-lg
              md:text-xl
            ">Nuestros Servicios</h3>

            <div className="text-lg flex flex-col">
              {primerosCuatro.map( servicio => (
                <Link to={'/servicios'}>{servicio.titulo}</Link>
              ))}
            </div>
          </div>

          <div className="text-lg flex flex-col">
            <Link to={''}>Política de Privacidad</Link>
            <Link to={''}>Términos y Condiciones</Link>
            <Link to={''}>Aviso Legal</Link>
          </div>
        </div>

        <div className="pt-5
          lg:flex lg:justify-between
        ">
          <p>Copyright &#169; {new Date().getFullYear()} Food and Style Maggy</p>
          <a 
            href="https://www.nucleostudiocr.com"
            target="_blank"
            className="hover:underline"  
          >Powered by Nucleo Studio</a>
        </div>
      </footer>
      
      <a 
        href="https://wa.link/q178gy"
        className="fixed bottom-3 right-3 bg-green-800 p-2 rounded-full"
        target="_blank"
      >
        <div className="w-12 h-12 text-white">
          <FaWhatsapp className="w-full h-full"/>
        </div>
      </a>


    </>

  )
}
