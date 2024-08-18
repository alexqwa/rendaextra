import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type CardProps = {
  title: string
  url: StaticImport
  alt: string
  description: string
}

export function Card({ title, description, url, alt }: CardProps) {
  return (
    <div className="rounded-2xl overflow-hidden flex border border-white/15 flex-col">
      <div className="h-[300px] flex-none w-full relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={url}
            alt={alt}
            className="block w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="p-10 bg-[#ffffff0d]">
        <h1 className="text-white text-2xl font-semibold">{title}</h1>
        <p className="text-white/50 text-base mt-4">{description}</p>
      </div>
    </div>
  )
}
