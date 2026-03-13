# Core Fetching Hooks Module

This module contains all hooks used for data fetching and mutations. Since they are managed by the TanStack Query provider and can be reused across the app, keeping them in a dedicated module is ideal.

- **Schemas & typing:** Separate schemas are created for each query hook to maintain flexibility. Types are manually maintained. While this can lead to multiple updates when the API schema changes, the trade-off is considered worthwhile for flexibility and explicitness.
- **Error handling:** Error handling is not enforced here; it is left up to the consumer to decide how to handle errors (e.g., displaying messages, retries, fallbacks).
- **Caching & invalidation:** Hooks usually handle their own cache invalidation/removal to reflect data dependencies in the backend. It is preferable to invalidate more aggressively rather than risk keeping stale data.
- **Separation of concerns:** Hooks are responsible only for wrapping fetching logic. UI components and other modules should not directly depend on TanStack Query.
- **Queries and mutations:** Both query and mutation hooks live here, ensuring a single source of truth for all data-fetching logic.
- **Coupling with TanStack Query:** This module is tightly coupled to TanStack Query, with no dependency inversion applied. If the data layer were to change (e.g., switching to a different fetching/caching library), this module would be the main adaptation point.
