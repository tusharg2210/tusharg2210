import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "../data/portfolio";
import ProfileIMG from "../assets/Profile_IMG.jpeg";

export default function Portrait() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" data-testid="about" ref={ref} className="relative py-24 md:py-40 border-b border-[var(--line)] overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* LEFT column — portrait */}
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-6">
              About Me
            </div>
            <div className="relative frame aspect-[4/5] max-w-[520px]">
              <motion.img
                style={{ y }}
                src={ProfileIMG}
                alt="Tushar Gupta portrait"
                className="w-full h-[112%] object-cover object-center"
                loading="lazy"
                data-testid="portrait-image"
              />
              {/* Overlay labels */}
              <div className="absolute bottom-3 right-3 z-[2] font-mono text-[10px] uppercase tracking-[0.22em] bg-[var(--volt)] px-2 py-1 text-black">
                TUSHAR · GUPTA
              </div>
            </div>
          </div>

          {/* RIGHT column — bio */}
          <div className="md:col-span-6 md:col-start-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tighter"
            >
              I read circuits<br />
              <span className="italic font-light">and engineer software.</span>
            </motion.h2>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Based in</div>
                <div className="mt-2 text-white">{profile.location}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Focus</div>
                <div className="mt-2 text-white">Software Development & Related Roles</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Discipline</div>
                <div className="mt-2 text-white">B.Tech Electrical Engineering · NIT Agartala</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Current CGPA</div>
                <div className="mt-2 text-[var(--volt)] font-mono">8.21</div>
              </div>
            </div>

            <p className="mt-10 text-zinc-300 leading-relaxed text-base md:text-lg max-w-xl">
              I grew up learning the language of voltage and load, and picked up JavaScript, C++ and SQL along the way.
              Today I split my time between competitive programming (LeetCode Knight, Codeforces Pupil), building MERN
              products, and stress-testing LLMs against real curriculum data. The through-line is the same:
              <span className="text-white"> spec, build, measure, ship.</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="portrait-github"
                className="inline-flex items-center gap-2 border border-[var(--line)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white hover:border-[var(--volt)] hover:text-[var(--volt)] transition-colors"
              >
                GitHub · /tusharg2210
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="portrait-linkedin"
                className="inline-flex items-center gap-2 border border-[var(--line)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white hover:border-[var(--volt)] hover:text-[var(--volt)] transition-colors"
              >
                LinkedIn · /in/tushargnita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
