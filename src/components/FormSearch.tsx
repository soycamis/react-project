import { useState } from "react";

interface FormSearchProps {
  placeholder: string;
  onQuerySearch: (query: string) => void;
}

export const FormSearch = ({
  placeholder = "Buscar",
  onQuerySearch,
}: FormSearchProps) => {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = () => {
    onQuerySearch(query);
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onQuerySearch(query);
      setQuery("");
    }
  };

  return (
    <div className="search-container">
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchSubmit}>Buscar</button>
    </div>
  );
};
