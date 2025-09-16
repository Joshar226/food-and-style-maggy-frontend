type TestimonioCardProps = {
    testimonio: {
        comentario: string
        cliente: string
    }
}

export default function TestimonioCard({testimonio} : TestimonioCardProps) {
  return (
    <div
      className="bg-[#FFD3C8] px-8 py-5 rounded-lg flex flex-col items-start gap-3 justify-center shadow-xl"
    >
      <p className="font-bold">"{testimonio.comentario}"</p>
      <p>{testimonio.cliente}</p>
    </div>
  )
}
