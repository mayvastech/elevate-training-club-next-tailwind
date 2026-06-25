export default function SectionHeading({ eyebrow, title, children, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-lg leading-8 text-white/65">{children}</p>}
    </div>
  );
}
