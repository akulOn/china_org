import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/items/$itemId/options/$optionId"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/items/$itemId/categories/$itemCategoryId/options/$optionId"!
    </div>
  );
}
