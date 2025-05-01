import Header from '@/components/Header/Header'
import PaintingThumbnailGrid from '@/components/PaintingThumbnailGrid/PaintingThumbnailGrid'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/paintings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header />
      <PaintingThumbnailGrid />
    </>
  )
}
