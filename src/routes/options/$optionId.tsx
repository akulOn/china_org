import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/options/$optionId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/options/$optionId"!</div>;
}
