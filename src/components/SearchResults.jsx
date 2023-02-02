import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No Results</p>;
  }
  return (
    <>
      <p>Search Results</p>
      {results.map((e) => {
        return <img key={e} src={e} alt="space-is-pretty" />;
      })}
    </>
  );
};
SearchResults.defaultProps = {
  length: 0,
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  length: PropTypes.number,
};

export default SearchResults;
