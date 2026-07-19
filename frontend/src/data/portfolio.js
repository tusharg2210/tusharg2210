// Portfolio data — Tushar Gupta
export const profile = {
  name: "Tushar Gupta",
  role: "Electrical Engineer × Software Developer",
  tagline: "Building scalable software with clean code and thoughtful design.",
  location: "NIT Agartala · India",
  email: "tushargnita@gmail.com",
  phone: "+91-9897031292",
  linkedin: "https://www.linkedin.com/in/tushargnita/",
  github: "https://github.com/tusharg2210",
  leetcode: "https://leetcode.com/tusharg2210",
  intro:
    "I'm Tushar Gupta, a 4th year B.Tech student at NIT Agartala with experience in full-stack development, AI benchmarking, and building scalable web applications. I'm currently seeking opportunities to contribute, learn, and grow as a software engineer.",
};

export const manifesto = [
  {
    n: "01",
    title: "Signal over noise.",
    body:
      "I do not ship features; I ship decisions. Every commit is a hypothesis, every deploy a measurement. I strip the abstract until it draws current.",
  },
  {
    n: "02",
    title: "Systems, not scripts.",
    body:
      "From RBAC architectures serving 10k+ users to AI benchmarking pipelines that killed 90% of manual evaluation — I build the graph, not the leaf.",
  },
  {
    n: "03",
    title: "Numbers keep me honest.",
    body:
      "1913 on LeetCode. 1351 on Codeforces. Top 4% at Adobe India Hackathon. I compete because rating is proof that the algorithm actually ran.",
  },
  {
    n: "04",
    title: "Hardware is the source of truth.",
    body:
      "Electrical engineering taught me that the abstraction eventually meets the transistor. That discipline is what I carry into every line of code.",
  },
];

export const experience = [
  {
    company: "Filo Edtech Pvt. Ltd.",
    role: "Intern Developer",
    location: "Gurugram, Haryana",
    period: "May 2026 — Jun 2026",
    bullets: [
      "Built an AI benchmarking pipeline evaluating 6 LLMs and 3 agents against 192 NCERT Exemplar Physics questions.",
      "Engineered Python + SQL pipelines for dataset extraction, preprocessing, image download and cleaning.",
      "Automated response collection from ChatGPT, Gemini and Filo via a Playwright crawler — 90%+ reduction in manual evaluation.",
      "Produced comparative reports on accuracy, latency, token usage and inference cost for internal model selection.",
    ],
  },
  {
    company: "GlowApps Pvt. Ltd. — Bharat Jagriti",
    role: "SDE Intern",
    location: "Remote",
    period: "Feb 2026 — Mar 2026",
    bullets: [
      "Built a Super Admin Dashboard in React + Tailwind with 100% cross-device consistency; 40% faster page load through frontend perf work.",
      "Architected Role-Based Access Control (RBAC) with secure nested routing across 10,000+ users.",
      "Diagnosed and resolved 15+ production bugs — improved stability and cut user-reported issues.",
    ],
  },
  {
    company: "Google Developer Student Club, NIT Agartala",
    role: "Mobile Dev Team Member",
    location: "Agartala",
    period: "Aug 2024 — Jan 2025",
    bullets: [
      "Led SwiftUI workshops for 10+ students; improved their app development and coding proficiency.",
    ],
  },
];

export const projects = [
  {
    idx: "P/01",
    name: "Cravr",
    kind: "Full-stack Food Delivery",
    stack: ["MongoDB", "Express", "React", "Node", "REST"],
    body:
      "A scalable MERN food-delivery platform with 20+ REST endpoints, JWT auth and a configurable loyalty engine. Integrates OpenCage Geocoding for location-aware discovery — a 40% lift in search relevance.",
    image: "/shots/cravr.png",
    live: "https://cravr.vercel.app/",
    repo: "https://github.com/tusharg2210/Cravr",
  },
  {
    idx: "P/02",
    name: "NoteNexus",
    kind: "Collaborative Academic Hub",
    stack: ["React", "Firebase RTDB", "Cloudinary"],
    body:
      "Dynamic filtering across 1,000+ resources — colleges, courses, semesters. Google OAuth 2.0, bookmarks, dark mode and Framer Motion micro-interactions lifted engagement by 30%.",
    image: "/shots/notenexus.png",
    live: "https://notenexus-five.vercel.app/",
    repo: "https://github.com/tusharg2210/NoteNexus",
  },
  {
    idx: "P/03",
    name: "Newsly",
    kind: "Modern News Aggregator",
    stack: ["React", "Vite", "Tailwind", "Node"],
    body:
      "A responsive, mobile-first aggregator surfacing 1,000+ daily articles with category filters. Backed by an Express proxy over NewsAPI with rate limiting — 40% fewer API failures at 1,000+ daily reqs.",
    image: "/shots/newsly.png",
    live: "https://newsly-lime.vercel.app/",
    repo: "https://github.com/tusharg2210/Newsly",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python", "Go", "SQL", "C", "HTML"],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Angular",
      "Zustand",
      "Tailwind CSS",
      "REST",
      "GraphQL",
      "Framer-Motion",
      "C++ STL",
    ],
  },
  {
    group: "Databases",
    items: ["MySQL", "Firebase RTDB", "MongoDB Atlas"],
  },
  {
    group: "AI / LLM",
    items: [
      "Prompt Engineering",
      "LLM Evaluation",
      "OpenAI API",
      "Gemini API",
      "Claude API",
      "Benchmarking",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Cloudinary",
      "Firebase",
      "AWS",
    ],
  },
  {
    group: "Concepts",
    items: ["DSA", "System Design (HLD)", "OOP", "JWT", "Operating Systems"],
  },
];

export const achievements = [
  { big: "1913", label: "LeetCode · Knight · Top 5% globally", sub: "355+ problems solved", link: "https://leetcode.com/tusharg2210" },
  { big: "1351", label: "Codeforces · Pupil", sub: "120+ problems solved", link: "https://codeforces.com/profile/tusharg2210" },
  { big: "Top 4%", label: "Adobe India Hackathon 2025 R1", sub: "100,000+ teams · team BitBuddies", link: "https://drive.google.com/file/d/1y-36t61EJlGtZ6SgqzIx2QDvRVGQIP8E/view" },
  { big: "Top 1500", label: "Google Big Code 2026", sub: "Global participation", link: "" },
  { big: "Top 12%", label: "Amazon HackOn 2025 R1", sub: "15,000+ teams · team Bitbloom", link: "" },
  { big: "Top 18%", label: "GSSOC'25 Open Source", sub: "10+ PRs merged across 4+ projects", link: "https://gssoc-tracker.netlify.app/dashboard/tusharg2210" },
  { big: "2200", label: "TCS CODEVITA SEASON XIII", sub: "Global participant", link: "https://drive.google.com/file/d/1PQCymYJoxLBtPgyrN-TwQ2JOuCBOxLPC/view" },
  { big: "2592", label: "META HACKER CUP 2025", sub: "ROUND 1", link: "https://drive.google.com/file/d/12-IB2Up1DygEXhltC97IsXuQYzit89_p/view" },
];

export const education = [
  {
    school: "National Institute of Technology, Agartala",
    degree: "B.Tech · Electrical Engineering",
    period: "Aug 2023 — May 2027",
    score: "CGPA 8.21",
  },
  {
    school: "Jawahar Navodaya Vidyalaya, Shahjahanpur",
    degree: "Senior Secondary (XII)",
    period: "Apr 2021 — May 2022",
    score: "90.2%",
  },
];

export const marqueeWords = [
  "NODE",
  "REACT",
  "TAILWIND",
  "MERN",
  "DSA",
  "SYSTEMS",
  "COMPETITION",
  "BENCHMARKS",
  "SHIP",
  "SCALE"
];
