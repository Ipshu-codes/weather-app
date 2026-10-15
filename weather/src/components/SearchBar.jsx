
function SearchBar({ city, setCity, onSearch, loading }) {
  return (
    <form onSubmit={onSearch} className="search-form">
      <input
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;
