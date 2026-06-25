const desktopLinks = [
  { href: "#coaching", label: "Coaching" },
  { href: "#classes", label: "Classes" },
  { href: "#memberships", label: "Memberships" },
  { href: "#visit", label: "Visit" },
];

const mobileLinks = [
  { href: "#coaching", label: "Coaching" },
  { href: "#memberships", label: "Plans" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="text-base font-black tracking-tight text-white sm:text-lg"
        >
          Elevate Training Club
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-8 text-sm font-bold text-white/65 md:flex">
            {desktopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/15 px-3 py-2 text-xs font-black text-white transition hover:bg-white hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#trial"
            className="rounded-full bg-lime-300 px-4 py-2 text-xs font-black text-black shadow-sm transition hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-lg hover:shadow-lime-300/20 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Free trial
          </a>
        </div>
      </nav>
    </header>
  );
}
