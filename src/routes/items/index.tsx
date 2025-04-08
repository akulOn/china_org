import { createFileRoute, Link } from "@tanstack/react-router";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
});
const items = ["Gloves", "Umbrella", "USB", "Glasses", "Knives"];

function RouteComponent() {
  const [displayedItems, setDisplayedItems] = useState([...items]);

  return (
    <div className="flex flex-col gap-5 p-2">
      <FormControl variant="standard" className="w-150">
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
                items.filter((x) =>
                  x.toLowerCase().includes(event.target.value.toLowerCase())
                ),
              ]
            );
          }}
        />
      </FormControl>
      <div className="inline-grid grid-cols-3 gap-4">
        {displayedItems.map((itemId) => (
          <Link
            key={itemId}
            className="p-1 border-1 hover:cursor-pointer"
            to={`/items/$itemId`}
            params={{ itemId }}
          >
            {itemId}
          </Link>
        ))}
      </div>
    </div>
  );
}
