import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

export interface Painting {
  title: string
  size: string
  thumbnailUrl: string
  paintingUrl: string
  description: string
}

function App() {
  return <Link to={'/paintings'}>Paintings</Link>
}
