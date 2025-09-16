import { Link } from "react-router-dom";
import { servicios } from "../db/servicios";
import ServicioCard from "./ServicioCard";

export default function NuestrosServicios() {

  const primerosSeis = servicios.slice(0, 6)

  return (
    <>
      <div className="flex 
        flex-col items-start gap-5
        lg:gap-20
        xl:flex-row xl:justify-between xl:items-center 
      ">
        <div className="flex-3/5">
          <h2 className="C_titulo">Nuestros Servicios</h2>
          <p>Nuestros servicios de catering están pensados para cualquier ocasión. Ya sea una boda elegante, una reunión de negocios o una fiesta privada, creamos una experiencia culinaria a tu medida</p>
        </div>

        <Link 
          to={'/servicios'}
          className="C_Montserrat text-[#760000] border-3 border-[#760000] rounded-lg font-medium py-2.5 flex-1/5 text-center shadow-xl
            px-5 mb-5 not-lg:w-full
            lg:text-lg lg:px-10 lg:mb-0 

            hover:bg-[#760000] hover:text-white active:bg-[#760000] active:text-white
            transition-all duration-300 "
        >Ver todos los servicios</Link>
      </div>

      <div className="grid 
        grid-cols-1 gap-5
        lg:grid-cols-3 lg:gap-16 mt-5"
      >
        {primerosSeis.map( servicio => <ServicioCard servicio={servicio}/>)}
      </div>

    </>
  )
}
