import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await getImages(value);
    setSearchResults(results);
    if (results.length >= 1) {
      navigate(`/${value}`);
    } else {
      navigate("/try-again");
    }
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

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
