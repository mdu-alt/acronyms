// import React from "react";

// type SearchBarProps = {
//   searchQuery: string;
//   setSearchQuery: React.Dispatch<T>;
// };

/**
 * TODO
 */
function SearchBar(props: any) {
  return (
    <form action="/" method="get">
      <input
        type="search"
        name="s"
        placeholder="Search"
        value={props.searchQuery}
        onInput={(e) => props.setSearchQuery((e.target as HTMLInputElement).value)}
        aria-label="Search"
      />
    </form>
  );
}

export default SearchBar;
