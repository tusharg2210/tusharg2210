import "@/App.css";
import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Portrait from "./components/Portrait";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics />
      <SmoothScroll>
        <div className="min-h-screen bg-black text-white antialiased" data-testid="app-root">
          <div className="noise-overlay" aria-hidden />
          <Nav />
          <main>
            <Hero />
            <Portrait />
            <Projects />
            <Experience />
            <Education />
            <Skills />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
