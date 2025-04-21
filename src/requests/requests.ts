import { queryOptions } from "@tanstack/react-query";

const fetchPaintings = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/statist32/aforus/develop/public/paintings.json"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch paintings");
    }
    return res.json();
  };


export const paintingsQueryOptions =() =>   queryOptions(
    {
        queryKey: ["paintings"],
        queryFn: () => fetchPaintings(),
        refetchOnMount: true
      }
);


export const fetchPaintingBlob = async (path: string): Promise<string> => {
    console.log("awd", path)
    
    const res = await fetch(
      `https://raw.githubusercontent.com/statist32/aforus/refs/heads/develop/public${path}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch image");
    }
    const blob = await res.blob();
    return URL.createObjectURL(blob); // use this as <img src />
  };


export const paintingQueryOptions = (path: string)  => queryOptions(
    {
        queryKey: ["paintings"],
        queryFn: () => fetchPaintingBlob(path),
        refetchOnMount: true
      }
);