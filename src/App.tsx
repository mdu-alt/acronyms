import { useEffect, useState } from "react";

import { Acronym } from "./acronyms/Model";
import AcronymsList from "./acronyms/AcronymsTable";
import SearchBar from "./searchBar/SearchBar";

function filterPosts(items: Acronym[], query: string) {
  if (!query) {
    return items;
  }

  return items.filter((item) => item.acronym.toLowerCase().includes(query));
}

/**
 * TODO
 */
function App() {
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Acronym[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const json = await response.json();

        setIsLoaded(true);
        setItems(json as Acronym[]);
      } catch (error: any) {
        setIsLoaded(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(items, searchQuery);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}></SearchBar>
        <AcronymsList acronyms={filteredPosts} />
      </main>
    );
  }
}

export default App;
