import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/items/$itemId/categories/$itemCategoryId/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/items/$itemId/categories/$itemCategoryId/"!</div>
}
