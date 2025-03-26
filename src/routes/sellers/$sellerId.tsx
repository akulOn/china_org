import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sellers/$sellerId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sellers/$sellerId"!</div>
}
