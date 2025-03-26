import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/options/$optionId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { itemId, optionId } = Route.useParams();

  return (
    <div>
      Welcome to item: {itemId} option: {optionId}
    </div>
  );
}
