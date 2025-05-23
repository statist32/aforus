import { queryOptions } from '@tanstack/react-query'

export interface PaintingMetadata {
  title: string
  size: string
  thumbnailUrl: string
  paintingUrl: string
  description: string
}

const fetchPaintingMetadataList = async (): Promise<PaintingMetadata[]> => {
  const res = await fetch(
    'https://raw.githubusercontent.com/statist32/aforus/master/public/paintings.json',
  )
  if (!res.ok) {
    throw new Error('Failed to fetch paintings')
  }
  return res.json()
}

export const paintingMetadataListQueryOptions = () =>
  queryOptions({
    queryKey: ['paintings'],
    queryFn: () => fetchPaintingMetadataList(),
    refetchOnMount: true,
  })

export const fetchFullPaintingBlob = async (path: string): Promise<string> => {
  const res = await fetch(
    `https://raw.githubusercontent.com/statist32/aforus/refs/heads/master/public${path}`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch image')
  }
  const blob = await res.blob()
  return URL.createObjectURL(blob) // use this as <img src />
}

export const fullPaintingQueryOptions = (path: string) =>
  queryOptions({
    queryKey: ['fullPainting', path],
    queryFn: () => fetchFullPaintingBlob(path),
    refetchOnMount: true,
  })

export const fetchThumbnailPaintingBlob = async (
  path: string,
): Promise<string> => {
  const res = await fetch(
    `https://raw.githubusercontent.com/statist32/aforus/refs/heads/master/public${path}`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch image')
  }
  const blob = await res.blob()
  return URL.createObjectURL(blob) // use this as <img src />
}

export const thumbnailPaintingQueryOptions = (path: string) =>
  queryOptions({
    queryKey: ['thumbnailPainting', path],
    queryFn: () => fetchFullPaintingBlob(path),
    refetchOnMount: true,
  })
