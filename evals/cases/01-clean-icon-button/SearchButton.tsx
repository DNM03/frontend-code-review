type SearchButtonProps = {
  onSearch: () => void;
};

export function SearchButton({ onSearch }: SearchButtonProps) {
  return (
    <button type="button" aria-label="Search" onClick={onSearch}>
      <SearchIcon aria-hidden="true" />
    </button>
  );
}

function SearchIcon(props: { "aria-hidden": "true" }) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 5 5" />
    </svg>
  );
}
