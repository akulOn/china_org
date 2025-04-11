import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/options/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/items/$itemId/options/"!</div>;
}
