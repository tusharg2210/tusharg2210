import ReactFastMarquee from "react-fast-marquee";
const Marquee = ReactFastMarquee.default || ReactFastMarquee;
import { marqueeWords } from "../data/portfolio";

export default function EditorialMarquee() {
  return (
    <section className="editorial-marquee py-6 md:py-8" data-testid="marquee">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {marqueeWords.concat(marqueeWords).map((w, i) => (
          <span key={i} className="mx-8 md:mx-12 font-display text-xl md:text-3xl tracking-wider text-white flex items-center gap-8 md:gap-12">
            {w}
            <span className="text-[var(--volt)] text-xl md:text-3xl">✱</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
