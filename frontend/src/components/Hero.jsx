import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { profile } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";
import ScrambledText from "../utils/scrambledtxt"


const line1 = ["ELECTRICAL", "ENGINEER"];
const line2 = ["WHO", "SHIPS"];
const line3 = ["SOFTWARE."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

const wordUp = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.2], [0.35, 1]);

  return (
    <section id="/" ref={ref} data-testid="hero" className="relative min-h-[100svh] w-full overflow-hidden border-b border-[var(--line)]">
      {/* Parallax background image */}
      <motion.div style={{ y: yImg, opacity: opacityImg }} className="absolute inset-0 -z-0" aria-hidden>
        <img
          src="https://i.pinimg.com/736x/57/3c/13/573c13fd9572c3998749c8119b10a969.jpg"
          alt="fieufbieufgwieuf"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      {/* Grid lines overlay */}
      <motion.div style={{ opacity: opacityImg }} className="absolute inset-0 -z-0" aria-hidden>
        <div className="h-full w-full grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-[var(--line)]" />
          ))}
        </div>
      </motion.div>


      {/* Kinetic hero text */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 pt-22 md:pt-34 pb-40">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-[13vw] md:text-[11vw] leading-[0.86] tracking-tighter"
          data-testid="hero-heading"
        >
          <span className="line-mask">
            <motion.span variants={wordUp} className="block">
              <ScrambledText text={line1.join(" ")} />
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span variants={wordUp} className="block">
              <span className="text-[var(--volt)]">/</span> {line2.join(" ")}
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span variants={wordUp} className="block italic font-light" style={{ fontFamily: "'Cabinet Grotesk', serif" }}>
              <ScrambledText text={line3.join(" ")} />
            </motion.span>
          </span>
        </motion.h1>

        {/* Sub-row */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl"
            data-testid="hero-intro"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 md:col-start-9 flex flex-col gap-3"
          >
            <a
              href="#work"
              data-testid="hero-cta-work"
              className="cta-mega inline-flex items-center justify-between px-6 py-5 font-mono text-sm uppercase tracking-widest"
            >
              <span>See the work</span>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              data-testid="hero-cta-email"
              className="inline-flex items-center justify-between px-6 py-5 font-mono text-sm uppercase tracking-widest border border-[var(--line)] text-white hover:border-[var(--volt)] hover:text-[var(--volt)] transition-colors"
            >
              <span>{profile.email}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.9 }}
        className="absolute bottom-0 left-0 right-0 border-t border-[var(--line)] bg-black/40 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-14 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[var(--volt)] animate-pulse" />
            <span>OPEN TO SDE & RELATED ROLES</span>
          </div>
          <div className="hidden md:block">SCROLL ↓</div>
        </div>
      </motion.div>
    </section>
  );
}
