import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "551153049093";
const WHATSAPP_MESSAGE = "Olá! Vi o site e quero saber mais sobre community management e tráfego pago.";

export function Header() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header className="bg-cream">
      <div className="container-site">
        <nav className="flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="size-8 rounded-2xl bg-brand grid place-items-center font-display font-semibold text-white text-sm shrink-0">
              T
            </span>
            <span className="font-display font-semibold text-ink text-lg">TF Mídia</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
            <Link to="/servicos" className="hover:text-ink transition-colors">
              Serviços
            </Link>
            <Link to="/processo" className="hover:text-ink transition-colors">
              Processo
            </Link>
            <Link to="/contato" className="hover:text-ink transition-colors">
              Contato
            </Link>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink text-white text-sm font-medium py-2 pl-2 pr-3 inline-flex items-center gap-2 hover:bg-ink/90 transition-colors"
          >
            <span className="size-4 grid place-items-center rounded-full bg-mint text-ink">
              <MessageCircle className="w-3 h-3 fill-current" />
            </span>
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
