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


export const paintingsQueryOptions  = queryOptions(
    {
        queryKey: ["paintings"],
        queryFn: fetchPaintings,
      }
);