import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

interface AccordionQuestionsProps {
  from: number
  to: number
}

export function AccordionQuestions({ from, to }: AccordionQuestionsProps) {
  const data = [
    {
      id: 1,
      title: "Posso fazer o pagamento por quais meios?",
      description:
        "Você pode pagar via PIX à vista por apenas R$ 97, ou se preferir, no crédito em 12x de R$ 9,74.",
    },
    {
      id: 2,
      title: "Como vou receber o acesso ao método?",
      description:
        "Assim que o seu pagamento for confirmado você receberá um e-mail com seus dados de acesso na plataforma kiwify. Dependendo da forma de pagamento, é instantâneo.",
    },
    {
      id: 3,
      title: "Como funciona as aulas?",
      description:
        "As aulas são gravadas e atualizadas constantemente. Você pode assistir tanto no celular quanto no computador.",
    },
    {
      id: "4",
      title: "Consigo ter resultados apenas usando o celular?",
      description:
        "Com o nosso método você vai aprender tudo o que é necessário para crescer e lucrar com o marketing digital apenas usando seu celular ou computador com acesso à internet.",
    },
    {
      id: 5,
      title: "Em quanto tempo vou começar a ter resultados ?",
      description:
        "Tudo depende da sua disponibilidade para estudar e praticar o que ensinamos. Em média 3 semanas nossos alunos já estão colhendo frutos do seu trabalho.",
    },
    {
      id: 6,
      title: "Por quanto tempo terei acesso ao curso?",
      description:
        "O acesso é vitalício, com direito a atualizações das aulas sem pagar nada a mais por isso.",
    },
    {
      id: 7,
      title: "Existe alguma garantia?",
      description:
        "Sim, se você não gostar do conteúdo, poderá pedir seu dinheiro de volta, sem nenhum questionamento em até 7 dias.",
    },
    {
      id: 8,
      title: "Tem suporte ao aluno?",
      description:
        "Você vai ter acesso ao nosso suporte exclusivo diretamente no WhastApp.",
    },
  ]

  return (
    <Accordion.Root className="rounded-md divide-y-[1px]" type="multiple">
      {data.slice(from, to).map((question) => {
        return (
          <Accordion.Item
            className="overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"
            value={question.id.toString()}
            key={question.id}
          >
            <Accordion.Trigger className="text-violet11 shadow-mauve6 transition-all hover:bg-mauve2 flex py-6 flex-1 cursor-pointer items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] w-full group">
              {question.title}
              <ChevronDownIcon
                className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="text-mauve11 bg-gray4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
              <div className="py-[15px] px-5">{question.description}</div>
            </Accordion.Content>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}
