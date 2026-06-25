const variants = {
  primary:
    "bg-lime-300 text-black hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-xl hover:shadow-lime-300/20",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
  dark:
    "bg-black text-white hover:-translate-y-0.5 hover:bg-zinc-800",
};

export default function ButtonLink({ href, children, variant = "primary" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
