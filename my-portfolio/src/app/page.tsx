export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1d1d1b]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-5">
          <a href="/" className="text-lg font-semibold uppercase tracking-[0.2em]">
            Chloe Hansen
          </a>
          <nav className="flex gap-5 text-sm">
            <a href="#about" className="hover:text-[#1d5a45]">About</a>
            <a href="#projects" className="hover:text-[#1d5a45]">Projects</a>
            <a href="#experience" className="hover:text-[#1d5a45]">Experience</a>
            <a href="#contact" className="hover:text-[#1d5a45]">Contact</a>
          </nav>
        </header>

        <section className="grid items-center gap-10 pb-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#3d5a4d]">Portfolio</p>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Thoughtful digital experiences for research and new ideas.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#465850]">I’m Chloe, a designer and developer interested in sustainability, product thinking, and building meaningful experiences that connect people and ideas.</p>
            <a href="#projects" className="mt-8 inline-block rounded-full bg-[#1d5a45] px-5 py-3 text-sm font-semibold text-white hover:bg-[#174b37]">View projects</a>
          </div>
          <aside className="rounded-[28px] border border-[#d8d0c8] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">Focus</p>
            <ul className="mt-4 space-y-3 text-sm text-[#40524c]">
              <li>Product and UX design</li><li>Website development</li><li>Sustainability research</li><li>Research and startup websites</li>
            </ul>
          </aside>
        </section>

        <section id="about" className="py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">About</p>
          <h2 className="mt-3 text-3xl font-bold">About me</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40524c]">I’m a multidisciplinary designer and developer focused on creating intuitive, useful experiences. I develop websites for research projects and startups, helping teams present their work and connect with their audiences.</p>
        </section>

        <section id="projects" className="py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">Projects</p>
          <h2 className="mt-3 text-3xl font-bold">Featured work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a href="/impactlens" className="block rounded-2xl border border-[#d8d0c8] bg-white p-6 transition hover:border-[#1d5a45] hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a6d63]">Interactive case study</p>
              <h3 className="mt-3 text-2xl font-bold">ImpactLens</h3>
              <p className="mt-3 text-[#40524c]">Explore and compare a sample ESG company directory with search and filters.</p>
              <span className="mt-5 inline-block font-semibold text-[#1d5a45]">Open the ImpactLens app →</span>
            </a>
            <article className="rounded-2xl border border-[#d8d0c8] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a6d63]">Experience</p>
              <h3 className="mt-3 text-2xl font-bold">Research & startup websites</h3>
              <p className="mt-3 text-[#40524c]">Website development to help research teams and startups share their work clearly.</p>
            </article>
          </div>
        </section>

        <section id="experience" className="py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">Experience</p>
          <h2 className="mt-3 text-3xl font-bold">Website development</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#40524c]">I have experience developing websites for research projects and startups, shaping digital experiences that explain ideas, present work, and reach audiences.</p>
        </section>

        <section id="contact" className="py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4d5f58]">Contact</p>
          <h2 className="mt-3 text-3xl font-bold">Let’s connect</h2>
          <p className="mt-4 text-[#40524c]">Replace this placeholder with your email address.</p>
          <a href="mailto:you@example.com" className="mt-4 inline-block rounded-full border border-[#d8d0c8] bg-white px-5 py-3 text-sm font-semibold">you@example.com</a>
        </section>
      </div>
    </main>
  );
}
