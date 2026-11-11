import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const IMG = "https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/49844e71-60b8-4a59-b028-f7cfed1285be/";
const IMG2 = "https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/d08bb98d-db0f-451f-aa55-124b86c1d482/";
const HERO = IMG + "hero-mockup_hero-1785976042289.webp";
const CHECKOUT_BASIC = "https://pay.kirvano.com/03f6a55e-3583-4147-8971-86045aac043a";
const CHECKOUT_FULL = "https://pay.kirvano.com/29e8355a-ef31-449f-a312-3823f99fcbfd";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+120 Diagnósticos para Ar-Condicionado Split" },
      { name: "description", content: "120 diagnósticos prontos para identificar o defeito do Split antes de trocar qualquer peça." },
      { property: "og:title", content: "+120 Diagnósticos para Ar-Condicionado Split" },
      { property: "og:description", content: "Sintoma, causas, verificações e próximo passo em uma página só." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const samples = ["materiais-el_b3e130f0_e0c545-1785976392534", "materiais-mat_1-1785976153891", "materiais-mat_2-1785976155678", "materiais-mat_3-1785976157359", "materiais-mat_4-1785976159478", "materiais-mat_6d32d53c-1785976162463"];

const features = [
  "Um defeito inteiro em uma página: sintoma, causas prováveis, verificações na ordem e próximo passo.",
  "Organização por sintoma e por sistema, com índice para achar o diagnóstico em poucos toques.",
  "Versão digital para o celular e versão A4 para imprimir.",
  "Download imediato, sem mensalidade e com acesso vitalício.",
];

const ideal = [
  ["Parar de diagnosticar no chute", "Um caminho definido para cada sintoma, em vez de trocar peça até funcionar."],
  ["Saber por onde começar", "Abra no sintoma e já tenha a primeira verificação na frente."],
  ["Confirmar antes de trocar", "Descarte as outras causas antes de condenar placa, capacitor ou compressor."],
  ["Não parar para procurar vídeo", "Resolva a dúvida no celular, em segundos, sem depender de grupo."],
  ["Segurança diante do cliente", "Explique o problema com base em verificação, não em suposição."],
  ["Atender mais rápido", "Menos tentativa e erro, mais espaço na agenda."],
];

const blocks = [
  "Não gela ou gela pouco", "Não liga ou desliga sozinho", "Parte elétrica", "Água e gelo",
  "Ruídos e vibrações", "Comando e controle", "Códigos de erro", "Inverter",
];

const bonus = [
  ["+40 Diagnósticos de Defeitos Menos Frequentes", "bonus-bonus_1_img-1785973977326"],
  ["+30 Diagnósticos de Erros de Instalação", "bonus-bonus_2_img-1785973980105"],
  ["Guia Rápido de Ferramentas para Diagnóstico", "bonus-bonus_3_img-1785973983817"],
  ["Tabela de Pressões e Gases Refrigerantes", "bonus-bonus_4_img-1785973988053"],
  ["Checklist Antes da Troca de Componentes", "bonus-bonus_5_img-1785973993301"],
  ["Erros de Diagnóstico Mais Comuns", "bonus-bonus_6_img-1785973996243"],
];

const faq = [
  ["Serve para inverter ou só convencional?", "Serve para os dois. Há um bloco específico com as particularidades de aparelhos inverter."],
  ["Serve para a marca que eu atendo?", "Sim. O material é organizado por sintoma e sistema, não por marca. A lógica vale para qualquer fabricante."],
  ["Ensina instalação, carga de gás e solda?", "Não. O foco é o diagnóstico: identificar a causa e saber o que verificar antes de trocar componente."],
  ["Sou iniciante, vou conseguir usar?", "Sim. Linguagem direta e cada diagnóstico já vem com a ordem das verificações."],
  ["Já tenho experiência, vai ser básico?", "É material de consulta, usado como checklist para não pular etapa e conferir sintomas raros."],
  ["Preciso de internet no cliente?", "Não. São PDFs que ficam salvos no seu aparelho, e dá para imprimir em A4."],
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
  return (
    <main>
      <div className="bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground md:text-sm">
        Oferta especial disponível por tempo limitado
      </div>

      <section className="bg-hero px-5 pb-16 pt-12 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">+120 diagnósticos · Split</span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">
              Identifique o defeito do Split <span className="text-primary">antes de trocar qualquer peça</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Sintoma, causas prováveis, verificações na ordem certa e próximo passo — tudo em uma página, para consultar com o aparelho aberto.
            </p>
            <a href="#planos" className="btn-cta mt-8 w-full md:w-auto">QUERO OS 120 DIAGNÓSTICOS</a>
            <p className="mt-3 text-sm text-muted-foreground">Receba na hora no WhatsApp e no e-mail</p>
          </div>
          <img src={HERO} alt="Material de diagnósticos para ar-condicionado" className="w-full" />
        </div>
      </section>

      <Section title="Como são os diagnósticos">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {samples.map((s) => (
            <img key={s} src={IMG + s + ".webp"} alt="Exemplo de diagnóstico" loading="lazy" className="w-full rounded-xl border bg-card shadow-card" />
          ))}
        </div>
      </Section>

      <Section className="bg-muted" title="O que cada diagnóstico tem">
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <div key={f} className="flex gap-3 rounded-xl border bg-card p-5"><Check /><p>{f}</p></div>
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

      <Section className="bg-muted" title="Tudo o que você recebe">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src={IMG + "pacote-mockup_pacote-1785976032769.webp"} alt="Pacote completo" loading="lazy" className="w-full" />
          <div>
            <p className="mb-4 font-semibold">8 blocos organizados por sintoma:</p>
            <ol className="grid gap-2">
              {blocks.map((b, i) => (
                <li key={b} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 text-sm">
                  <span className="font-display font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>{b}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">+ índice por sintoma, guia de uso, versão digital e A4, acesso vitalício.</p>
          </div>
        </div>
      </Section>

      <Section title="6 bônus exclusivos">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {bonus.map(([t, img], i) => (
            <div key={t} className="overflow-hidden rounded-xl border bg-card">
              <img src={IMG + img + ".webp"} alt={t} loading="lazy" className="aspect-square w-full object-cover" />
              <div className="p-4">
                <span className="text-xs font-bold text-primary">BÔNUS #{i + 1}</span>
                <h3 className="mt-1 text-sm font-bold">{t}</h3>
                <p className="mt-2 text-xs text-muted-foreground"><s>R$27</s> <b className="text-success">GRÁTIS</b></p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted" title="Escolha seu plano">
        <div id="planos" className="mx-auto grid max-w-4xl scroll-mt-8 items-start gap-6 md:grid-cols-2">
          <Plan name="Básico" from="47,90" price="17,90" inst="4x de R$4,48" href={CHECKOUT_BASIC}
            items={["+120 diagnósticos para Split", "Índice por sintoma e guia de uso", "Versão digital e imprimível", "Acesso imediato e vitalício"]} />
          <Plan featured name="Completo" from="147,90" price="27,90" inst="6x de R$6,32" href={CHECKOUT_FULL}
            items={["Tudo do plano Básico", "Os 6 bônus exclusivos", "Atualizações futuras", "Acesso vitalício"]} />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">🔒 Compra 100% segura</p>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <img src={IMG2 + "garantia-selo-1784288640730.webp"} alt="Selo de garantia" className="w-36" />
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
      <a href={href} className="btn-cta mt-6 w-full">QUERO O PLANO {name.toUpperCase()}</a>
    </div>
  );
}
