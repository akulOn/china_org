import { Paper } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/options/$optionId")({
  component: RouteComponent,
});

const option = {
  id: 1001,
  name: "2-Slice Pop-Up Toaster",
  description:
    "Compact toaster with adjustable browning settings and a crumb tray.",
  image: "https://source.unsplash.com/featured/?toaster",
};

function RouteComponent() {
  return (
    <div className="flex">
      <div className="grow-3">
        <img
          className="w-200 h-200 object-contain"
          loading="lazy"
          srcSet="/images/man-toasting-bread-breakfast-drinking-coffee.jpg"
          src="/images/man-toasting-bread-breakfast-drinking-coffee.jpg"
          alt={option.name}
        />
      </div>
      <div className="grow-7 flex flex-col gap-1">
        <span className="text-2xl">{option.name}</span>
        <Paper className="h-full w-1/2">{option.description}</Paper>
      </div>
    </div>
  );
}
