import { createFileRoute } from '@tanstack/react-router'
import paintings from "../../public/paintings.json"
import  PaintingPreview  from '@/components/PaintingPreview';
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
    <div className="text-center bg-white text-[#1e1e1e]">
      <div className="bg-white text-[#1e1e1e]">
      {data?.map((painting: Painting) => <PaintingPreview 
        title={painting.title}
        size={painting.size}
        thumbnailUrl={painting.thumbnailUrl}
        paintingUrl={painting.paintingUrl}
        description={painting.description}
       
      />)}
      
      </div>


    </div>
  )
}
