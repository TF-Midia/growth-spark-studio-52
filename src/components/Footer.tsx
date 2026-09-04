export function Footer() {
  return (
    <footer className="bg-cream border-t border-black/5">
      <div className="container-site py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="size-7 rounded-xl bg-brand grid place-items-center font-display font-semibold text-white text-xs shrink-0">
            L
          </span>
          <span className="font-display font-semibold text-ink">TF Mídia</span>
        </div>
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} TF Mídia · Gestão de comunidade & tráfego pago
        </p>
      </div>
    </footer>
  );
}
