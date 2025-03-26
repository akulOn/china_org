import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1>
        Welcome to the Home page of:{" "}
        <span className="p-1 font-bold">CHINA ORG</span>
      </h1>
      <div>
        <span>Please navigate to the items page:</span>
        <Link className="p-1 font-bold" to={"/items"}>
          ITEMS
        </Link>
      </div>
    </>
  );
}
