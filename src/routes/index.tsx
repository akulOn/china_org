import { Container, Typography } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

import AddIcon from "@mui/icons-material/Add";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";

export const Route = createFileRoute("/")({
  component: Index,
});

const links = [
  {
    name: "Items",
    icon: <StorefrontIcon />,
    to: "/items",
    desc: "Navigate over different item categories and chose an option",
  },
  {
    name: "Buyers",
    icon: <PaymentsIcon />,
    to: "/buyers",
    desc: "Overview the list of buyers and get details on their orders",
  },
  {
    name: "Sellers",
    icon: <ShoppingCartIcon />,
    to: "/sellers",
    desc: "Analyze all of the current and past sellers",
  },
];

function Index() {
  return (
    <Container className="flex flex-col gap-2 items-center h-full">
      <Typography
        variant="h1"
        className="
          grow-1
          py-16 lg:py-0
          lg:flex lg:items-center
          text-[#B3B7BA] !font-bold"
      >
        Welcome!
      </Typography>
      <Container
        className="flex flex-col grow-2 gap-8 justify-center items-stretch
          lg:flex-row lg:*:w-64
          *:h-48
          *:bg-[#6C6D74] *:shadow-lg *:rounded-4xl
          text-[#D3D1CE]"
      >
        {links.map((link) => (
          <Link
            key={link.name}
            className="flex flex-col justify-between 
            p-4"
            to={link.to}
          >
            <div className="flex *:!text-4xl">
              {link.icon}
              <span>{link.name}</span>
            </div>
            <div className="flex">
              <Typography variant="body2">{link.desc}</Typography>
              <AddIcon className="!text-5xl" />
            </div>
          </Link>
        ))}
      </Container>
    </Container>
  );
}
