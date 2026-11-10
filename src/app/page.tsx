"use client";

import { useMemo, useState } from "react";
import { esgCompanies, scoreSourceNote } from "@/data/esgCompanies";

export default function Home() {
  const [sector, setSector] = useState("All sectors");
  const [region, setRegion] = useState("All regions");

  const sectors = useMemo(
    () => [...new Set(esgCompanies.map((company) => company.sector))].sort(),
    [],
  );

  const regions = useMemo(
    () => [...new Set(esgCompanies.map((company) => company.region))].sort(),
    [],
  );

  const filteredCompanies = esgCompanies.filter((company) => {
    const matchesSector = sector === "All sectors" || company.sector === sector;
    const matchesRegion = region === "All regions" || company.region === region;
    return matchesSector && matchesRegion;
  });

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="ImpactLens home">
          <span className="brand-mark" aria-hidden="true">i</span>
          ImpactLens
        </a>
        <a className="method-link" href="#methodology">About the scores</a>
      </header>

      <section className="hero">
        <p className="eyebrow">A sustainability scorecard prototype</p>
        <h1>Look closer at a company’s environmental story.</h1>
        <p className="hero-copy">
          Browse a user-provided list of companies and scores, and filter by
          sector or region.
        </p>
        <div className="demo-notice" role="note">
          <span aria-hidden="true">ⓘ</span>
          <p>
            <strong>These scores have not been independently verified.</strong>{" "}
            {scoreSourceNote}
          </p>
        </div>
      </section>

      <section className="directory-section" aria-labelledby="directory-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore</p>
            <h2 id="directory-title">Company directory</h2>
          </div>
          <span className="result-count">
            {filteredCompanies.length}{" "}
            {filteredCompanies.length === 1 ? "company" : "companies"} found
          </span>
        </div>

        <div className="filters">
          <label className="select-field">
            <span>Company type</span>
            <select value={sector} onChange={(event) => setSector(event.target.value)}>
              <option>All sectors</option>
              {sectors.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>

          <label className="select-field">
            <span>Region</span>
            <select value={region} onChange={(event) => setRegion(event.target.value)}>
              <option>All regions</option>
              {regions.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        {filteredCompanies.length > 0 ? (
          <div className="company-list">
            {filteredCompanies.map((company) => (
              <article className="company-card" key={company.id}>
                <h2 className="company-name">
                  #{company.rank} {company.name}
                </h2>
                <p className="company-meta">{company.sector} · {company.region}</p>
                <p className="company-card-bottom">
                  ESG score: {company.score.toFixed(2)} / {company.scoreScale}
                </p>
                <small className="company-meta">{company.sourceStatus}</small>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No matching companies</h3>
            <p>Try a different sector or choose “All regions.”</p>
          </div>
        )}
      </section>

      <section className="methodology-section" id="methodology">
        <div>
          <p className="eyebrow">The fine print</p>
          <h2>Scores need context.</h2>
        </div>
        <div className="methodology-copy">
          <p>
            The scores and company list were supplied by the project owner. The
            source and methodology have not been independently verified.
          </p>
          <p>
            This prototype does not independently assess environmental
            performance. Treat these values as unverified, user-provided data,
            not as a verified ESG rating.
          </p>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#">
          <span className="brand-mark" aria-hidden="true">i</span>
          ImpactLens
        </a>
        <p>User-provided scores · Not independently verified</p>
      </footer>
    </main>
  );
}
