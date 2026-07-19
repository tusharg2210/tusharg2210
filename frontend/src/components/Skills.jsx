import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" data-testid="skills" className="relative py-24 md:py-40 border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Skills
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-9 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter"
          >
            The instruments<br />
            <span className="italic font-light">on the bench.</span>
          </motion.h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[var(--line)] -mt-px">
          {skills.map((s, i) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="border-b md:border-r border-[var(--line)] p-8 md:p-10 hover:bg-[var(--surface)] transition-colors group"
              data-testid={`skill-group-${s.group.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--volt)]">
                  0{i + 1}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 group-hover:text-white transition-colors">
                  {s.group}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="font-mono text-xs md:text-sm border border-[var(--line)] px-3 py-2 text-zinc-300 group-hover:border-white transition-colors">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
