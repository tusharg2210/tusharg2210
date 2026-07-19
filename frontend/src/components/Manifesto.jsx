import { motion } from "framer-motion";
import { manifesto } from "../data/portfolio";

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Manifesto() {
  return (
    <section id="manifesto" data-testid="manifesto" className="relative py-24 md:py-40 border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section heading */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            (Section 01) — About
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-9 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter"
          >
            Four beliefs<br />
            <span className="italic font-light">that keep the code honest.</span>
          </motion.h2>
        </div>

        {/* Chapters */}
        <div className="border-t border-[var(--line)]">
          {manifesto.map((m, i) => (
            <motion.article
              key={m.n}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
              data-testid={`manifesto-chapter-${m.n}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 border-b border-[var(--line)] group hover:bg-[var(--surface)] transition-colors"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-2xl md:text-3xl text-[var(--volt)]">{m.n}.</div>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl md:text-5xl leading-[1] tracking-tighter">{m.title}</h3>
              </div>
              <div className="md:col-span-5 md:col-start-8 text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl">
                {m.body}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
