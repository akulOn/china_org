import { Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import {
  createRootRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";

interface CountryType {
  code: string;
  label: string;
  phone: string;
}

const countries: readonly CountryType[] = [
  {
    code: "US",
    label: "United States",
    phone: "1",
  },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "CN", label: "China", phone: "86" },
];

export const Route = createRootRoute({
  component: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (country?: CountryType) => {
      if (country) setSelectedCountry(country);

      setAnchorEl(null);
    };

    const location = useRouterState({ select: (s) => s.location });
    const splitPath = location.pathname.split("/");
    const itemsPathIndex = splitPath.findIndex((x) => x === "items");
    const itemName =
      itemsPathIndex !== -1 ? splitPath[itemsPathIndex + 1] : undefined;

    return (
      <div className="flex flex-col h-dvh bg-neutral-100">
        <div className="flex flex-none gap-2 p-2 justify-center *:text-2xl *:hover:underline">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/items" className="[&.active]:font-bold">
            Items
          </Link>
          {itemName && (
            <Link
              className="font-bold px-1 border-x-1 border-black"
              to={"/items/$itemId"}
              params={{ itemId: itemName }}
            >
              {itemName}
            </Link>
          )}
          <Link to="/buyers" className="[&.active]:font-bold">
            Buyers
          </Link>
          <Link to="/sellers" className="[&.active]:font-bold">
            Sellers
          </Link>
          <Button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
            startIcon={
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                alt=""
              />
            }
          >
            {selectedCountry.label}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose()}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} onClick={() => handleClose(country)}>
                <ListItemIcon>
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                    alt=""
                  />
                </ListItemIcon>
                {country.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <hr />
        <div className="flex-1 p-1">
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </div>
    );
  },
});
