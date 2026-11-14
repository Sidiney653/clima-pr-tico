import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { withCheckoutUtms } from "@/lib/checkout-tracking";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const IMG2 = "https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/d08bb98d-db0f-451f-aa55-124b86c1d482/";
const HERO = "/mockups/hero.webp";
const CHECKOUT_BASIC = "https://checkout.wiven.com.br/checkout/cmwcvuz8n23x401q2do1f5s45?offer=EBD6LD7";
const CHECKOUT_FULL = "https://checkout.wiven.com.br/checkout/cmwcw3kic247401pv6blb2533?offer=Y7WJELC";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diagnósticos para Ar-Condicionado Split" },
      { name: "description", content: "Diagnósticos ilustrados para identificar o defeito do Split antes de trocar qualquer peça." },
      { property: "og:title", content: "Diagnósticos para Ar-Condicionado Split" },
      { property: "og:description", content: "Sintoma, causas prováveis, verificações na ordem e próximo passo em uma página ilustrada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: HERO, type: "image/webp", fetchPriority: "high" } as any],
  }),
  component: Index,
});

const samples = Array.from({ length: 16 }, (_, i) => i + 1).map((n) => `/mockups/diagnostico-${n}.webp`);
const testimonials = Array.from({ length: 10 }, (_, i) => i + 1).map((n) => `/mockups/depoimento-${n}.webp`);

const features = [
  ["Ilustração que aponta onde olhar", "Cada página mostra o aparelho com os pontos numerados: você vê exatamente qual componente verificar."],
  ["Causas mais prováveis, em ordem", "As causas vêm classificadas como muito comum, comum ou menos comum. Você começa pelo que mais acontece."],
  ["Verificações na ordem certa", "Passo a passo do que medir ou inspecionar, com o resultado que confirma ou descarta cada causa."],
  ["Próximo passo em formato SE → ENTÃO", "Conforme o que você encontrou na medição, a página já diz para onde seguir."],
  ["Alerta \"Antes de trocar a peça\"", "O erro que mais gera retorno do cliente naquele defeito, para você não cair nele."],
  ["Sistema, aplicação e ferramenta", "Logo no topo: qual sistema investigar, se vale para convencional ou inverter e qual instrumento separar."],
];

const ideal = [
  ["Parar de diagnosticar no chute", "Um caminho definido para cada sintoma, em vez de trocar peça até funcionar."],
  ["Saber por onde começar", "Abra no sintoma e já tenha a primeira verificação na frente."],
  ["Confirmar antes de trocar", "Descarte as outras causas antes de condenar placa, capacitor ou compressor."],
  ["Evitar o retorno do cliente", "Ache a causa de verdade, e não só o sintoma, para o defeito não voltar na semana seguinte."],
  ["Segurança diante do cliente", "Explique o problema com base em medição, não em suposição."],
  ["Atender mais rápido", "Menos tentativa e erro, mais espaço na agenda."],
];

const blocks = [
  "Não gela ou gela pouco", "Não liga, desarma ou desliga sozinho", "Parte elétrica (disjuntor, DR, placa)",
  "Drenagem: pinga e vaza água", "Ventilação e fluxo de ar", "Ruídos, estalos e vibração",
  "Comando, controle remoto e display", "Erros de instalação e de comunicação",
];

const bonus = [
  ["Checklist de Atendimento e Registro de Sintomas", "Organize as informações do cliente, as condições encontradas e o histórico do equipamento."],
  ["Ferramentas e Instrumentos de Diagnóstico", "Entenda a finalidade dos instrumentos, suas limitações e os cuidados de utilização."],
  ["Erros de Instalação: Guia de Observação", "Consulte sinais que merecem investigação e registre os pontos que precisam de avaliação."],
  ["Relatório Técnico e Explicação ao Cliente", "Modelos para apresentar as verificações realizadas, os resultados e as recomendações."],
];

const faq = [
  ["Serve para inverter ou só convencional?", "Serve para os dois. Cada diagnóstico indica no topo se vale para convencional, inverter ou ambos."],
  ["Serve para a marca que eu atendo?", "Sim. O material é organizado por sintoma e sistema, não por marca. A lógica vale para qualquer fabricante."],
  ["Ensina instalação, carga de gás e solda?", "Não. O foco é o diagnóstico: identificar a causa e saber o que verificar antes de trocar componente."],
  ["Sou iniciante, vou conseguir usar?", "Sim. Cada página é ilustrada, com linguagem direta e as verificações já na ordem em que devem ser feitas."],
  ["Já tenho experiência, vai ser básico?", "É material de consulta, usado como checklist para não pular etapa, conferir o próximo passo e evitar troca de peça desnecessária."],
  ["Preciso de internet no cliente?", "Não. É um PDF que fica salvo no seu celular, e você também pode imprimir."],
  ["E se eu não gostar?", "Você tem 30 dias para pedir o reembolso, sem burocracia."],
];

function Check() {
  return <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-primary">✓</span>;
}

function Section({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {title && <h2 className="mb-10 text-center text-2xl font-bold md:text-4xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const [api, setApi] = useState<CarouselApi>();
  const [apiDepo, setApiDepo] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3000);
    return () => clearInterval(id);
  }, [api]);
  useEffect(() => {
    if (!apiDepo) return;
    const id = setInterval(() => apiDepo.scrollNext(), 3000);
    return () => clearInterval(id);
  }, [apiDepo]);
  return (
    <main>
      <div className="bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground md:text-sm">
        Oferta especial disponível por tempo limitado
      </div>

      <section className="bg-hero px-5 pb-16 pt-12 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">Guia de Diagnóstico para Ar-Condicionado Split</span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">
              <span className="text-primary">Diagnósticos ilustrados para Ar-Condicionado Split</span>: descubra o defeito antes de trocar qualquer peça
            </h1>
            <img src={HERO} alt="Material de diagnósticos para ar-condicionado" width={1100} height={781} fetchPriority="high" decoding="async" className="mx-auto mt-8 h-auto w-full max-w-xl" />
            <p className="mt-5 text-lg text-muted-foreground">
              Cada defeito em uma página ilustrada: onde olhar, causas mais prováveis, verificações na ordem certa e o próximo passo. Para consultar no celular com o aparelho aberto.
            </p>
            <a href="#planos" className="btn-cta mt-8 w-full md:w-auto">QUERO OS DIAGNÓSTICOS</a>
            <p className="mt-3 text-sm text-muted-foreground">Receba na hora no WhatsApp e no e-mail</p>
          </div>
        </div>
      </section>

      <Section title="Veja o produto por dentro">
        <p className="-mt-6 mb-8 text-center text-muted-foreground">Confira páginas reais do material.</p>
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-5xl px-2 md:px-12">
          <CarouselContent>
            {samples.map((s, i) => (
              <CarouselItem key={s} className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <img src={s} alt={`Página de diagnóstico ${i + 1}`} loading={i < 2 ? "eager" : "lazy"} decoding="async" width={760} height={1139} className="h-auto w-full rounded-xl border bg-card shadow-card" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </Section>

      <Section className="bg-muted" title="O que cada página de diagnóstico traz">
        <div className="grid gap-4 md:grid-cols-2">
          {features.map(([t, d]) => (
            <div key={t} className="flex gap-3 rounded-xl border bg-card p-5"><Check /><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div></div>
          ))}
        </div>
      </Section>

      <Section title="Ideal para você que quer">
        <div className="grid gap-5 md:grid-cols-3">
          {ideal.map(([t, d]) => (
            <div key={t} className="rounded-xl border bg-card p-6">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted" title="Veja o que nossos clientes estão dizendo sobre o Guia de Diagnóstico para Ar-Condicionado">
        <Carousel setApi={setApiDepo} opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-5xl px-2 md:px-12">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={t} className="basis-[75%] sm:basis-1/2 lg:basis-1/3">
                <img src={t} alt={`Depoimento de cliente ${i + 1}`} loading={i < 2 ? "eager" : "lazy"} decoding="async" width={941} height={1672} className="h-auto w-full rounded-xl border bg-card shadow-card" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </Section>

      <Section title="Tudo o que você recebe">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src="/mockups/pacote.webp" alt="Pacote completo" loading="lazy" decoding="async" width={1100} height={626} className="h-auto w-full" />
          <div>
            <p className="mb-4 font-semibold">Diagnósticos organizados por sintoma e sistema:</p>
            <ol className="grid gap-2">
              {blocks.map((b, i) => (
                <li key={b} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm">
                  <span className="font-display font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>{b}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">Material em PDF para o celular, que também pode ser impresso. Acesso imediato e vitalício.</p>
          </div>
        </div>
      </Section>

      <Section title="Receba também quatro materiais complementares">
        <div className="grid gap-4 md:grid-cols-2">
          {bonus.map(([t, d], i) => (
            <div key={t} className="overflow-hidden rounded-xl border bg-card">
              <div className="flex justify-center bg-gradient-to-b from-muted to-card px-8 pb-4 pt-10">
                <div className="relative w-4/5">
                  <div className="absolute inset-0 translate-x-3 translate-y-2 rotate-6 rounded-sm bg-white shadow-md" />
                  <div className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-3 rounded-sm bg-white shadow-md" />
                  <img src={`/mockups/bonus-${i + 1}.webp`} alt={t} loading="lazy" decoding="async" width={700} height={989} style={{ imageRendering: "auto", transform: "translateZ(0)", backfaceVisibility: "hidden" }} className="relative h-auto w-full rounded-sm border border-black/5 bg-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)]" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary">BÔNUS {i + 1}</span>
                <h3 className="mt-1 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted" title="Escolha seu plano">
        <div id="planos" className="mx-auto grid max-w-4xl scroll-mt-8 items-start gap-6 md:grid-cols-2">
          <Plan name="Básico" from="47,90" price="17,90" inst="4x de R$4,48" href={CHECKOUT_BASIC}
            items={["Diagnósticos ilustrados para Split", "Organizados por sintoma e sistema", "PDF para celular e para imprimir", "Acesso imediato e vitalício"]} />
          <Plan featured name="Completo" from="147,90" price="27,90" inst="6x de R$6,32" href={CHECKOUT_FULL}
            items={["Tudo do plano Básico", "Checklist de Atendimento e Registro de Sintomas", "Ferramentas e Instrumentos de Diagnóstico", "Erros de Instalação: Guia de Observação", "Relatório Técnico e Explicação ao Cliente"]} />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">🔒 Compra 100% segura</p>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <img src={IMG2 + "garantia-selo-1784288640730.webp"} alt="Selo de garantia" loading="lazy" decoding="async" width={144} height={144} className="h-auto w-36" />
          <div>
            <h2 className="text-2xl font-bold">Garantia de 30 dias</h2>
            <p className="mt-2 text-muted-foreground">Se o material não for o que você esperava, peça o reembolso. Sem burocracia — o risco é todo nosso.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted" title="Perguntas frequentes">
        <div className="mx-auto max-w-3xl divide-y rounded-xl border bg-card">
          {faq.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                {q}<span className="text-primary">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><a href="#planos" className="btn-cta">QUERO ACESSAR AGORA</a></div>
      </Section>

      <footer className="py-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Arquivo Prático</footer>
    </main>
  );
}

function Plan({ name, from, price, inst, items, href, featured }: { name: string; from: string; price: string; inst: string; items: string[]; href: string; featured?: boolean }) {
  const [trackedHref, setTrackedHref] = useState(href);
  useEffect(() => {
    setTrackedHref(withCheckoutUtms(href, window.location.search));
  }, [href]);
  return (
    <div className={`relative rounded-2xl border bg-card p-7 ${featured ? "border-2 border-primary shadow-card" : ""}`}>
      {featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">MAIS VENDIDO</span>}
      <h3 className="text-center text-xl font-bold">Plano {name}</h3>
      <ul className="mt-5 grid gap-3 text-sm">
        {items.map((i) => <li key={i} className="flex gap-2"><Check />{i}</li>)}
      </ul>
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">de <s>R${from}</s> por</p>
        <p className="font-display text-4xl font-extrabold text-primary">R$ {price}</p>
        <p className="text-sm text-muted-foreground">ou {inst}</p>
      </div>
      <a href={trackedHref} onClick={(event) => {
        event.currentTarget.href = withCheckoutUtms(event.currentTarget.href, window.location.search);
      }} className="btn-cta mt-6 w-full">QUERO O PLANO {name.toUpperCase()}</a>
    </div>
  );
}
