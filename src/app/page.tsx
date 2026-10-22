
"use client";

import { useState, type FormEvent } from "react";

const skills = [
  "Agentic AI",
  "AI Automation",
  "AI Agents",
  "Chatbot Development",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Git & GitHub",
  "API Integration",
  "Prompt Engineering",
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "A responsive personal website showcasing my profile, skills, learning journey, and work in application development.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Web Development",
    link: "https://github.com/HanzlahDanish",
  },
  {
    number: "02",
    title: "AI Agent Experiments",
    description:
      "Exploring how AI agents can interpret instructions, use tools, and assist with practical digital tasks and workflows.",
    tags: ["Agentic AI", "Automation", "AI Tools"],
    status: "Learning",
    link: "https://github.com/HanzlahDanish",
  },
  {
    number: "03",
    title: "AI-Powered Applications",
    description:
      "Practising modern application development and exploring ways to integrate AI capabilities into useful digital products.",
    tags: ["React", "APIs", "Web Apps"],
    status: "In Progress",
    link: "https://github.com/HanzlahDanish",
  },
];

const emailAddress = "hanzlahdanish25@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d19] text-slate-100">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-[35rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d19]/90 backdrop-blur-xl">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-xl font-black tracking-tight"
            aria-label="Hanzlah Danish home"
          >
            H<span className="text-blue-400">D</span>
            <span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Let&apos;s Connect
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          {menuOpen && (
            <div className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-white/10 bg-[#080d19] px-6 py-6 text-sm md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
      >
        <div className="order-2 lg:order-1">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Learning, building & creating with AI
          </div>

          <p className="mb-3 text-lg font-medium text-slate-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Hanzlah
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Danish.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
            Aspiring Agentic AI Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m exploring AI agents, intelligent automation, and modern
            application development. My goal is to turn ideas into useful
            digital experiences and practical AI-powered solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore My Work <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-blue-400/50 hover:text-blue-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <a
              href="https://github.com/HanzlahDanish"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              ↗ GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hanzlahdanish"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              ↗ LinkedIn
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>Based in Pakistan</span>
          </div>
        </div>

        {/* Professional photo */}
        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-4 shadow-2xl shadow-blue-950/30">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-800">
              <img
                src="/profile.png"
                alt="Professional portrait of Hanzlah Danish"
                className="aspect-[4/5] w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d19]/95 via-[#080d19]/50 to-transparent px-6 pb-6 pt-20">
                <p className="text-xl font-bold text-white">
                  Hanzlah Danish
                </p>
                <p className="mt-1 text-sm text-blue-300">
                  AI · Automation · Development
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-5">
              <div>
                <p className="text-xs text-slate-500">CURRENT FOCUS</p>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  Agentic AI & Applications
                </p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-300">
                ✳
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-10 hidden rounded-xl border border-white/10 bg-[#111a2b] px-4 py-3 shadow-xl sm:block">
            <p className="text-xs text-slate-400">Always exploring</p>
            <p className="mt-1 text-sm font-semibold text-cyan-300">
              What&apos;s possible with AI?
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative border-y border-white/[0.06] bg-white/[0.02]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Curious mind.
              <br />
              <span className="text-slate-500">Practical builder.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              I&apos;m building my skills at the intersection of artificial
              intelligence and software development. I&apos;m especially
              interested in how AI agents can use tools, support workflows,
              and help solve practical problems.
            </p>
            <p>
              My current learning journey includes AI automation, chatbot
              development, modern web technologies, and application building.
              I believe in learning by doing, sharing what I build, and
              improving through every project.
            </p>
            <p>
              I&apos;m open to connecting with developers, AI enthusiasts,
              mentors, and people exploring useful AI-powered products.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Skills & Technologies
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tools I&apos;m learning and using
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A growing toolkit for building modern applications and exploring
            practical AI solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
            >
              <span className="mr-2 text-blue-400">✦</span>
              {skill}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          My experience varies by technology as I continue learning and
          practising through projects.
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative border-y border-white/[0.06] bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Selected Work
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Projects & experiments
              </h2>
            </div>

            <a
              href="https://github.com/HanzlahDanish"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-300 transition hover:text-cyan-300"
            >
              View GitHub profile ↗
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-2xl border border-white/[0.09] bg-[#0c1322] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-950/20"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg font-bold text-blue-300">
                    {project.number}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold transition group-hover:text-blue-300">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-t border-white/[0.08] pt-5 text-sm font-semibold text-blue-300 transition hover:text-cyan-300"
                >
                  Explore on GitHub <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500">
            These cards are starter descriptions. Update them with your actual
            project details and specific repository links as your work grows.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Have an idea?
              <br />
              <span className="text-slate-500">Let&apos;s connect.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              Have an interesting AI project, collaboration idea, or learning
              opportunity? Send me a message. I&apos;d be happy to connect.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 text-slate-300 transition hover:text-blue-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
                  @
                </span>
                <span>
                  <span className="block text-xs text-slate-500">EMAIL</span>
                  <span className="mt-1 block text-sm">{emailAddress}</span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/hanzlahdanish"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-300 transition hover:text-blue-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
                  in
                </span>
                <span>
                  <span className="block text-xs text-slate-500">LINKEDIN</span>
                  <span className="mt-1 block text-sm">
                    Connect professionally
                  </span>
                </span>
              </a>

              <a
                href="https://github.com/HanzlahDanish"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-300 transition hover:text-blue-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
                  {"</>"}
                </span>
                <span>
                  <span className="block text-xs text-slate-500">GITHUB</span>
                  <span className="mt-1 block text-sm">Explore my code</span>
                </span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold">Send a message</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Complete the form to prepare an email in your default email app.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#080d19] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Prepare Email <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="text-lg font-black tracking-tight">
            H<span className="text-blue-400">D</span>
            <span className="text-blue-400">.</span>
          </a>

          <p className="text-slate-500">
            Learning today. Building for tomorrow.
          </p>

          <div className="flex gap-5 text-slate-400">
            <a
              href="https://github.com/HanzlahDanish"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hanzlahdanish"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.05] py-4 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Hanzlah Danish. Built with Next.js and Tailwind CSS.
        </div>
      </footer>
    </main>
  );
}
