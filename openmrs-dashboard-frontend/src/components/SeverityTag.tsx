import "../style.scss";
import type { NormalizedSeverity } from "../types";

const severityLabelMap: Record<NormalizedSeverity, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
};

export const SeverityTag = ({ severity }: { severity: NormalizedSeverity }) => {
  return (
    <span className={`severity-tag severity-tag--${severity}`}>
      {severityLabelMap[severity]}
    </span>
  );
};
