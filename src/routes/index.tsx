import { Box, Paper } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box
      className="flex justify-center items-center flex-col gap-5
        w-full h-full"
    >
      <Box
        className="
          flex-none
          inline-grid grid-cols-3 gap-2
          p-1
          [&>*]:w-30 [&>*]:h-30"
      >
        <Paper />
        <Paper />
        <Paper />
        <Paper />
        <Paper />
        <Paper />
        <Paper />
      </Box>
    </Box>
  );
}
