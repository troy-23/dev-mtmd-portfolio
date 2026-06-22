import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  comments: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

// Web3Forms public access key (safe for client-side code). Submissions are
// routed to the account email — the address itself is never exposed here.
// Override locally via a .env file: VITE_WEB3FORMS_ACCESS_KEY=your-key-here
const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "cfde2272-0819-43c3-bfb3-58d06821b041";

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    comments: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.comments.trim()) next.comments = "Please tell me a little about your inquiry.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New inquiry from your portfolio",
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          company_role: form.company,
          message: form.comments,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-background border border-border rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors";

  return (
    <div id="work-with-me" className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* Left: heading + intro */}
      <div>
        <span className="font-mono text-xs text-primary tracking-widest uppercase">
          // get in touch
        </span>
        <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
          Work <span className="text-primary text-glow-cyan">with me</span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-md leading-relaxed text-sm">
          Ready to start a project, or just curious what I can build? Tell me about your
          idea, your business, and your goals — no strings attached.
        </p>
        <p className="text-muted-foreground/70 mt-4 max-w-md leading-relaxed text-xs">
          Include anything that helps me understand your inquiry: thoughts on your brand,
          an existing site you want to improve, or questions about how I work.
        </p>
      </div>

      {/* Right: form */}
      {status === "success" ? (
        <div className="bg-card border border-primary/30 rounded-sm p-8 text-center">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
            Message sent
          </p>
          <p className="text-muted-foreground text-sm">
            Thanks for reaching out — I'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cf-name" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Name <span className="text-secondary">*</span>
              </label>
              <input
                id="cf-name"
                type="text"
                placeholder="First"
                value={form.name}
                onChange={set("name")}
                autoComplete="given-name"
                aria-invalid={!!errors.name}
                className={inputClass}
              />
              {errors.name && <p className="mt-1 font-mono text-xs text-secondary">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="cf-email" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Email <span className="text-secondary">*</span>
              </label>
              <input
                id="cf-email"
                type="email"
                value={form.email}
                onChange={set("email")}
                autoComplete="email"
                aria-invalid={!!errors.email}
                className={inputClass}
              />
              {errors.email && <p className="mt-1 font-mono text-xs text-secondary">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="cf-phone" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Phone
              </label>
              <input
                id="cf-phone"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                autoComplete="tel"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="cf-company" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Company / Role
              </label>
              <input
                id="cf-company"
                type="text"
                value={form.company}
                onChange={set("company")}
                autoComplete="organization"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="cf-comments" className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Comments <span className="text-secondary">*</span>
            </label>
            <textarea
              id="cf-comments"
              rows={5}
              value={form.comments}
              onChange={set("comments")}
              aria-invalid={!!errors.comments}
              className={`${inputClass} resize-none`}
            />
            {errors.comments && <p className="mt-1 font-mono text-xs text-secondary">{errors.comments}</p>}
          </div>

          <p className="font-mono text-[10px] text-muted-foreground/60 tracking-wider">* Required</p>

          {status === "error" && (
            <p className="font-mono text-xs text-secondary">
              Something went wrong sending your message. Please try again in a moment.
            </p>
          )}

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(174 100% 50% / 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {status === "sending" ? "Sending…" : "Submit"}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
