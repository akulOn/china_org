import { Box } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box className="flex flex-col gap-2 items-center">
      <span className="text-5xl">Welcome. Pick.</span>
      <Box
        className="flex flex-row gap-2 
          *:w-30 *:h-30 *:bg-amber-50 *:border *:rounded-xs *:flex *:justify-center *:items-center *:text-lg"
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
      </Box>
    </Box>
  );
}
