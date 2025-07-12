import { CategoriesTableProvider } from "../provider";
import { CategoriesTableLoader } from "./categories-table-loader";

export function CategoriesTable() {
  return (
    <CategoriesTableProvider>
      <CategoriesTableLoader />
    </CategoriesTableProvider>
  );
}
