interface PreviousSearchesProps {
  searches: string[];
  handleClickTerm: (term: string) => void;
}

export const PreviousSearches = ({
  searches,
  handleClickTerm,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term} onClick={() => handleClickTerm(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
