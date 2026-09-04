// SEO helpers for TF Mídia
// Replace this with the final public domain when the site is published.
export const SITE_ORIGIN = "https://id-preview--dcbc5600-9c1e-4df6-bd50-4554017c36a9.lovable.app";

export const COMPANY_NAME = "TF Mídia";
export const COMPANY_TAGLINE = "Gestão de Comunidade & Tráfego Pago";
export const COMPANY_DESCRIPTION =
  "Escala sua presença digital com gestão de comunidades, community manager dedicado, tráfego pago, anúncios online e marketing digital para empresas e empreendedores.";

export const WHATSAPP_NUMBER = "5511999999999";
export const CONTACT_EMAIL = "ola@tfmidia.com.br";

export const KEYWORDS = {
  home: [
    "gestão de comunidades",
    "community manager",
    "tráfego pago",
    "anúncios online",
    "gestão de redes sociais",
    "marketing digital",
    "agência de tráfego pago",
    "community management",
  ],
  services: [
    "gestão de comunidades",
    "community manager",
    "tráfego pago",
    "anúncios online",
    "gestão de redes sociais",
    "marketing digital",
    "criativos para anúncios",
    "campanhas meta ads",
    "google ads",
  ],
  process: [
    "processo de marketing digital",
    "metodologia de tráfego pago",
    "gestão de comunidades profissional",
    "community manager",
    "anúncios online",
    "otimização de campanhas",
  ],
  contact: [
    "contato community manager",
    "agência de tráfego pago",
    "consultoria marketing digital",
    "gestão de redes sociais",
    "diagnóstico gratuito marketing",
  ],
};

export function buildUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${cleanPath}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: "TF Mídia Marketing Digital",
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/favicon.ico`,
    description: COMPANY_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "sales",
      availableLanguage: ["Portuguese"],
      areaServed: "BR",
    },
    sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
  };
}

export function serviceJsonLd(
  serviceName: string,
  description: string,
  urlPath: string,
  areaServed = "BR",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_ORIGIN,
    },
    description,
    url: buildUrl(urlPath),
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    audience: {
      "@type": "Audience",
      audienceType: "empresas e empreendedores",
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: SITE_ORIGIN,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
