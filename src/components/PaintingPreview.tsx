interface PaintingProps {
    title: string;
    size: string;
    thumbnailUrl: string;
    paintingUrl: string;
    description: string;
}

const PaintingPreview = ({ title, size, thumbnailUrl, paintingUrl, description }: PaintingProps) => {
    console.log({thumbnailUrl})
    
    return (
        <div className="m-8">
            <img src={thumbnailUrl+"?url"} alt={`${title} thumbnail`} />
            <p>{thumbnailUrl}</p>
        </div>
    );
};

export default PaintingPreview;