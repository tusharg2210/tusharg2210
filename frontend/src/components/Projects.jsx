import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" data-testid="projects" className="relative py-24 md:py-40 border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Projects
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-9 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter"
          >
            Selected<br />
            <span className="italic font-light">projects — spec to ship.</span>
          </motion.h2>
        </div>

        <div className="border-t border-[var(--line)]">
          {projects.map((p, i) => (
            <motion.article
              key={p.idx}
              data-testid={`project-${p.idx}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b border-[var(--line)] group"
            >
              {/* Index + title */}
              <div className="md:col-span-4">
                <div className="font-mono text-xs text-[var(--volt)] mb-4">{p.idx}</div>
                <h3 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tighter">
                  {p.name}
                </h3>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {p.kind}
                </div>
              </div>

              {/* Image frame — clickable → live */}
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`project-${p.idx}-live-image`}
                className="md:col-span-5 block"
                aria-label={`Open ${p.name} live site`}
              >
                <div className="frame aspect-[16/10] relative">
                  <img src={p.image} alt={`${p.name} preview`} className="w-full h-full object-cover object-top" loading="lazy" />
                  <div className="absolute top-3 left-3 z-[2] font-mono text-[10px] uppercase tracking-[0.22em] bg-black/70 backdrop-blur px-2 py-1 text-white border border-white/20">
                    ● Live · {new URL(p.live).host}
                  </div>
                </div>
              </a>

              {/* Body + stack + actions */}
              <div className="md:col-span-3 flex flex-col justify-between">
                <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{p.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] uppercase tracking-widest border border-[var(--line)] px-2 py-1 text-zinc-400">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-${p.idx}-live`}
                    className="inline-flex items-center justify-between gap-2 border border-[var(--line)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white hover:border-[var(--volt)] hover:text-[var(--volt)] transition-colors"
                  >
                    <span className="flex items-center gap-2"><ExternalLink size={13} strokeWidth={1.5} /> Live site</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-${p.idx}-repo`}
                    className="inline-flex items-center justify-between gap-2 border border-[var(--line)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white hover:border-[var(--volt)] hover:text-[var(--volt)] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Source · GitHub
                    </span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
