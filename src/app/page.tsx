"use client"

import Image from "next/image"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import {
  Fire,
  ArrowRight,
  CheckCircle,
  RocketLaunch,
} from "@phosphor-icons/react"

import { Card } from "@/components/Card"
import { Header } from "@/components/Header"
import { Carousel } from "@/components/Carousel"
import { AccordionQuestions } from "@/components/AccordionQuestions"

import cashLiberty from "@/assets/frame.jpg"
import timeLiberty from "@/assets/frame3.jpg"
import moneyFace from "@/assets/money-face.png"
import strategyLibery from "@/assets/frame4.jpg"
import geographicLiberty from "@/assets/frame2.jpg"

const data = [
  {
    id: 1,
    title: "Liberdade financeira",
    desc: "Nunca mais seja escravo das finanças, faça ela trabalhar para você.",
    cover: cashLiberty,
  },
  {
    id: 2,
    title: "Liberdade geográfica",
    desc: "Viva e trabalhe em qualquer lugar do mundo, sem restrições!",
    cover: geographicLiberty,
  },
  {
    id: 3,
    title: "Liberdade de tempo",
    desc: "Nunca mais bata cartão e cumpra horário, seu negócio, suas regras",
    cover: timeLiberty,
  },
  {
    id: 4,
    title: "Estratégias",
    desc: "Tenha diversas estratégias para grandes resultados de forma rápida.",
    cover: strategyLibery,
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <div className="max-w-[1120px] m-auto py-20">
            <h1 className="text-6xl font-bold mb-4 text-[#0d0c22]">
              Crie a sua renda extra em
              <br /> questão de minutos!
            </h1>
            <p className="text-lg opacity-80 mb-4">
              Se você não fizer uma nova renda digital
              <br />
              em 1 mês, devolvo seu dinheiro.
            </p>
            <button className="flex items-center justify-between gap-2 bg-violet-500 h-12 px-4 font-normal text-white text-sm rounded-md hover:bg-violet-800 transition-all">
              Quero estar no topo <ArrowTopRightIcon />
            </button>
          </div>
        </section>
        <section className="max-w-[1120px] m-auto flex flex-col items-center justify-center py-14">
          <h1 className="text-[#0d0c22] font-bold text-5xl mb-20">
            Com o treinamento você conseguirá
          </h1>
          <div className="grid grid-cols-4 gap-6">
            {data.map((cards) => {
              return (
                <Card
                  key={cards.id}
                  title={cards.title}
                  desc={cards.desc}
                  cover={cards.cover}
                />
              )
            })}
          </div>
        </section>
        <section className="bg-white w-full py-14 flex flex-col items-center justify-center">
          <div className="w-28 h-28 bg-zinc-400/20 flex items-center justify-center rounded-full border-8 border-white/50 mb-8">
            <Image
              className="w-20 h-20"
              src={moneyFace}
              alt="Cara de dinheiro"
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-[#0d0c22]">
              Sem papo furado...
            </h1>
            <p className="text-center">
              É preto no branco o papo com você, afinal estou falando com uma
              pessoa que pode chegar ao topo <br /> nos próximos mêses. Você
              terá acesso a meu curso de máxima imersão, análise e plano
              individual
              <br /> de escala para construir sua próxima renda digital.
            </p>
          </div>
          <div className="h-20 bg-gradient-to-t from-transparent to-violet-500 w-[2px] rounded-lg mt-12" />
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#232120] rounded-lg w-[290px] border h-fit border-[#e5e8eb] p-6 mt-3">
              <div className="flex items-center gap-[10px]">
                <h1 className="text-white font-bold font-sans text-lg">
                  Bônus
                </h1>
                <div className="flex items-center gap-[6px] bg-[#3b3b3b] py-[6px] px-[10px] rounded-full">
                  <RocketLaunch size={16} color="#fff" />
                  <span className="text-white text-xs">Alta performance</span>
                </div>
              </div>
              <div className="mt-5">
                <small className="mb-1 line-through text-xs text-[#ff8c8c] block">
                  De R$ 999,90 por
                </small>
                <h1 className="block text-3xl font-bold text-white">
                  R$ 00
                  <small className="text-base">,00</small>
                </h1>
              </div>
              <button className="mt-5 group/button bg-white hover:opacity-90 transition-all w-full flex items-center justify-between rounded-xl h-12 px-6 text-sm text-black">
                Começar agora
                <ArrowRight
                  className="group-hover/button:translate-x-2 transition-all ease-out"
                  size={18}
                  color="#000"
                />
              </button>
              <div className="border-b border-dashed border-[#3b3b3b] w-full my-5" />
              <span className="font-semibold text-sm text-[#a1a1a1] block mb-5">
                Tudo no plano &quot;Padrão&quot;, mais
              </span>
              <ul className="space-y-2">
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#a1a1a1" />
                  <span className="text-sm text-white">
                    Acompanhamento exclusivo
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#a1a1a1" />
                  <span className="text-sm text-white">
                    2 Aulas ao vivo por dia
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#a1a1a1" />
                  <span className="text-sm text-white">Área de membros</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#a1a1a1" />
                  <span className="text-sm text-white">5 Ebooks grátis</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#a1a1a1" />
                  <span className="text-sm text-white">Sorteios</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-300/30 rounded-lg w-[290px] border border-[#e5e8eb] p-6 mt-3 h-fit">
              <div className="flex items-center gap-[10px]">
                <h1 className="text-[#0d0c22] font-bold font-sans text-lg">
                  Padrão
                </h1>
                <div className="flex items-center gap-[6px] bg-violet-500 py-[6px] px-[10px] rounded-full">
                  <Fire size={16} color="#fff" />
                  <span className="text-white text-xs">Mais popular</span>
                </div>
              </div>
              <div className="mt-5">
                <small className="mb-1 line-through text-xs text-[#e00] block">
                  De R$ 397,00 por
                </small>
                <h1 className="block text-3xl font-bold text-[#0d0c22]">
                  R$ 97
                  <small className="text-base">,90</small>
                </h1>
              </div>
              <button className="mt-5 group/button bg-violet-500 hover:opacity-90 transition-all w-full flex items-center justify-between rounded-xl h-12 px-6 text-sm text-white text-left">
                Começar agora
                <ArrowRight
                  className="group-hover/button:translate-x-2 transition-all ease-out"
                  size={18}
                  color="#fff"
                />
              </button>
              <div className="border-b border-dashed border-[#3b3b3b] opacity-50 w-full my-5" />
              <ul className="space-y-2">
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#828791" />
                  <span className="text-sm text-[#0d0c22]">
                    Suporte via WhatsApp
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#828791" />
                  <span className="text-sm text-[#0d0c22]">
                    Garantia de 7 dias
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#828791" />
                  <span className="text-sm text-[#0d0c22]">Aulas ao vivo</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#828791" />
                  <span className="text-sm text-[#0d0c22]">Integrações</span>
                </li>

                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#828791" />
                  <span className="text-sm text-[#0d0c22]">Prêmios</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#828791" />
                  <span className="text-sm text-[#0d0c22]">Ebooks</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#232120] rounded-lg w-[290px] border h-fit border-[#e5e8eb] p-6 mt-3">
              <div className="flex items-center gap-[10px]">
                <h1 className="text-white font-bold font-sans text-lg">
                  Bônus
                </h1>
                <div className="flex items-center gap-[6px] bg-[#3b3b3b] py-[6px] px-[10px] rounded-full">
                  <RocketLaunch size={16} color="#fff" />
                  <span className="text-white text-xs">Alta performance</span>
                </div>
              </div>
              <div className="mt-5">
                <small className="mb-1 line-through text-xs text-[#ff8c8c] block">
                  De R$ 449,00 por
                </small>
                <h1 className="block text-3xl font-bold text-white">
                  R$ 00
                  <small className="text-base">,00</small>
                </h1>
              </div>
              <button className="mt-5 group/button bg-white hover:opacity-90 transition-all w-full flex items-center justify-between rounded-xl h-12 px-6 text-sm text-black">
                Começar agora
                <ArrowRight
                  className="group-hover/button:translate-x-2 transition-all ease-out"
                  size={18}
                  color="#000"
                />
              </button>
              <div className="border-b border-dashed border-[#3b3b3b] w-full my-5" />
              <span className="font-semibold text-sm text-[#a1a1a1] block mb-5">
                Tudo no plano &quot;Padrão&quot;, mais
              </span>
              <ul className="space-y-2">
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#a1a1a1" />
                  <span className="text-sm text-white">
                    Grupo de membros VIP
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <CheckCircle size={16} color="#a1a1a1" />
                  <span className="text-sm text-white">10 Ebooks grátis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center py-14">
          <h1 className="text-[#0d0c22] mb-3 relative leading-tight text-3xl block font-extrabold">
            Depoimento de alguns de nossos alunos
          </h1>
          <p className="text-[#6f7278] text-lg font-nomal leading-tight relative">
            Conheça mais sobre o que a nossa plataforma pode te oferecer.
          </p>
          <Carousel />
        </section>
        <section className="max-w-[1120px] m-auto flex flex-col items-center justify-center py-14">
          <h1 className="text-[#0d0c22] text-5xl font-bold self-start mb-10 relative">
            Dúvidas frequentes
          </h1>
          <div className="grid grid-cols-2 gap-4 w-full">
            <AccordionQuestions from={0} to={4} />
            <AccordionQuestions from={4} to={8} />
          </div>
        </section>
        <footer className="bg-white text-center py-4 w-full text-sm">
          Renda Extra. Todos os direitos reservados.
        </footer>
      </main>
    </>
  )
}
