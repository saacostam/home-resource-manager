import { QueryError } from "@/modules/core.components";

export interface CategoriesTableErrorProps {
  isPending: boolean;
  retry: () => void;
}

export function CategoriesTableError({
  isPending,
  retry,
}: CategoriesTableErrorProps) {
  return (
    <QueryError
      title="Couldn't fetch categories."
      retry={{
        onClick: retry,
        isPending,
      }}
    />
  );
}
