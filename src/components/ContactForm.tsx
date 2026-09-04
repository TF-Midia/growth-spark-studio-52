import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }).max(100),
  email: z.string().trim().email({ message: "E-mail inválido" }).max(255),
  mensagem: z.string().trim().min(10, { message: "Conte um pouco mais sobre seu objetivo" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ nome: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Olá! Meu nome é ${formData.nome}.\nE-mail: ${formData.email}\n\n${formData.mensagem}`;
    const whatsappHref = `https://wa.me/551153049093?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappHref, "_blank");
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[min(1vw,20px)] bg-white p-6 sm:p-8 ring-1 ring-black/5 text-center">
        <div className="size-12 rounded-full bg-mint/20 grid place-items-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-display font-semibold text-ink text-xl">Mensagem enviada!</h3>
        <p className="mt-2 text-sm text-ink/70">
          Você foi redirecionado para o WhatsApp. Nossa equipe responderá em breve.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[min(1vw,20px)] bg-white p-6 sm:p-8 ring-1 ring-black/5"
      noValidate
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor="nome" className="text-sm font-medium text-ink">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            value={formData.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            placeholder="Seu nome"
            className="mt-1.5 w-full rounded-2xl bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 ring-1 ring-black/5 focus:ring-2 focus:ring-brand focus:outline-none"
          />
          {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="voce@empresa.com"
            className="mt-1.5 w-full rounded-2xl bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 ring-1 ring-black/5 focus:ring-2 focus:ring-brand focus:outline-none"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="msg" className="text-sm font-medium text-ink">
            O que você quer alcançar?
          </label>
          <textarea
            id="msg"
            rows={3}
            value={formData.mensagem}
            onChange={(e) => handleChange("mensagem", e.target.value)}
            placeholder="Me conta sobre seu negócio e objetivo"
            className="mt-1.5 w-full rounded-2xl bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 ring-1 ring-black/5 focus:ring-2 focus:ring-brand focus:outline-none resize-none"
          />
          {errors.mensagem && <p className="mt-1 text-xs text-destructive">{errors.mensagem}</p>}
        </div>

        <button
          type="submit"
          className="rounded-full bg-brand text-white text-sm font-medium py-3 inline-flex items-center justify-center gap-2 hover:bg-brand/90 transition-colors"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
}
