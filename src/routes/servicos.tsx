import { createFileRoute } from "@tanstack/react-router";
import { Users, BarChart3, FileText, Target, Sparkles, MessageSquare } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Lumen Labs" },
      {
        name: "description",
        content:
          "Conheça os serviços da Lumen Labs: gestão de comunidade, tráfego pago e conteúdo/criativos para escalar sua presença digital.",
      },
      { property: "og:title", content: "Serviços — Lumen Labs" },
      {
        property: "og:description",
        content:
          "Conheça os serviços da Lumen Labs: gestão de comunidade, tráfego pago e conteúdo/criativos para escalar sua presença digital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-site section-padding">
          <div className="max-w-[50ch]">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-ink text-sm font-medium px-4 py-1.5">
              <span className="size-2 rounded-full bg-accent shrink-0" />
              Nossos serviços
            </span>
            <h1 className="mt-6 font-display font-semibold text-ink text-4xl lg:text-5xl leading-tight">
              Três frentes que crescem juntas
            </h1>
            <p className="mt-4 text-base lg:text-lg text-ink/70">
              Cada serviço é pensado para se conectar aos outros. Community gera confiança, tráfego
              gera escala e conteúdo converte a atenção em resultado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceDetailCard
              icon={<Users className="w-6 h-6 text-brand" />}
              iconBg="bg-brand/12"
              title="Gestão de comunidade"
              description="Planejamento editorial, produção de posts, stories, respostas a comentários e DM. Tudo para que sua marca esteja presente e próxima do público."
              items={[
                "Calendário editorial mensal",
                "Posts e stories alinhados à marca",
                "Atendimento e relacionamento",
                "Relatórios de engajamento",
              ]}
            />
            <ServiceDetailCard
              icon={<BarChart3 className="w-6 h-6 text-mint" />}
              iconBg="bg-mint/15"
              title="Tráfego pago"
              description="Campanhas no Meta Ads, Google Ads e TikTok Ads com otimização contínua. Foco em CPL, ROAS e leads que realmente compram."
              items={[
                "Estrutura de campanhas e públicos",
                "Criativos e testes A/B",
                "Otimização semanal",
                "Relatório de métricas claras",
              ]}
            />
            <ServiceDetailCard
              icon={<FileText className="w-6 h-6 text-ink/60" />}
              iconBg="bg-butter/25"
              title="Conteúdo & criativos"
              description="Criação de peças para anúncios e redes sociais, com tom de voz consistente e direção criativa que comunica valor de verdade."
              items={[
                "Copy para anúncios e posts",
                "Direção de arte e identidade",
                "Peças para testes de criativo",
                "Alinhamento com o funil de vendas",
              ]}
            />
            <ServiceDetailCard
              icon={<Target className="w-6 h-6 text-brand" />}
              iconBg="bg-brand/12"
              title="Estratégia digital"
              description="Diagnóstico de canais, posicionamento, definição de persona e planejamento de médio prazo para crescimento sustentável."
              items={[
                "Mapeamento de canais e concorrência",
                "Definição de persona",
                "Plano de 90 dias",
                "Acompanhamento de KPIs",
              ]}
            />
            <ServiceDetailCard
              icon={<Sparkles className="w-6 h-6 text-mint" />}
              iconBg="bg-mint/15"
              title="Produção de conteúdo"
              description="Criação de reels, carrosséis, posts estáticos e materiais visuais que traduzem a essência da marca em alta frequência."
              items={[
                "Design para redes sociais",
                "Edição de reels e shorts",
                "Fotos de produto e lifestyle",
                "Banco de imagens da marca",
              ]}
            />
            <ServiceDetailCard
              icon={<MessageSquare className="w-6 h-6 text-ink/60" />}
              iconBg="bg-butter/25"
              title="Atendimento & vendas"
              description="Fluxo de atendimento, scripts de vendas e qualificação de leads para que sua equipe converta melhor cada oportunidade."
              items={[
                "Fluxo de mensagens no WhatsApp/IG",
                "Scripts de qualificação",
                "Treinamento de equipe",
                "Acompanhamento de conversão",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-brand">
        <div className="container-site section-padding text-center">
          <h2 className="font-display font-semibold text-white text-3xl lg:text-4xl leading-tight max-w-[30ch] mx-auto">
            Quer saber qual serviço faz sentido para você?
          </h2>
          <p className="mt-4 text-white/80 max-w-[50ch] mx-auto">
            Fale com a gente no WhatsApp e receba uma recomendação sem compromisso.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton text="Falar com especialista" />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceDetailCard({
  icon,
  iconBg,
  title,
  description,
  items,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-[min(1vw,20px)] bg-cream p-6 ring-1 ring-black/5">
      <span className={`size-12 rounded-2xl ${iconBg} grid place-items-center shrink-0`}>
        {icon}
      </span>
      <h3 className="mt-4 font-display font-semibold text-ink text-lg">{title}</h3>
      <p className="mt-2 text-sm text-ink/70">{description}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
            <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
