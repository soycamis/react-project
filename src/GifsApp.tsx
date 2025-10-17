import { useState } from "react";

import { Header } from "./components/Header";
import { FormSearch } from "./components/FormSearch";
import { PreviousSearches } from "./components/PreviousSearches";
import { GifList } from "./components/GifList";

import { getGifsByQuery } from "./actions/get-gifs-by-query";

import { type Gif } from "./data/gifs.data";

export const GifsApp = () => {
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

  return (
    <>
      <Header
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />
      <FormSearch placeholder="Buscar..." onQuerySearch={handleQuerySearch} />
      <PreviousSearches searches={searches} handleClickTerm={handleClickTerm} />
      <GifList gifs={gifs} />
    </>
  );
};
