import {
  createRootRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => {
    const location = useRouterState({ select: (s) => s.location });
    const splitPath = location.pathname.split("/");
    const itemPathIndex = splitPath.findIndex((x) => x === "items");
    const itemIdIndex =
      itemPathIndex !== -1 ? splitPath[itemPathIndex + 1] : undefined;

    return (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/items" className="[&.active]:font-bold">
            Items
          </Link>
          {itemIdIndex && (
            <span className="font-bold px-1 border-x-1 border-black">
              {itemIdIndex}
            </span>
          )}
          <Link to="/buyers" className="[&.active]:font-bold">
            Buyers
          </Link>
          <Link to="/sellers" className="[&.active]:font-bold">
            Sellers
          </Link>
        </div>
        <hr />
        <div className="m-1">
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </>
    );
  },
});
