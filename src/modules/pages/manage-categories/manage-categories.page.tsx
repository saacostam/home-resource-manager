import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { CategoriesTable } from "@/modules/manage-categories/categories-table";
import { genRoute, TRouteType } from "@/modules/routing";

export default function ManageCategoriesPage() {
  return (
    <>
      <Breadcrumbs>
        <Anchor component={Link} to={genRoute({ type: TRouteType.DASHBOARD })}>
          Dashboard
        </Anchor>
        <Text c="violet">Categories</Text>
      </Breadcrumbs>
      <CategoriesTable />
    </>
  );
}
