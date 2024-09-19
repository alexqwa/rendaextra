import Image from "next/image"

import rifasIcon from "@/assets/logo.svg"

export function Header() {
  return (
    <header className="sticky left-0 top-0 py-6 border-b backdrop-blur-md backdrop-saturate-[180%] bg-white/80 border-[rgb(233, 235, 240)] z-[9998]">
      <div className="relative max-w-[1120px] m-auto flex items-center justify-center">
        <Image
          className="h-11 w-fit left-0"
          src={rifasIcon}
          alt="Rifas Green"
        />
      </div>
    </header>
  )
}
