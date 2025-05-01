import Spinner from '../Spinner/Spinner'
import './PaintingDetail.scss'

function PaintingDetail({
  painting,
  title,
}: {
  painting: string | undefined
  title: string
}) {
  return (
    <div className="painting-detail-wrapper">
      {painting === undefined ? (
        <Spinner />
      ) : (
        <img src={painting} alt={`${title} thumbnail`} />
      )}
      <div className="painting-details">
        <h2 className="painting-detail-title">{title}</h2>
      </div>
    </div>
  )
}

export default PaintingDetail
