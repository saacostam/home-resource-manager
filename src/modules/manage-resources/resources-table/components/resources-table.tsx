import { ResourcesTableProvider } from "../provider";
import { ResourceTableLoader } from "./resources-table-loader";

export function ResourcesTable() {
  return (
    <ResourcesTableProvider>
      <ResourceTableLoader />
    </ResourcesTableProvider>
  );
}
