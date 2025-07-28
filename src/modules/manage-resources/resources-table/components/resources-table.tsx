import { ResourcesTableProvider } from "../provider";
import { ResourceTableLoader } from "./resources-table-loader";

export function ResourceTable() {
  return (
    <ResourcesTableProvider>
      <ResourceTableLoader />
    </ResourcesTableProvider>
  );
}
