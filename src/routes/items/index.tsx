import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
});
const items = ["Gloves", "Umbrella", "USB", "Glasses", "Knives"];

function RouteComponent() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-4">
        {items.map((itemId) => (
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
