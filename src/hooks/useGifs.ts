import { useState } from "react";
import { type Gif } from "../data/gifs.data";
import { getGifsByQuery } from "../actions/get-gifs-by-query";

export const useGifs = () => {
  const [searches, setSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleClickTerm = (term: string) => {
    console.log(term);
  };

  const handleQuerySearch = async (query: string) => {
    const queryLowerCase: string = query.toLowerCase().trim();

    if (queryLowerCase.length === 0) return;
    if (searches.includes(queryLowerCase)) return;

    setSearches([query, ...searches].splice(0, 8));
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return {
    gifs,
    searches,
    handleClickTerm,
    handleQuerySearch,
  };
};
