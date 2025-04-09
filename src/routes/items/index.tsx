import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
});

interface ItemType {
  id: number;
  name: string;
  description: string;
}

const items: ItemType[] = [
  {
    id: 1,
    name: "Toaster",
    description: "A small appliance used to toast bread.",
  },
  {
    id: 2,
    name: "Microwave",
    description: "An appliance used to quickly heat food.",
  },
  {
    id: 3,
    name: "Vacuum Cleaner",
    description: "A device that uses suction to clean floors.",
  },
  {
    id: 4,
    name: "Coffee Maker",
    description:
      "Brews coffee by heating water and filtering it through ground beans.",
  },
  {
    id: 5,
    name: "Television",
    description: "Displays video and audio content from various sources.",
  },
  {
    id: 6,
    name: "Refrigerator",
    description: "Keeps food and drinks cold to preserve freshness.",
  },
  {
    id: 7,
    name: "Washing Machine",
    description: "Used to automatically wash laundry.",
  },
  {
    id: 8,
    name: "Dishwasher",
    description: "Cleans dishes automatically using water and detergent.",
  },
  { id: 9, name: "Blender", description: "Mixes and purees food or drinks." },
  {
    id: 10,
    name: "Iron",
    description: "Removes wrinkles from clothing with heat.",
  },
  {
    id: 11,
    name: "Lamp",
    description: "Provides light for reading or ambiance.",
  },
  {
    id: 12,
    name: "Sofa",
    description: "A comfortable piece of furniture for sitting.",
  },
  {
    id: 13,
    name: "Dining Table",
    description: "A table where meals are typically eaten.",
  },
  { id: 14, name: "Pillow", description: "Supports the head while sleeping." },
  {
    id: 15,
    name: "Blanket",
    description: "Used to keep warm while sleeping or resting.",
  },
  {
    id: 16,
    name: "Bookshelf",
    description: "A piece of furniture used to store books and decor.",
  },
  {
    id: 17,
    name: "Shower Curtain",
    description: "Prevents water from escaping a shower area.",
  },
  {
    id: 18,
    name: "Trash Can",
    description: "Holds household waste and garbage.",
  },
  {
    id: 19,
    name: "Ceiling Fan",
    description: "Circulates air in a room for cooling.",
  },
  {
    id: 20,
    name: "Alarm Clock",
    description: "Used to wake someone up at a set time.",
  },
];

function RouteComponent() {
  const [displayedItems, setDisplayedItems] = useState([...items]);

  return (
    <div className="flex flex-col gap-5 p-2 items-center">
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
            setDisplayedItems(
              ...[
                items.filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
                ),
              ]
            );
          }}
        />
      </FormControl>
      <div className="grid grid-cols-3 gap-4">
        {displayedItems.map((item) => (
          <Link
            key={item.id}
            className="
              flex items-center justify-center
              w-50 h-50
              border border-gray-400 bg-amber-50
              hover:cursor-pointer"
            to={`/items/$itemId`}
            params={{ itemId: String(item.id) }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
