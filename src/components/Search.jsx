import React from "react";
import "../styles/search.css";

const Search = () => {
  return (
    <>
      <input className="search-box" type="text" placeholder="Search here" />
      <button className="button" type="submit">
        GO
      </button>
    </>
  );
};

export default Search;
