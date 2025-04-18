import { Container, Paper, Typography } from "@mui/material";
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
    <Container className="flex flex-col gap-2">
      <Link
        className="text-lg hover:underline"
        to={"/items/$itemId"}
        params={{ itemId: String(itemId) }}
      >
        Go Back
      </Link>
      <Typography variant="h5">{option.name}</Typography>

      <Image src={option.image} alt={option.name} />

      <Paper>
        <Typography>
          <span>MOQ</span>
          <span>2000</span>
        </Typography>

        <Typography>
          <span>MOQ</span>
          <span>MOQ</span>
        </Typography>
        <Typography>
          <span>MOQ</span>
          <span>MOQ</span>
        </Typography>
        <Typography>
          <span>MOQ</span>
          <span>MOQ</span>
        </Typography>
        <Typography>
          <span>MOQ</span>
          <span>MOQ</span>
        </Typography>
        <Typography>
          <span>MOQ</span>
          <span>MOQ</span>
        </Typography>
        <Typography>Desc</Typography>
        <Typography>{option.description}</Typography>
      </Paper>
    </Container>
  );
}
