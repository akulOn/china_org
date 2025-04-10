import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Route = createFileRoute("/items/$itemId/")({
  component: RouteComponent,
});

interface OptionType {
  id: number;
  name: string;
  description: string;
  image: string;
}

const options: OptionType[] = [
  {
    id: 1001,
    name: "2-Slice Pop-Up Toaster",
    description:
      "Compact toaster with adjustable browning settings and a crumb tray.",
    image: "https://source.unsplash.com/featured/?toaster",
  },
  {
    id: 1002,
    name: "4-Slice Stainless Steel Toaster",
    description:
      "A family-sized toaster with extra-wide slots and a sleek brushed steel finish.",
    image: "https://source.unsplash.com/featured/?kitchen,toaster",
  },
  {
    id: 1003,
    name: "Countertop Convection Oven",
    description:
      "Versatile mini oven with convection cooking, ideal for baking and roasting.",
    image: "https://source.unsplash.com/featured/?countertop,oven",
  },
  {
    id: 1004,
    name: "Air Fryer Toaster Oven Combo",
    description:
      "All-in-one appliance for air frying, baking, and toasting with digital controls.",
    image: "https://source.unsplash.com/featured/?airfryer,oven",
  },
  {
    id: 1005,
    name: "Retro 2-Slice Toaster",
    description:
      "Stylish retro design with modern features like defrost and reheat modes.",
    image: "https://source.unsplash.com/featured/?retro,toaster",
  },
];

function RouteComponent() {
  const [displayedOptions, setDisplayedOptions] = useState<OptionType[]>([
    ...options,
  ]);
  const { itemId } = Route.useParams();

  return (
    <div className="flex justify-center gap-4 p-2">
      <FormControl className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
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
        </div>
      </FormControl>
      <div className="flex flex-col gap-2">
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
        <div className="grid grid-cols-3 gap-4">
          {displayedOptions.map((option) => (
            <Link
              key={option.id}
              className="
              flex items-center justify-center
              w-50 h-50
              border border-gray-400 bg-amber-50
              hover:cursor-pointer"
              to={`/items/$itemId/options/$optionId`}
              params={{ itemId: String(itemId), optionId: String(option.id) }}
            >
              {option.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
