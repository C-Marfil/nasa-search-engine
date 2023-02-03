import React from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  const { q } = useParams();

  if (!results.length) {
    return <p>Search images by using the text field above</p>;
  }
  return (
    <>
      <div className="images-container">
        {results.map((e) => {
          return (
            <Link to={`/${q}/image-detail`} state={{ src: `${e}` }}>
              <img key={e} className="image" src={e} alt="space-is-pretty" />
            </Link>
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
