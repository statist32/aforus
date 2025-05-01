import './PaintingThumbnail.scss'
import { thumbnailPaintingQueryOptions } from '@/requests/requests'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

interface PaintingProps {
  title: string
  size: string
  thumbnailUrl: string
  paintingUrl: string
  description: string
}

function PaintingThumbnail({
  title,
  size,
  thumbnailUrl,
  paintingUrl,
  description,
}: PaintingProps) {
  const { data, isLoading, isError, error } = useQuery(
    thumbnailPaintingQueryOptions(thumbnailUrl),
  )

  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ to: '/paintings/$title', params: { title: title } })
  }

  return (
    <div className="painting-thumbnail-wrapper" onClick={() => handleClick()}>
      <img src={data} alt={`${title} thumbnail`} />
      <h3 className="painting-thumbnail-title">{title}</h3>
    </div>
  )
}

export default PaintingThumbnail
