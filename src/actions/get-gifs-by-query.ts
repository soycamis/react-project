import axios from "axios";
import { type GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../data/gifs.data";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await axios.get<GiphyResponse>(
    `https://api.giphy.com/v1/gifs/search`,
    {
      params: {
        api_key: import.meta.env.VITE_GIPHY_API_KEY,
        q: query,
        limit: 10,
        offset: 0,
        rating: "g",
        lang: "en",
        bundle: "messaging_non_clips",
      },
    }
  );
  const data = response.data;
  return data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: parseInt(gif.images.original.width),
    height: parseInt(gif.images.original.height),
  }));
};
