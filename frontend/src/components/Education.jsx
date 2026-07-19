import { motion } from "framer-motion";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" data-testid="education" className="relative py-24 md:py-40 border-b border-[var(--line)] bg-black">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Education
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-9 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter"
          >
            Academic<br />
            <span className="italic font-light">foundation & training.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="border border-[var(--line)] p-8 hover:border-[var(--volt)] transition-colors"
              data-testid={`education-${i}`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                {ed.period}
              </div>
              <h4 className="mt-3 font-display text-2xl md:text-3xl leading-tight tracking-tighter">
                {ed.school}
              </h4>
              <div className="mt-2 text-zinc-400">{ed.degree}</div>
              <div className="mt-4 font-mono text-sm text-[var(--volt)]">{ed.score}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
