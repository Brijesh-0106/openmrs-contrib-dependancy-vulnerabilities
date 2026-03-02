import React from "react";
import { RepositorySection } from "./components/RepositorySection";
import { sortRepositories } from "./helpers/sorting";
import { allReports } from "./helpers/transform";
import "./style.scss";

const sortedReports = sortRepositories(allReports);

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">OpenMRS Dependency Vulnerability Report</h1>
        <div className="app__accent" />
        <p className="app__description">
          A summary of known security vulnerabilities detected across OpenMRS
          modules by automated dependency scanning. Each module lists its
          vulnerable dependencies, severity levels, and recommended fix versions
          to help maintainers prioritize upgrades.
        </p>
      </header>

      <main className="app__content">
        {sortedReports.map((report) => (
          <RepositorySection key={report.name} report={report} />
        ))}
      </main>
    </div>
  );
};

export default App;
