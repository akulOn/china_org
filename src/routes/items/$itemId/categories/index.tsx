import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/$itemId/categories/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/items/$itemId/categories/"!</div>
}
