import { Paper } from "@mui/material";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import Image from "mui-image";

export const Route = createFileRoute("/items/$itemId/options/$optionId")({
  component: RouteComponent,
});

const option = {
  id: 1001,
  name: "2-Slice Pop-Up Toaster",
  description:
    "Compact toaster with adjustable browning settings and a crumb tray.",
  image: "https://picsum.photos/id/1/200",
};

function RouteComponent() {
  const { itemId } = useParams({ strict: false });

  return (
    <div className="flex gap-2">
      <div>{option.name}</div>
      <div>
        <Link
          className="text-lg hover:underline"
          to={"/items/$itemId"}
          params={{ itemId: String(itemId) }}
        >
          Go Back
        </Link>
        <Image src={option.image} alt={option.name} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl">{option.name}</span>
        <Paper className="h-full w-1/2">{option.description}</Paper>
      </div>
    </div>
  );
}
