import { createFileRoute } from "@tanstack/react-router";
import { Users, BarChart3, FileText } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ContactForm } from "../components/ContactForm";
import heroShapes from "../assets/hero-shapes.jpg";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import {
  buildUrl,
  COMPANY_NAME,
  KEYWORDS,
  serviceJsonLd,
} from "../lib/seo";

const PAGE_TITLE = `${COMPANY_NAME} — Gestão de Comunidade, Community Manager & Tráfego Pago`;
const PAGE_DESCRIPTION =
  "Escala sua presença digital com gestão de comunidades, community manager dedicado, tráfego pago e anúncios online. Estratégia, conteúdo e resultados para empresas e empreendedores.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: KEYWORDS.home.join(", ") },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: buildUrl("/") },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: buildUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd(
            "Gestão de Comunidade e Tráfego Pago",
            PAGE_DESCRIPTION,
            "/",
          ),
        ),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="container-site section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-ink text-sm font-medium px-4 py-1.5">
                <span className="size-2 rounded-full bg-accent shrink-0" />
                Community manager + tráfego pago
              </span>
              <h1 className="mt-6 font-display font-semibold text-ink text-4xl lg:text-6xl leading-tight max-w-[20ch]">
                Sua presença digital trabalhando a favor do seu faturamento.
              </h1>
              <p className="mt-5 text-base lg:text-lg text-ink/70 max-w-[52ch]">
                Alinhamos estratégia de marketing digital, gestão de comunidades, anúncios online e
                resultados em uma operação contínua. Sem promessa mágica: só método, constância e
                métricas que fazem sentido para o seu negócio.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton text="Chamar no WhatsApp" />
                <WhatsAppButton text="Pedir diagnóstico gratuito" variant="secondary" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={heroShapes}
                alt="Formas abstratas em tons pastel representando estratégia, conteúdo e resultados se conectando"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover rounded-[min(1vw,20px)] bg-brand/10 ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-white">
        <div className="container-site section-padding">
          <div className="max-w-[40ch]">
            <h2 className="font-display font-semibold text-ink text-3xl lg:text-4xl leading-tight">
              O que fazemos por você
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Do atendimento ao resultado, cuidamos da presença e do crescimento do seu negócio —
              em três frentes complementares de marketing digital.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <ServiceCard
              icon={<Users className="w-5 h-5 text-brand" />}
              iconBg="bg-brand/12"
              title="Gestão de comunidades"
              description="Community manager dedicado: conteúdo, bastidores e atendimento que mantêm sua marca próxima e humanizada nas redes sociais, todos os dias."
            />
            <ServiceCard
              icon={<BarChart3 className="w-5 h-5 text-mint" />}
              iconBg="bg-mint/15"
              title="Tráfego pago"
              description="Campanhas de anúncios online no Meta Ads e Google Ads com segmentação, criativos e otimização semanal para gerar leads qualificados a custo previsível."
            />
            <ServiceCard
              icon={<FileText className="w-5 h-5 text-ink/60" />}
              iconBg="bg-butter/25"
              title="Conteúdo & criativos"
              description="Peças de anúncio e posts para redes sociais pensados para converter, alinhados ao tom e à identidade visual da sua marca."
            />
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="bg-cream">
        <div className="container-site section-padding">
          <div className="max-w-[44ch]">
            <h2 className="font-display font-semibold text-ink text-3xl lg:text-4xl leading-tight">
              Como o trabalho se encaixa
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Cada etapa fecha com a anterior, como peças de um quebra-cabeça. Simples de acompanhar,
              difícil de desmontar.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-4 gap-5">
            <StepCard
              number="01"
              numberColor="text-brand"
              title="Diagnóstico"
              description="Mapeamos canais, audiência e metas para definir a estratégia certa de community manager e tráfego pago."
            />
            <StepCard
              number="02"
              numberColor="text-mint"
              title="Produção"
              description="Criamos conteúdo e criativos com calendário editorial e identidade para redes sociais."
            />
            <StepCard
              number="03"
              numberColor="text-accent"
              title="Escala"
              description="Ligamos anúncios online e ajustamos campanhas com base em dados reais de performance."
            />
            <StepCard
              number="04"
              numberColor="text-ink/70"
              title="Resultados"
              description="Relatórios claros e otimização contínua para crescer com consistência no marketing digital."
            />
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="resultados" className="bg-brand">
        <div className="container-site section-padding">
          <div className="max-w-[40ch]">
            <h2 className="font-display font-semibold text-white text-3xl lg:text-4xl leading-tight">
              Resultados de gestão de comunidades e tráfego pago
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            <MetricCard
              value="3,4×"
              description="Mais leads qualificados em média nos primeiros 90 dias de gestão de comunidades e anúncios online."
            />
            <MetricCard
              value="-28%"
              description="Redução no custo por lead com otimização semanal de campanhas de tráfego pago."
            />
            <MetricCard
              value="42"
              description="Marcas acompanhadas de perto pelo nosso time de community manager e mídia."
            />
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <TestimonialCard
              quote="A equipe tratou nossa marca como se fosse a deles. O processo ficou claro e os resultados vieram de forma consistente, sem promessa vazia."
              name="Marina Costa"
              role="CEO, Flor de Sal"
              image={testimonial1}
              imageAlt="Marina Costa, CEO da Flor de Sal, cliente de gestão de comunidades"
            />
            <TestimonialCard
              quote="Passamos de um fluxo instável de clientes para previsibilidade. O tráfego pago finalmente virou parte do planejamento, não uma aposta."
              name="Rafael Nunes"
              role="Fundador, Loja Vetor"
              image={testimonial2}
              imageAlt="Rafael Nunes, fundador da Loja Vetor, cliente de anúncios online"
            />
          </div>
        </div>
      </section>

      {/* CTA / FORM */}
      <section id="contato" className="bg-cream">
        <div className="container-site section-padding">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-[40ch]">
              <h2 className="font-display font-semibold text-ink text-3xl lg:text-4xl leading-tight">
                Vamos conversar sobre o seu próximo passo
              </h2>
              <p className="mt-4 text-base text-ink/70">
                Conte um pouco do seu negócio e retornamos com um diagnóstico inicial de community
                manager e tráfego pago, sem compromisso.
              </p>
              <WhatsAppButton
                text="Prefere WhatsApp? Chame (11) 99999-9999"
                variant="ghost"
                className="mt-6"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  iconBg,
  title,
  description,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[min(1vw,20px)] bg-cream p-6 ring-1 ring-black/5">
      <span className={`size-12 rounded-2xl ${iconBg} grid place-items-center shrink-0`}>
        {icon}
      </span>
      <h3 className="mt-4 font-display font-semibold text-ink text-lg">{title}</h3>
      <p className="mt-2 text-sm text-ink/70">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  numberColor,
  title,
  description,
}: {
  number: string;
  numberColor: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[min(1vw,20px)] bg-white p-6 ring-1 ring-black/5">
      <span className={`font-display font-semibold ${numberColor} text-3xl`}>{number}</span>
      <h3 className="mt-3 font-display font-semibold text-ink text-base">{title}</h3>
      <p className="mt-2 text-sm text-ink/70">{description}</p>
    </div>
  );
}

function MetricCard({ value, description }: { value: string; description: string }) {
  return (
    <div className="rounded-[min(1vw,18px)] bg-white/10 p-6">
      <span className="font-display font-semibold text-butter text-4xl">{value}</span>
      <p className="mt-2 text-sm text-white/80">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  image,
  imageAlt,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <figure className="rounded-[min(1vw,18px)] bg-white p-6 ring-1 ring-black/5">
      <blockquote className="text-base text-ink/80">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <img
          src={image}
          alt={imageAlt}
          width={44}
          height={44}
          loading="lazy"
          className="size-11 rounded-full object-cover bg-brand/15 ring-1 ring-black/5"
        />
        <span className="text-sm">
          <span className="font-semibold text-ink">{name}</span>{" "}
          <span className="text-ink/50">· {role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
