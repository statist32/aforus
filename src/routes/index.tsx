import { createFileRoute } from '@tanstack/react-router'
import paintings from "../../public/paintings.json"
import  PaintingPreview  from '@/components/PaintingPreview';

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
  return (
    <div className="text-center bg-white text-[#1e1e1e]">
      <div className="bg-white text-[#1e1e1e]">
      {paintings.map((painting: Painting) => <PaintingPreview 
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
