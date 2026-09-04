import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "Processo — Lumen Labs" },
      {
        name: "description",
        content:
          "Entenda como a Lumen Labs trabalha: diagnóstico, produção, escala e resultados. Um método claro para crescer com consistência.",
      },
      { property: "og:title", content: "Processo — Lumen Labs" },
      {
        property: "og:description",
        content:
          "Entenda como a Lumen Labs trabalha: diagnóstico, produção, escala e resultados. Um método claro para crescer com consistência.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-site section-padding">
          <div className="max-w-[50ch]">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-ink text-sm font-medium px-4 py-1.5">
              <span className="size-2 rounded-full bg-accent shrink-0" />
              Como trabalhamos
            </span>
            <h1 className="mt-6 font-display font-semibold text-ink text-4xl lg:text-5xl leading-tight">
              Método, constância e transparência
            </h1>
            <p className="mt-4 text-base lg:text-lg text-ink/70">
              Nosso processo foi desenhado para eliminar incerteza. Você sempre sabe o que está
              sendo feito, por quê e qual resultado esperar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-padding">
          <div className="grid gap-6">
            <ProcessStep
              number="01"
              numberColor="text-brand"
              title="Diagnóstico"
              description="Começamos entendendo onde você está. Analisamos seus canais, concorrência, público, funil de vendas e metas. Esse mapeamento define todo o resto."
              details={[
                "Auditoria de redes sociais e anúncios atuais",
                "Entrevista de briefing e alinhamento de metas",
                "Mapeamento de público e concorrência",
                "Definição de indicadores de sucesso",
              ]}
            />
            <ProcessStep
              number="02"
              numberColor="text-mint"
              title="Estratégia e produção"
              description="Criamos o plano editorial, os criativos e a estrutura de campanhas. Tudo alinhado ao tom da marca e aos objetivos de curto prazo."
              details={[
                "Calendário editorial e cronograma de entregas",
                "Produção de conteúdo e peças de anúncio",
                "Estruturação de campanhas e públicos",
                "Aprovação e ajustes com você",
              ]}
            />
            <ProcessStep
              number="03"
              numberColor="text-accent"
              title="Execução e escala"
              description="Colocamos tudo no ar e começamos a rodar. Testamos criativos, ajustamos públicos e otimizamos a verba para o que performa melhor."
              details={[
                "Publicação e ativação de campanhas",
                "Testes de criativo e segmentação",
                "Monitoramento diário de métricas",
                "Reuniões quinzenais de alinhamento",
              ]}
            />
            <ProcessStep
              number="04"
              numberColor="text-ink/70"
              title="Resultados e otimização"
              description="Relatórios claros e decisões baseadas em dados. O que funciona, escala. O que não funciona, é ajustado ou descartado sem perder tempo."
              details={[
                "Relatório semanal de métricas",
                "Análise de CPL, ROAS e conversão",
                "Replanejamento baseado em dados",
                "Escala do que está dando certo",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-site section-padding">
          <div className="rounded-[min(1vw,20px)] bg-brand p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-semibold text-white text-3xl lg:text-4xl leading-tight">
                  Diferenciais que fazem a diferença
                </h2>
                <p className="mt-4 text-white/80">
                  Não somos uma agência que some depois do contrato. Trabalhamos como extensão do
                  seu time, com comunicação direta e foco em resultado.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <DifferentialCard title="Time sênior dedicado" description="O mesmo especialista acompanha do início ao fim." />
                <DifferentialCard title="Relatórios que você entende" description="Métricas traduzidas em decisões, não em planilhas complexas." />
                <DifferentialCard title="Comunidade + performance" description="Tráfego gera leads; relacionamento converte e retém." />
                <DifferentialCard title="Metas realistas" description="Compromisso com o que seu mercado e verba sustentam." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-padding text-center">
          <h2 className="font-display font-semibold text-ink text-3xl lg:text-4xl leading-tight max-w-[30ch] mx-auto">
            Pronto para colocar esse método na sua marca?
          </h2>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton text="Agendar diagnóstico" />
          </div>
        </div>
      </section>
    </>
  );
}

function ProcessStep({
  number,
  numberColor,
  title,
  description,
  details,
}: {
  number: string;
  numberColor: string;
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="rounded-[min(1vw,20px)] bg-cream p-6 md:p-8 ring-1 ring-black/5">
      <div className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
        <span className={`font-display font-semibold ${numberColor} text-5xl`}>{number}</span>
        <div>
          <h3 className="font-display font-semibold text-ink text-2xl">{title}</h3>
          <p className="mt-2 text-ink/70 max-w-[60ch]">{description}</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2">
            {details.map((detail) => (
              <li key={detail} className="flex items-start gap-2 text-sm text-ink/70">
                <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DifferentialCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[min(1vw,18px)] bg-white/10 p-5">
      <h3 className="font-display font-semibold text-white text-lg">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{description}</p>
    </div>
  );
}
