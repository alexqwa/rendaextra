import { Header } from "@/components/Header"
import { AccordionQuestions } from "@/components/AccordionQuestions"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <h1>Com nosso curso</h1>
        </section>
        <section className="max-w-[1120px] m-auto flex flex-col items-center justify-center my-14">
          <h1 className="text-black text-5xl font-heading font-bold self-start mb-10 relative w-fit after:content-[''] after:mt-3 after:absolute after:left-0 after:-bottom-2 after:w-[70%] after:h-[2px] after:bg-gradient-to-r after:from-green-500 after:to-transparent">
            Dúvidas frequentes
          </h1>
          <div className="grid grid-cols-2 gap-4 w-full">
            <AccordionQuestions from={0} to={4} />
            <AccordionQuestions from={4} to={8} />
          </div>
        </section>
        <footer className="bg-white py-14 w-full">dada</footer>
      </main>
    </>
  )
}
