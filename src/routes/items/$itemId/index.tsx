import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/")({
  component: RouteComponent,
});

const options = ["1", "2", "3"];

function RouteComponent() {
  const { itemId } = Route.useParams();

  return (
    <>
      <div>Hello to item: {itemId}</div>
      <div>Please navigate to any option:</div>
      <div>
        <ul>
          {options.map((optionId) => (
            <li key={optionId}>
              <Link
                className="p-1"
                to={`/items/$itemId/options/$optionId`}
                params={{ itemId, optionId }}
              >
                {optionId}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
