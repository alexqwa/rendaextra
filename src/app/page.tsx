"use client"

import { useRouter } from "next/navigation"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import financialFreedom from "../assets/frame.jpg"
import geographicFreedom from "../assets/frame2.jpg"
import timeFreedom from "../assets/frame3.jpg"

import { Card } from "@/components/Card"

export default function Home() {
  const router = useRouter()

  return (
    <main className="bg-[#010101]">
      <section className="h-[300px] w-full bg-white">
        <h1>Sem essa de erro</h1>
      </section>
      <section className="py-10 w-full max-w-[90%] mx-auto">
        <h1 className="text-center bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text font-bold text-3xl mb-10">
          Com o curso você
          <br /> conseguirá
        </h1>
        <div className="space-y-6">
          <Card
            url={financialFreedom}
            alt="Liberdade financeira"
            title="Liberdade financeira"
            description="Nunca mais seja escravo das finanças, faça ela trabalhar para você. Conquiste a autonomia de viver plenamente de acordo com seus próprios termos."
          />
          <Card
            url={geographicFreedom}
            alt="Liberdade geográfica"
            title="Liberdade geográfica"
            description="Viva e trabalhe em qualquer lugar do mundo, sem restrições! Tenha condições de definir o seu local ideal, lhe proporcionando uma experiência de vida superior."
          />
          <Card
            url={timeFreedom}
            alt="Liberdade de tempo"
            title="Liberdade de tempo"
            description="Nunca mais bata cartão e cumpra horário, seu negócio, suas regras! Decida o horário que quiser para faturar no digital."
          />
        </div>
      </section>
      <section className="mt-10 mb-16 align-center">
        <div className="px-10">
          <h1 className="bg-gradient-to-r text-center from-50% to-70% from-white to-gray-600 text-transparent text-3xl bg-clip-text">
            Sem papo furado...
          </h1>
          <p className="text-white/60 text-center mt-6">
            É preto no branco, o papo com você, afinal eu tô falando com uma
            pessoa que pode chegar ao topo nos próximos meses. Você terá acesso
            a um curso de 100% imersão, análise e plano individual de escala
            para o seu próximos negócios.
          </p>
        </div>
        <div className="w-full max-w-[70%] mx-auto backdrop-blur-md backdrop-saturate-[180%] bg-[#ffffff0d] border border-white/15 p-10 rounded-lg mt-8">
          <div className="items-center justify-center flex flex-col">
            <h1 className="text-white font-bold text-4xl">R$97.00</h1>
            <p className="text-white text-xl">Ou 10x de R$9.70</p>
            <button
              onClick={() =>
                router.push(
                  "https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook"
                )
              }
              className="bg-[#19191a] w-full h-16 rounded-full border flex items-center border-white/15 mt-5 p-1"
            >
              <div className="bg-gradient-to-r from-[#242525] to-blue-600/80 justify-center flex items-center text-white h-full rounded-full w-[80%] border border-white/15">
                Quero estar no topo
              </div>
              <div className="flex-1 items-center justify-center flex">
                <ArrowUpRight size={26} color="#fff" />
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="h-[300px] w-full bg-white">
        <h1>
          Sem essa de criar um negócio para ficar preso dentro da própria
          operação…
        </h1>
      </section>
      <footer className="items-center flex justify-center py-14">
        <p className="text-white">Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
