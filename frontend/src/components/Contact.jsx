import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";



export default function Contact() {
  return (
    <section id="contact" data-testid="contact" className="relative py-24 md:py-40 border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-10">
          Contact
        </div>

        <motion.a
          href={`mailto:${profile.email}?subject=Let%27s%20build%20something`}
          data-testid="contact-mega-mailto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="block group"
        >
          <div className="font-display text-[14vw] md:text-[10vw] leading-[0.88] tracking-tighter text-white group-hover:text-[var(--volt)] transition-colors">
            LET'S BUILD
          </div>
          <div className="mt-2 flex items-baseline justify-between border-t border-[var(--line)] pt-6">
            <div className="font-display text-[14vw] md:text-[10vw] leading-[0.88] tracking-tighter italic font-light group-hover:text-[var(--volt)] transition-colors">
              something &nbsp;→
            </div>
            <ArrowUpRight className="hidden md:block text-white group-hover:text-[var(--volt)] transition-colors" size={64} strokeWidth={1} />
          </div>
        </motion.a>

        {/* Info grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-[var(--line)] pt-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">Email</div>
            <a href={`mailto:${profile.email}`} data-testid="contact-email" className="mt-2 block text-white link-underline">
              {profile.email}
            </a>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">Phone</div>
            <div className="mt-2 text-white font-mono">{profile.phone}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">LinkedIn</div>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" data-testid="contact-linkedin" className="mt-2 block text-white link-underline">
              /in/tushargnita
            </a>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">GitHub</div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" data-testid="contact-github" className="mt-2 block text-white link-underline">
              /tusharg2210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
