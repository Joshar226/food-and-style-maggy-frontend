import NuestrosServicios from "../components/NuestrosServicios";

export default function SobreNosotros() {
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
          <h1 className="C_titulo">Sobre Nostros</h1>
          <p className="
            max-w-[90%]
            lg:max-w-[50%]"
          >Nuestra historia es sencilla, amor por la cocina y el deseo de compartirlo contigo. Creamos cada menú con la dedicación de quien cocina para sus seres queridos.</p>
        </div>
      </header>

      <main className="
        mt-36 px-7
        -translate-y-[200px] -mb-[100px]
        md:-translate-y-[450px] md:-mb-[300px] md:px-20
        lg:mt-16 lg:px-[15%] lg:-mb-[450px]
        xl:-translate-y-[35%] 
        
      ">
        
      <img 
        src="sobre-nosotros.png" 
        alt="platos de comida"
        className="rounded-2xl
          mb-20 not-lg:hidden
          
        "
      />

      <img 
        src="sobre-nosotros-mobile.png" 
        alt="platos de comida"
        className="rounded-2xl
          mb-20
          lg:hidden
        "
      />

      <div className="
        mb-12
        md:mb-28
        lg:flex items-center
      ">
        <h2 className="C_titulo 
          lg:flex-1/3"
        >Nuestra Historia</h2>

        <p className="not-lg:pl-5 
          lg:flex-1/2"
        >Nisl, volutpat cras ultrices placerat tellus elementum, eleifend lacus justo, eleifend sem faucibus magna dictumst ac leo tempor lacus, netus hac sagittis velit amet, commodo, amet, elementum, ultrices mi volutpat nisi.
        Risus eu vestibulum semper vel habitasse eget sed varius egestas et, malesuada tempor, turpis a, risus non sed erat faucibus cras aliquet pulvinar vel id aliquet aliquam porttitor aliquam tristique urna, ut malesuada duis fringilla semper enim sed mauris et aliquam quis vitae eget tortor iaculis posuere morbi non quis et malesuada tortor amet dictum augue.</p>
      </div>


      <div className="flex
        mb-32 not-sm:gap-5
        not-md:flex-col 
        lg:mb-36 items-center lg:gap-20
      ">
        <img 
          src="persona.png" 
          alt="Dueña de Food and Style Maggy" 
          className="
            w-[75%]
            md:w-[40%]
            lg:w-[30%]
          "
        />

        <div className="flex flex-col gap-2
          md:gap-3
          not-lg:pl-5 
          lg:flex-1/2 lg:gap-5"
        >
          <p className=" font-semibold text-lg"
          >Nisl, volutpat cras ultrices placerat tellus elementum, eleifend lacus justo, eleifend sem faucibus magna dictumst ac leo tempor lacus, netus hac sagittis velit amet, commodo, amet, elementum, ultrices mi volutpat nisi.
          Risus eu vestibulum semper vel habitasse eget sed varius egestas et, malesuada tempor, turpis a, risus non sed erat faucibus cras aliquet pulvinar vel id aliquet aliquam porttitor aliquam tristique urna, ut malesuada duis fringilla semper enim sed mauris et aliquam quis vitae eget tortor iaculis posuere morbi non quis et malesuada tortor amet dictum augue.</p>

          <p className="C_Montserrat text-lg uppercase font-medium">Magaly Umaña</p>
          <p>Dueña</p>
        </div>
      </div>

      <NuestrosServicios />

      </main>
    </>
  )
}
