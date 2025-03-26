import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/buyers/$buyerId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/buyers/$buyerId"!</div>
}
