import { QueryError } from "@/modules/core.components";
import { useStatsLoader } from "../hooks";
import { StatsSkeleton } from "./stats-skeleton";
import { StatsContent } from "./stats-content";

export function StatsLoader() {
  const { status, stats, retry } = useStatsLoader();

  if (status === "error")
    return <QueryError title="Couldn't fetch stats." retry={retry} />;

  if (status === "success") return <StatsContent stats={stats} />;

  return <StatsSkeleton />;
}
