import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
