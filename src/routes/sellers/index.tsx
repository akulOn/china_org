import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sellers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sellers/"!</div>
}
