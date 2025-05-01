import Header from '@/components/Header/Header'
import PaintingDetail from '@/components/PaintingDetail/PaintingDetail'
import {
  paintingMetadataListQueryOptions,
  thumbnailPaintingQueryOptions,
  type PaintingMetadata,
} from '@/requests/requests'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, useParams } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/paintings/$title')({
  component: RouteComponent,

  loader: async ({ params, context }) => {
    const { queryClient } = context

    const allPaintingData = await queryClient.ensureQueryData(
      paintingMetadataListQueryOptions(),
    )

    queryClient.prefetchQuery({
      ...thumbnailPaintingQueryOptions(
        findPaintingMetadata(allPaintingData, params.title)?.paintingUrl,
      ),
    })
  },
})

const findPaintingMetadata = (
  allPaintingData: PaintingMetadata[],
  title: string,
): PaintingMetadata => {
  return allPaintingData?.filter?.(
    (somePainting) => somePainting.title === title,
  )?.[0]
}

function RouteComponent() {
  const { title } = Route.useParams()
  const { data: allPaintingData } = useQuery(paintingMetadataListQueryOptions())
  const [paintingData, setPaintingData] = useState<
    PaintingMetadata | undefined
  >(undefined)

  useEffect(() => {
    setPaintingData(findPaintingMetadata(allPaintingData ?? [], title))
  }, [allPaintingData])

  const { data: painting } = useQuery({
    ...thumbnailPaintingQueryOptions(paintingData?.paintingUrl ?? ''),
    enabled: !!paintingData,
  })

  return (
    <>
      <Header />
      <PaintingDetail painting={painting} title={title} />
    </>
  )
}
