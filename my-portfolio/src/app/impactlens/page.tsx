"use client";

import { useMemo, useState } from "react";
import { esgCompanies, scoreSourceNote } from "@/data/esgCompanies";

export default function ImpactLensPage() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All sectors");
  const [region, setRegion] = useState("All regions");
  const sectors = useMemo(() => ["All sectors", ...new Set(esgCompanies.map((company) => company.sector))], []);
  const regions = useMemo(() => ["All regions", ...new Set(esgCompanies.map((company) => company.region))], []);
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return esgCompanies.filter((company) =>
      (sector === "All sectors" || company.sector === sector) &&
      (region === "All regions" || company.region === region) &&
      (!term || [company.name, company.sector, company.region].join(" ").toLowerCase().includes(term))
    ).sort((a, b) => b.score - a.score);
  }, [query, sector, region]);
  const [selectedId, setSelectedId] = useState(esgCompanies[0]?.id ?? "");
  const selected = filtered.find((company) => company.id === selectedId) ?? filtered[0] ?? null;

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#1d1d1b]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between border-b border-[#d9d1c6] pb-4">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1d5a45] text-lg font-bold text-white">I</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47635a]">ImpactLens</span>
          </a>
          <a href="/" className="text-sm font-medium hover:text-[#0f7b5c]">Back to portfolio</a>
        </header>

        <section className="mb-10 rounded-[28px] bg-[#e8f0e7] px-6 py-8 sm:px-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#295a48]">Sustainability scorecard</p>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl">Compare companies by ESG score.</h1>
              <p className="mt-4 max-w-2xl leading-7 text-[#40524c]">Search and filter a prototype company directory by name, sector, and region. Scores are project-provided demo data, not verified ratings.</p>
            </div>
            <aside className="rounded-2xl border border-[#cddac9] bg-[#f8faf6] p-5 text-sm leading-6">{scoreSourceNote}</aside>
          </div>
        </section>

        <section>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a6d63]">Directory</p><h2 className="text-3xl font-bold tracking-[-0.05em]">ESG company list</h2></div>
            <p className="text-sm text-[#4f5d57]">{filtered.length} compan{filtered.length === 1 ? "y" : "ies"} shown</p>
          </div>
          <div className="mb-6 grid gap-3 md:grid-cols-[1.5fr_1fr]">
            <label className="rounded-xl border border-[#d8d0c8] bg-white px-3 py-3"><span className="sr-only">Search companies</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search company, sector, or region" className="w-full bg-transparent text-sm outline-none" /></label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-[#4d5f58]">Sector<select value={sector} onChange={(event) => setSector(event.target.value)} className="mt-2 block w-full rounded-xl border border-[#d8d0c8] bg-white px-3 py-3 text-sm font-normal normal-case text-[#1d1d1b]">{sectors.map((value) => <option key={value}>{value}</option>)}</select></label>
              <label className="text-xs font-semibold uppercase tracking-wide text-[#4d5f58]">Region<select value={region} onChange={(event) => setRegion(event.target.value)} className="mt-2 block w-full rounded-xl border border-[#d8d0c8] bg-white px-3 py-3 text-sm font-normal normal-case text-[#1d1d1b]">{regions.map((value) => <option key={value}>{value}</option>)}</select></label>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
            <div className="space-y-3">{filtered.length ? filtered.map((company) => <button key={company.id} type="button" onClick={() => setSelectedId(company.id)} className={`w-full rounded-2xl border p-4 text-left transition ${selected?.id === company.id ? "border-[#1d5a45] bg-[#edf5ef]" : "border-[#d8d0c8] bg-white hover:border-[#8aa89b]"}`}><div className="flex justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d7368]">#{company.rank}</p><h3 className="mt-1 text-xl font-bold">{company.name}</h3><p className="mt-1 text-sm text-[#536560]">{company.sector} · {company.region}</p></div><span className="rounded-full bg-[#1d5a45] px-3 py-1 text-sm font-bold text-white">{company.score.toFixed(2)}</span></div></button>) : <p className="rounded-2xl border border-dashed bg-white p-8 text-center">No matching companies. Try another search or filter.</p>}</div>
            {selected && <article className="rounded-[24px] border border-[#d8d0c8] bg-white p-6 shadow-sm"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4c5e57]">Selected company</p><div className="mt-2 flex flex-wrap items-start justify-between gap-3"><h3 className="text-3xl font-bold">{selected.name}</h3><span className="rounded-full bg-[#dfe8d3] px-3 py-2 text-sm font-bold text-[#1d5a45]">{selected.score.toFixed(2)} / 10</span></div><div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-[#f5f3ee] p-4"><p className="text-xs uppercase tracking-wide">Sector</p><p className="mt-2 font-semibold">{selected.sector}</p></div><div className="rounded-2xl bg-[#f5f3ee] p-4"><p className="text-xs uppercase tracking-wide">Region</p><p className="mt-2 font-semibold">{selected.region}</p></div></div><p className="mt-4 rounded-2xl border bg-[#faf9f6] p-4 text-sm leading-6">{selected.sourceStatus}</p><div className="mt-6 h-3 overflow-hidden rounded-full bg-[#e3e9e6]"><div className="h-full rounded-full bg-[#1d5a45]" style={{ width: `${(selected.score / selected.scoreScale) * 100}%` }} /></div></article>}
          </div>
        </section>
        <footer className="mt-10 border-t border-[#d9d1c6] pt-6"><a href="/" className="text-sm font-semibold text-[#1d5a45] hover:underline">← Return to Chloe’s portfolio</a></footer>
      </div>
    </main>
  );
}
