import { Container } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Container className="flex flex-col gap-2 items-center h-full">
      <span className="text-6xl">Welcome. Pick.</span>
      <Container
        className="flex flex-col grow-1 gap-2 justify-center items-stretch
          lg:flex-row lg:items-center lg:*:w-64
          *:flex *:justify-center *:items-center
          *:bg-amber-50 *:border
          *:h-64
          *:text-6xl"
      >
        <Link to={"/items"}>
          <span>Items</span>
        </Link>
        <Link to={"/buyers"}>
          <span>Buyers</span>
        </Link>
        <Link to={"/sellers"}>
          <span>Sellers</span>
        </Link>
      </Container>
    </Container>
  );
}
