"use client";

import { useMemo, useState } from "react";
import { esgCompanies, scoreSourceNote } from "@/data/esgCompanies";

export default function ImpactLensPage() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All sectors");
  const [region, setRegion] = useState("All regions");

  const sectorOptions = useMemo(
    () => ["All sectors", ...new Set(esgCompanies.map((company) => company.sector))],
    [],
  );

  const regionOptions = useMemo(
    () => ["All regions", ...new Set(esgCompanies.map((company) => company.region))],
    [],
  );

  const filteredCompanies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return esgCompanies
      .filter((company) => {
        const matchesSector = sector === "All sectors" || company.sector === sector;
        const matchesRegion = region === "All regions" || company.region === region;
        const matchesQuery =
          normalizedQuery.length === 0 ||
          [company.name, company.sector, company.region].join(" ").toLowerCase().includes(normalizedQuery);

        return matchesSector && matchesRegion && matchesQuery;
      })
      .sort((a, b) => b.score - a.score);
  }, [query, sector, region]);

  const [selectedId, setSelectedId] = useState(filteredCompanies[0]?.id ?? "");

  const selectedCompany =
    filteredCompanies.find((company) => company.id === selectedId) ??
    filteredCompanies[0] ??
    null;

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#1d1d1b]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between border-b border-[#d9d1c6] pb-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1d5a45] text-lg font-bold text-white">
              I
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47635a]">
                ImpactLens
              </div>
            </div>
          </div>

          <a
            href="/"
            className="text-sm font-medium text-[#1d1d1b] hover:text-[#0f7b5c]"
          >
            Back to portfolio
          </a>
        </header>

        <section className="mb-10 rounded-[28px] bg-[#e8f0e7] px-6 py-8 sm:px-8 lg:px-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#295a48]">
            Sustainability scorecard
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-black tracking-[-0.06em] text-[#1c1c1a] sm:text-5xl lg:text-6xl">
                Compare major companies by ESG score.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#40524c]">
                Explore companies across sectors and regions using a score-based
                dashboard. This dashboard is designed for presentation and analysis
                and clearly labels the data as user-provided and not independently verified.
              </p>
            </div>

            <div className="rounded-2xl border border-[#cddac9] bg-[#f8faf6] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4a6a5d]">
                Data note
              </p>
              <p className="mt-2 text-sm leading-6 text-[#2d3a35]">
                {scoreSourceNote}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a6d63]">
                Directory
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.05em]">
                ESG company list
              </h2>
            </div>

            <div className="text-sm text-[#4f5d57]">
              {filteredCompanies.length} compan{filteredCompanies.length === 1 ? "y" : "ies"} shown
            </div>
          </div>

          <div className="mb-6 grid gap-3 md:grid-cols-[1.5fr_1fr]">
            <label className="flex items-center gap-3 rounded-xl border border-[#d8d0c8] bg-white px-3 py-3">
              <span className="text-lg text-[#446b5a]">⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search company, sector, or region"
                className="w-full border-0 bg-transparent text-sm text-[#1d1d1b] outline-none placeholder:text-[#7e7a74]"
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4d5f58]">
                  Sector
                </span>
                <select
                  value={sector}
                  onChange={(event) => setSector(event.target.value)}
                  className="rounded-xl border border-[#d8d0c8] bg-white px-3 py-3 text-sm text-[#1d1d1b] outline-none"
                >
                  {sectorOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4d5f58]">
                  Region
                </span>
                <select
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                  className="rounded-xl border border-[#d8d0c8] bg-white px-3 py-3 text-sm text-[#1d1d1b] outline-none"
                >
                  {regionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
            <div className="space-y-3">
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company) => {
                  const isSelected = selectedCompany?.id === company.id;

                  return (
                    <button
                      type="button"
                      key={company.id}
                      onClick={() => setSelectedId(company.id)}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        isSelected
                          ? "border-[#1d5a45] bg-[#edf5ef] shadow-[0_8px_20px_rgba(29,90,69,0.08)]"
                          : "border-[#d8d0c8] bg-white hover:border-[#8aa89b]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d7368]">
                            #{company.rank}
                          </div>
                          <h3 className="mt-1 text-xl font-bold tracking-[-0.05em]">
                            {company.name}
                          </h3>
                          <p className="mt-1 text-sm text-[#536560]">
                            {company.sector} · {company.region}
                          </p>
                        </div>

                        <div className="rounded-full bg-[#1d5a45] px-3 py-1 text-sm font-bold text-white">
                          {company.score.toFixed(2)}
                        </div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-[#bfccc3] bg-white p-8 text-center">
                  <p className="text-lg font-semibold">No matching companies</p>
                  <p className="mt-2 text-sm text-[#536560]">
                    Try another search or change the sector or region filter.
                  </p>
                </div>
              )}
            </div>

            {selectedCompany ? (
              <article className="rounded-[24px] border border-[#d8d0c8] bg-white p-6 shadow-[0_12px_28px_rgba(24,34,30,0.06)]">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4c5e57]">
                      Selected company
                    </p>
                    <h3 className="text-3xl font-bold tracking-[-0.05em]">
                      {selectedCompany.name}
                    </h3>
                  </div>

                  <div className="rounded-full bg-[#dfe8d3] px-3 py-2 text-sm font-bold text-[#1d5a45]">
                    {selectedCompany.score.toFixed(2)} / {selectedCompany.scoreScale}
                  </div>
                </div>

                <div className="mb-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f5f3ee] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c6a63]">
                      Sector
                    </p>
                    <p className="mt-2 text-lg font-semibold">{selectedCompany.sector}</p>
                  </div>

                  <div className="rounded-2xl bg-[#f5f3ee] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c6a63]">
                      Region
                    </p>
                    <p className="mt-2 text-lg font-semibold">{selectedCompany.region}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#dfe3d6] bg-[#faf9f6] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#587066]">
                    Data note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#40524c]">
                    {selectedCompany.sourceStatus}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#587066]">
                    Ranking
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#e3e9e6]">
                      <div
                        className="h-full rounded-full bg-[#1d5a45]"
                        style={{
                          width: `${(selectedCompany.score / selectedCompany.scoreScale) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="text-sm font-semibold text-[#1d5a45]">
                      {((selectedCompany.score / selectedCompany.scoreScale) * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              </article>
            ) : null}
          </div>
        </section>

        <section id="methodology" className="rounded-[24px] border border-[#d8d0c8] bg-white p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#587066]">
            Methodology
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-[-0.05em]">Why this matters</h3>
              <p className="mt-3 text-base leading-7 text-[#465850]">
                ESG data is only useful when it is transparent about what is measured,
                where the data comes from, and how it is interpreted. This prototype
                keeps the data visible and shows the limitations clearly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-[-0.05em]">
                What this prototype is not
              </h3>
              <p className="mt-3 text-base leading-7 text-[#465850]">
                These scores are user-provided and not independently verified. They are
                meant to demonstrate a filtering and comparison interface, not claim
                formal ESG performance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
