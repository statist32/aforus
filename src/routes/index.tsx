import { createFileRoute } from '@tanstack/react-router'
import  PaintingThumbnail  from '@/components/PaintingThumbnail/PaintingThumbnail';
import { useQuery } from '@tanstack/react-query';
import { paintingsQueryOptions } from '@/requests/requests';

export const Route = createFileRoute('/')({
  component: App,
})

export interface Painting{
  title: string;
  size: string;
  thumbnailUrl: string;
  paintingUrl: string;
  description: string;
}




function App() {
  const { data, isLoading, isError, error } = useQuery(paintingsQueryOptions());

  return (
    <div className="">
      {
        data?.map?.((painting: Painting) => <PaintingThumbnail 
        title={painting.title}
        size={painting.size}
        thumbnailUrl={painting.thumbnailUrl}
        paintingUrl={painting.paintingUrl}
        description={painting.description}
        key={painting.title}       
      />)}
    </div>
  )
}
