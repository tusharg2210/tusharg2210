import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" data-testid="achievements" className="relative py-24 md:py-40 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Achievements
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-9 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter"
          >
            Ratings, ranks,<br />
            <span className="italic font-light">measurements.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[var(--line)] -mt-px">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border-b lg:border-r border-[var(--line)] p-10 md:p-12 hover:bg-black transition-colors group"
              data-testid={`achievement-${i}`}
              onClick={() => window.open(a.link, "_blank")}
              style={{ cursor: a.link ? "pointer" : "default" }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-6">
                0{i + 1} /// METRIC
              </div>
              <div className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter group-hover:text-[var(--volt)] transition-colors">
                {a.big}
              </div>
              <div className="mt-6 text-zinc-300 text-sm md:text-base">{a.label}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                {a.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
