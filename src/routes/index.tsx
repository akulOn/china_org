import { Box } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box className="flex flex-col justify-center-safe gap-2 bg-amber-100">
      <span>Welcome. Pick.</span>
      <div className="flex flex-row gap-2 [&>*]:w-30 [&>*]:h-30">
        <Link className="bg-amber-50 border rounded-xs" to={"/items"}>
          <span>Items</span>
        </Link>
        <Link className="bg-amber-50 border rounded-xs" to={"/buyers"}>
          <span>Buyers</span>
        </Link>
        <Link className="bg-amber-50 border rounded-xs" to={"/sellers"}>
          <span>Sellers</span>
        </Link>
      </div>
    </Box>
  );
}
