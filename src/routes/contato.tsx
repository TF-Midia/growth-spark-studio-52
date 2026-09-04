import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { WhatsAppButton } from "../components/WhatsAppButton";
import {
  buildUrl,
  COMPANY_NAME,
  CONTACT_EMAIL,
  KEYWORDS,
  serviceJsonLd,
} from "../lib/seo";

const PAGE_TITLE = `Contato — Community Manager & Tráfego Pago | ${COMPANY_NAME}`;
const PAGE_DESCRIPTION =
  "Entre em contato com a TF Mídia. Preencha o formulário ou fale direto pelo WhatsApp para receber um diagnóstico gratuito de gestão de comunidades e anúncios online.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { name: "keywords", content: KEYWORDS.contact.join(", ") },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: buildUrl("/contato") },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: buildUrl("/contato") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd(
            "Consultoria de Gestão de Comunidades e Tráfego Pago",
            PAGE_DESCRIPTION,
            "/contato",
          ),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-site section-padding">
          <div className="max-w-[50ch]">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-ink text-sm font-medium px-4 py-1.5">
              <span className="size-2 rounded-full bg-accent shrink-0" />
              Fale com a gente
            </span>
            <h1 className="mt-6 font-display font-semibold text-ink text-4xl lg:text-5xl leading-tight">
              Vamos desenhar seu próximo trimestre
            </h1>
            <p className="mt-4 text-base lg:text-lg text-ink/70">
              Conte sobre seu negócio e devolvemos um diagnóstico inicial de community manager e
              tráfego pago em até 1 dia útil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site section-padding">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <div className="space-y-6">
              <ContactInfoCard
                icon={<MessageCircle className="w-5 h-5 text-mint" />}
                title="WhatsApp"
                description="Resposta mais rápida para dúvidas e diagnósticos de gestão de comunidades e anúncios online."
                action={<WhatsAppButton text="Chamar no WhatsApp" variant="ghost" className="px-0" />}
              />
              <ContactInfoCard
                icon={<Mail className="w-5 h-5 text-brand" />}
                title="E-mail"
                description="Envie propostas, briefings ou dúvidas detalhadas sobre marketing digital."
                action={
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm font-medium text-ink hover:text-brand transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                }
              />
              <ContactInfoCard
                icon={<Clock className="w-5 h-5 text-accent" />}
                title="Horário de atendimento"
                description="Segunda a sexta, das 9h às 18h (horário de Brasília)."
              />
              <ContactInfoCard
                icon={<MapPin className="w-5 h-5 text-ink/60" />}
                title="Atendimento remoto"
                description="Atendemos marcas de todo o Brasil com reuniões por videochamada."
              />
            </div>

            <div>
              <h2 className="font-display font-semibold text-ink text-2xl mb-6">
                Envie uma mensagem
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand">
        <div className="container-site section-padding text-center">
          <h2 className="font-display font-semibold text-white text-3xl lg:text-4xl leading-tight max-w-[35ch] mx-auto">
            Prefere uma conversa direta?
          </h2>
          <p className="mt-4 text-white/80 max-w-[50ch] mx-auto">
            Clique no botão abaixo e fale com um especialista em gestão de comunidades e tráfego
            pago no WhatsApp agora mesmo.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton text="Falar com especialista" />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoCard({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-[min(1vw,20px)] bg-cream p-6 ring-1 ring-black/5">
      <div className="flex items-start gap-4">
        <span className="size-10 rounded-xl bg-white grid place-items-center shrink-0 ring-1 ring-black/5">
          {icon}
        </span>
        <div>
          <h3 className="font-display font-semibold text-ink text-base">{title}</h3>
          <p className="mt-1 text-sm text-ink/70">{description}</p>
          {action && <div className="mt-3">{action}</div>}
        </div>
      </div>
    </div>
  );
}
