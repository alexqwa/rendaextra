"use client"

import Image from "next/image"
import { Fire, ArrowRight, CheckCircle } from "@phosphor-icons/react"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

import { Card } from "@/components/Card"
import { Header } from "@/components/Header"
import { AccordionQuestions } from "@/components/AccordionQuestions"

import cashLiberty from "@/assets/frame.jpg"
import geographicLiberty from "@/assets/frame2.jpg"
import timeLiberty from "@/assets/frame3.jpg"
import strategyLibery from "@/assets/frame4.jpg"
import moneyFace from "@/assets/money-face.png"

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
            <h1 className="text-6xl font-bold mb-4 font-heading">
              Crie a sua renda extra em
              <br /> questão de minutos!
            </h1>
            <p className="text-lg opacity-80 mb-4">
              Se você não fizer uma nova renda digital
              <br />
              em 1 mês, devolvo seu dinheiro.
            </p>
            <button className="flex items-center justify-between gap-2 bg-violet-500 h-12 px-4 font-normal text-white font-lettering text-sm rounded-md hover:bg-violet-800 transition-all">
              Quero estar no topo <ArrowTopRightIcon />
            </button>
          </div>
        </section>
        <section className="max-w-[1120px] m-auto flex flex-col items-center justify-center my-14">
          <h1 className="text-zinc-800 font-bold font-heading text-5xl mb-8">
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
        <section className="bg-white my-14 w-full py-14 flex flex-col items-center justify-center">
          <div className="w-28 h-28 bg-zinc-400/20 flex items-center justify-center rounded-full border-8 border-white/50 mb-8">
            <Image
              className="w-20 h-20"
              src={moneyFace}
              alt="Cara de dinheiro"
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-heading font-bold text-[#0d0c22]">
              Sem papo furado...
            </h1>
            <p className="text-center font-lettering">
              É preto no branco o papo com você, afinal estou falando com uma
              pessoa que pode chegar ao topo <br /> nos próximos mêses. Você
              terá acesso a meu curso de máxima imersão, análise e plano
              individual
              <br /> de escala para construir sua próxima renda digital.
            </p>
          </div>
          <div className="h-20 bg-gradient-to-t from-transparent to-violet-500 w-[2px] rounded-lg mt-12" />
          <div className="bg-slate-300/30 rounded-lg w-64 border border-[#e5e8eb] p-6 mt-3">
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
              <h1 className="block text-3xl font-bold text-[#0d0c22]">
                R$ 97<small className="text-base">,90</small>
              </h1>
            </div>
            <button className="mt-5 bg-violet-500 hover:opacity-90 transition-all w-full flex items-center justify-between rounded-xl h-12 px-6 text-sm text-white text-left">
              Começar agora
              <ArrowRight size={18} color="#fff" />
            </button>
            <div className="border-dashed my-5 border border-[#e5e8eb]" />
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
        </section>
        <section className="max-w-[1120px] m-auto flex flex-col items-center justify-center my-14">
          <h1 className="text-black text-5xl font-heading font-bold self-start mb-10 relative w-fit after:content-[''] after:mt-3 after:absolute after:left-0 after:-bottom-2 after:w-[70%] after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-transparent">
            Dúvidas frequentes
          </h1>
          <div className="grid grid-cols-2 gap-4 w-full">
            <AccordionQuestions from={0} to={4} />
            <AccordionQuestions from={4} to={8} />
          </div>
        </section>
        <footer className="bg-white text-center py-14 w-full">
          Renda Extra. Todos os direitos reservados.
        </footer>
      </main>
    </>
  )
}
