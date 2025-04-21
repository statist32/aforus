import { paintingQueryOptions } from "@/requests/requests";
import { useQuery } from "@tanstack/react-query";

interface PaintingProps {
    title: string;
    size: string;
    thumbnailUrl: string;
    paintingUrl: string;
    description: string;
}

const PaintingPreview = ({ title, size, thumbnailUrl, paintingUrl, description }: PaintingProps) => {
       const { data, isLoading, isError, error } = useQuery(paintingQueryOptions(thumbnailUrl));

    return (
        <div className="m-8">
            <img src={data} alt={`${title} thumbnail`} />
            <p>{thumbnailUrl}</p>
        </div>
    );
};

export default PaintingPreview;