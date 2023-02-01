import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();

  return (
    <form className="form">
      <input
        className="search-box"
        type="text"
        placeholder="Search here"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button" type="submit">
        GO
      </button>
    </form>
  );
};

export default Search;
