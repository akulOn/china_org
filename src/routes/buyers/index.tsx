import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/buyers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/buyers/"!</div>
}
