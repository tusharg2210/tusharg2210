import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [now, setNow] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();

    const t = setInterval(() => {
      const d = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Kolkata" };
      setNow(new Intl.DateTimeFormat("en-GB", opts).format(d) + " IST");
    }, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-[var(--line)]" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="font-mono text-xs tracking-widest uppercase text-white">
          <span className="text-[var(--volt)]">/</span>PORTFOLIO
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400 hover:text-white link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500" data-testid="nav-clock">
          {now}
        </div>
      </div>
    </motion.header>
  );
}
