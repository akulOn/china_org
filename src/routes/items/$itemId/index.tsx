import { useState } from "react";
import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import SearchIcon from "@mui/icons-material/Search";
import ImageCarousel from "../../../components/ImageCarousel";

export const Route = createFileRoute("/items/$itemId/")({
  component: RouteComponent,
});

export type OptionType = {
  id: number;
  name: string;
  description: string;
  images: string[];
};

const options: OptionType[] = [
  {
    id: 1001,
    name: "2-Slice Pop-Up Toaster",
    description:
      "Compact toaster with adjustable browning settings and a crumb tray.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1002,
    name: "4-Slice Stainless Steel Toaster",
    description:
      "A family-sized toaster with extra-wide slots and a sleek brushed steel finish.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1003,
    name: "Countertop Convection Oven",
    description:
      "Versatile mini oven with convection cooking, ideal for baking and roasting.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1004,
    name: "Air Fryer Toaster Oven Combo",
    description:
      "All-in-one appliance for air frying, baking, and toasting with digital controls.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
  {
    id: 1005,
    name: "Retro 2-Slice Toaster",
    description:
      "Stylish retro design with modern features like defrost and reheat modes.",
    images: [
      "https://picsum.photos/id/1/200",
      "https://picsum.photos/id/2/200",
      "https://picsum.photos/id/3/200",
      "https://picsum.photos/id/4/200",
    ],
  },
];

function RouteComponent() {
  const [displayedOptions, setDisplayedOptions] = useState<OptionType[]>([
    ...options,
  ]);
  const { itemId } = Route.useParams();

  return (
    <Container className="flex justify-center gap-2 my-1">
      <FormControl className="flex flex-col gap-2">
        <Container className="flex flex-col gap-2">
          <Paper className="p-2">
            <span className="text-lg">MOQ</span>
            <div className="flex gap-1">
              <TextField
                className="w-20"
                label="Min"
                type="number"
                size="small"
              />
              <TextField
                className="w-20"
                label="Max"
                type="number"
                size="small"
              />
            </div>
          </Paper>

          <Paper className="p-2">
            <span className="text-lg">Price</span>
            <div className="flex gap-1">
              <TextField
                className="w-20"
                label="Min"
                type="number"
                size="small"
              />
              <TextField
                className="w-20"
                label="Max"
                type="number"
                size="small"
              />
            </div>
          </Paper>

          <Paper className="p-2">
            <span className="text-lg">Weight</span>
            <div className="flex gap-1">
              <TextField
                className="w-20"
                label="Min"
                type="number"
                size="small"
              />
              <TextField
                className="w-20"
                label="Max"
                type="number"
                size="small"
              />
            </div>
          </Paper>
        </Container>
      </FormControl>
      <Container className="flex flex-col gap-2">
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Find item</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDisplayedOptions(
                ...[
                  options.filter((option) =>
                    option.name
                      .toLowerCase()
                      .includes(event.target.value.toLowerCase())
                  ),
                ]
              );
            }}
          />
        </FormControl>
        <Container
          className="
            grid
            grid-cols-1 lg:grid-cols-3
            gap-2"
        >
          {displayedOptions.map((option) => (
            <ImageCarousel
              key={option.id}
              route="/items/$itemId/options/$optionId"
              routeParams={{
                itemId: String(itemId),
                optionId: String(option.id),
              }}
              header={option.name}
              images={option.images}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
