import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Button,
  Chip,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Check from "@mui/icons-material/Check";

import { useEffect, useState } from "react";

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
});

interface ItemType {
  id: number;
  name: string;
  description: string;
  categoryId: number;
}

const items: ItemType[] = [
  {
    id: 1,
    name: "Toaster",
    description: "A small appliance used to toast bread.",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Microwave",
    description: "An appliance used to quickly heat food.",
    categoryId: 1,
  },
  {
    id: 3,
    name: "Vacuum Cleaner",
    description: "A device that uses suction to clean floors.",
    categoryId: 4,
  },
  {
    id: 4,
    name: "Coffee Maker",
    description:
      "Brews coffee by heating water and filtering it through ground beans.",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Television",
    description: "Displays video and audio content from various sources.",
    categoryId: 5,
  },
  {
    id: 6,
    name: "Refrigerator",
    description: "Keeps food and drinks cold to preserve freshness.",
    categoryId: 1,
  },
  {
    id: 7,
    name: "Washing Machine",
    description: "Used to automatically wash laundry.",
    categoryId: 2,
  },
  {
    id: 8,
    name: "Dishwasher",
    description: "Cleans dishes automatically using water and detergent.",
    categoryId: 1,
  },
  {
    id: 9,
    name: "Blender",
    description: "Mixes and purees food or drinks.",
    categoryId: 1,
  },
  {
    id: 10,
    name: "Iron",
    description: "Removes wrinkles from clothing with heat.",
    categoryId: 4,
  },
  {
    id: 11,
    name: "Lamp",
    description: "Provides light for reading or ambiance.",
    categoryId: 5,
  },
  {
    id: 12,
    name: "Sofa",
    description: "A comfortable piece of furniture for sitting.",
    categoryId: 5,
  },
  {
    id: 13,
    name: "Dining Table",
    description: "A table where meals are typically eaten.",
    categoryId: 1,
  },
  {
    id: 14,
    name: "Pillow",
    description: "Supports the head while sleeping.",
    categoryId: 3,
  },
  {
    id: 15,
    name: "Blanket",
    description: "Used to keep warm while sleeping or resting.",
    categoryId: 3,
  },
  {
    id: 16,
    name: "Bookshelf",
    description: "A piece of furniture used to store books and decor.",
    categoryId: 3,
  },
  {
    id: 17,
    name: "Shower Curtain",
    description: "Prevents water from escaping a shower area.",
    categoryId: 2,
  },
  {
    id: 18,
    name: "Trash Can",
    description: "Holds household waste and garbage.",
    categoryId: 1,
  },
  {
    id: 19,
    name: "Ceiling Fan",
    description: "Circulates air in a room for cooling.",
    categoryId: 5,
  },
  {
    id: 20,
    name: "Alarm Clock",
    description: "Used to wake someone up at a set time.",
    categoryId: 3,
  },
];

interface CategoryType {
  id: number;
  name: string;
}

const categories: CategoryType[] = [
  { id: 1, name: "Kitchen" },
  { id: 2, name: "Bathroom" },
  { id: 3, name: "Bedroom" },
  { id: 4, name: "Small home appliances" },
  { id: 5, name: "Living room" },
];

function RouteComponent() {
  const [displayedItems, setDisplayedItems] = useState<ItemType[]>([...items]);
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>(
    []
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemOnClick = (id: number) => {
    const selectedCategory = categories.find((x) => x.id === id);

    if (!selectedCategory) return;

    if (selectedCategories.some((x) => x.id === id))
      setSelectedCategories([...selectedCategories.filter((x) => x.id !== id)]);
    else setSelectedCategories([...selectedCategories, selectedCategory]);

    handleClose();
  };

  const handleDelete = (id: number) => {
    setSelectedCategories([...selectedCategories.filter((x) => x.id !== id)]);
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setDisplayedItems([...items]);
      return;
    }

    setDisplayedItems([
      ...items.filter((item) =>
        selectedCategories.some((x) => x.id === item.categoryId)
      ),
    ]);
  }, [selectedCategories]);

  return (
    <div className="flex justify-center gap-4 p-2">
      <div className="flex flex-col gap-2">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Categories
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          aria-labelledby="basic-button"
        >
          {categories.map((category) => (
            <MenuItem
              key={category.id}
              onClick={() => handleMenuItemOnClick(category.id)}
            >
              {selectedCategories.some((x) => x.id === category.id) && (
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              )}
              {category.name}
            </MenuItem>
          ))}
        </Menu>
        {selectedCategories.map((selectedCategory) => (
          <Chip
            key={selectedCategory.id}
            label={selectedCategory.name}
            onDelete={() => handleDelete(selectedCategory.id)}
          />
        ))}
      </div>
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
    </div>
  );
}
