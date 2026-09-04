import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}

const WHATSAPP_NUMBER = "551153049093";
const DEFAULT_MESSAGE = "Olá! Vi o site e quero saber mais sobre community management e tráfego pago.";

export function WhatsAppButton({
  text = "Chamar no WhatsApp",
  message = DEFAULT_MESSAGE,
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-brand text-white py-3 pl-2 pr-3 hover:bg-brand/90",
    secondary: "bg-white text-ink py-3 px-6 ring-1 ring-black/5 hover:bg-white/70",
    ghost: "text-ink hover:text-brand",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {variant === "primary" && (
        <span className="size-5 grid place-items-center rounded-full bg-white/20 shrink-0">
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
        </span>
      )}
      {variant === "ghost" && (
        <span className="size-5 grid place-items-center rounded-full bg-mint/20 shrink-0">
          <MessageCircle className="w-3.5 h-3.5 text-mint fill-current" />
        </span>
      )}
      {text}
    </a>
  );
}
