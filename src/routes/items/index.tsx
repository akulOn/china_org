import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
});
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function RouteComponent() {
  return (
    <div className="p-2 bg-red-50">
      <div className="grid grid-cols-3 gap-4">
        {items.map((itemId) => (
          <Link
            key={itemId}
            className="border-1 hover:cursor-pointer"
            to={`/items/${itemId}`}
          >
            {itemId}
          </Link>
        ))}
      </div>
    </div>
  );
}
