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
      <div className="images-container">
        {results.map((e) => {
          return (
            <a href={e} rel="noreferrer" target="_blank">
              <img key={e} className="image " src={e} alt="space-is-pretty" />
            </a>
          );
        })}
      </div>
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
