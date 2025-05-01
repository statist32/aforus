import './PaintingThumbnailGrid.scss'
import type { Painting } from '@/routes'
import PaintingThumbnail from '../PaintingThumbnail/PaintingThumbnail'
import { useQuery } from '@tanstack/react-query'
import { paintingMetadataListQueryOptions } from '@/requests/requests'

const PaintingThumbnailGrid = () => {
  const { data, isLoading, isError, error } = useQuery(
    paintingMetadataListQueryOptions(),
  )

  return (
    <div className="painting-thumbnail-grid-wrapper">
      {data?.map?.((painting: Painting) => (
        <PaintingThumbnail
          title={painting.title}
          size={painting.size}
          thumbnailUrl={painting.thumbnailUrl}
          paintingUrl={painting.paintingUrl}
          description={painting.description}
          key={painting.title}
        />
      ))}
    </div>
  )
}

export default PaintingThumbnailGrid
