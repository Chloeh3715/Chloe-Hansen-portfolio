export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1d1d1b]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <header className="mb-16 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-[0.2em] uppercase">
            Chloe Hansen
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-[#1d5a45]">
              About
            </a>
            <a href="#projects" className="hover:text-[#1d5a45]">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#1d5a45]">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#1d5a45]">
              Contact
            </a>
          </nav>
        </header>

        <section className="grid items-center gap-10 pb-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#3d5a4d]">
              Portfolio
            </p>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              I build thoughtful, human-centered digital experiences.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#465850]">
              I’m Chloe, a designer and developer interested in sustainability,
              product thinking, and building meaningful experiences that connect
              people and ideas.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#1d5a45] px-5 py-3 text-sm font-semibold text-white hover:bg-[#174b37]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#d8d0c8] bg-white px-5 py-3 text-sm font-semibold text-[#1d1d1b] hover:border-[#1d5a45]"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d8d0c8] bg-white p-8 shadow-sm">
            <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-[#dfeee8] via-[#cfe2d6] to-[#e7dcc7]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">
              Focus
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[#40524c]">
              <li>• Product design</li>
              <li>• UX strategy</li>
              <li>• Sustainability research</li>
              <li>• Front-end development</li>
            </ul>
          </div>
        </section>

        <section id="about" className="py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">About me</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40524c]">
            I’m a multidisciplinary designer and developer focused on creating
            experiences that feel intuitive, impactful, and grounded in real-world
            needs. My work blends strategy, research, visual design, and building
            digital products that people genuinely enjoy using.
          </p>
        </section>

        <section id="projects" className="py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Featured work</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/impactlens"
              className="block rounded-2xl border border-[#d8d0c8] bg-white p-6 transition hover:border-[#1d5a45]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a6d63]">
                Case Study
              </p>
              <h3 className="mt-3 text-2xl font-bold">ImpactLens</h3>
              <p className="mt-3 text-[#40524c]">
                A sustainability scorecard prototype exploring company ESG data,
                filtering, and comparison.
              </p>
              <span className="mt-5 inline-block font-semibold text-[#1d5a45]">
                Open ImpactLens →
              </span>
            </a>

            <article className="rounded-2xl border border-[#d8d0c8] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a6d63]">
                Research
              </p>
              <h3 className="mt-3 text-2xl font-bold">UX Research</h3>
              <p className="mt-3 text-[#40524c]">
                Investigating how people interpret sustainability data and use digital
                tools to compare organizations.
              </p>
            </article>
          </div>
        </section>

        <section id="experience" className="py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">What I’ve done</h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-[#d8d0c8] bg-white p-6">
              <p className="font-semibold">
                Website Development for Research Projects & Startups
              </p>
              <p className="mt-1 text-[#4f5d57]">
                Developed websites to help research teams and startups present their
                work, explain their ideas, and connect with their audiences.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d8d0c8] bg-white p-6">
              <p className="font-semibold">Sustainability & Digital Projects</p>
              <p className="mt-1 text-[#4f5d57]">
                Hands-on design and research work across product and digital strategy.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Let’s connect</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:you@example.com"
              className="rounded-full border border-[#d8d0c8] bg-white px-5 py-3 text-sm font-semibold text-[#1d1d1b]"
            >
              you@example.com
            </a>
            <a
              href="https://www.linkedin.com"
              className="rounded-full border border-[#d8d0c8] bg-white px-5 py-3 text-sm font-semibold text-[#1d1d1b]"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
