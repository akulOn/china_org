import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/options/$optionId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { itemId, optionId } = Route.useParams();

  return <div>Hello "/options/$optionId"!</div>;
}
