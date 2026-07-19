import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import DeveloperSVG from "../assets/Developer.svg";

export default function Experience() {
  return (
    <section id="work" data-testid="work" className="relative py-24 md:py-40 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left column: Timeline Content */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Work Experience
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-9 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter"
            >
              Where I've<br />
              <span className="italic font-light">put current through wires.</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-[var(--line)] pl-6 md:pl-12">
            {experience.map((e, i) => (
              <motion.div
                key={e.company + i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative pb-14 md:pb-20"
                data-testid={`experience-${i}`}
              >
                <span className="absolute -left-[29px] md:-left-[53px] top-1 w-3 h-3 bg-[var(--volt)]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    {e.period} · {e.location}
                  </div>
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-5xl leading-[1] tracking-tighter">
                  {e.role}
                </h3>
                <div className="mt-2 text-zinc-400 font-body text-base md:text-lg">@ {e.company}</div>
                <ul className="mt-6 space-y-3 max-w-3xl">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-zinc-300 text-sm md:text-base leading-relaxed">
                      <span className="font-mono text-[var(--volt)] mt-1">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column: Sticky Centered SVG */}
        <div className="hidden lg:block lg:col-span-4 relative self-stretch">
          <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center">
            <img
              src={DeveloperSVG}
              alt="Developer Illustration"
              className="w-full max-w-screen/3 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
