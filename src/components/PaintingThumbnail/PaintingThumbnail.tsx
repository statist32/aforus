import "./PaintingThumbmail.scss";
import { thumbnailPaintingQueryOptions } from "@/requests/requests";
import { useQuery } from "@tanstack/react-query";


interface PaintingProps {
    title: string;
    size: string;
    thumbnailUrl: string;
    paintingUrl: string;
    description: string;
}

function PaintingThumbnail({ title, size, thumbnailUrl, paintingUrl, description }: PaintingProps) {
    const { data, isLoading, isError, error } = useQuery(thumbnailPaintingQueryOptions(thumbnailUrl));

    return (
        <div className="painting-thumbnail-wrapper">
            <img src={data} alt={`${title} thumbnail`} />
            <p className="painting-thumbnail-title">{title}</p>
        </div>
    );
}

export default PaintingThumbnail;