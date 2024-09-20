import Image, { StaticImageData } from "next/image"

type CardProps = {
  title: string
  desc: string
  cover: StaticImageData
}

export function Card({ title, desc, cover }: CardProps) {
  return (
    <div className="overflow-hidden w-56 bg-white border border-[#e5e8eb] rounded-lg">
      <Image
        className="block object-cover w-full h-[140px]"
        src={cover}
        alt={title}
      />
      <div className="p-4">
        <h1 className="text-[#0d0c22] font-sans text-base font-bold mb-2">
          {title}
        </h1>
        <p className="text-xs font-lettering">{desc}</p>
      </div>
    </div>
  )
}
