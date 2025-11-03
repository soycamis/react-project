// Components
import { Header } from "./components/Header";
import { FormSearch } from "./components/FormSearch";
import { PreviousSearches } from "./components/PreviousSearches";
import { GifList } from "./components/GifList";

import { useGifs } from "./hooks/useGifs";

export const GifsApp = () => {
  const { gifs, searches, handleClickTerm, handleQuerySearch } = useGifs();

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
