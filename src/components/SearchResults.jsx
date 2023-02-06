import React from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results, setLevel, level }) => {
  const { q } = useParams();

  return (
    <>
      {level === "shallow" && <p>Search Results</p>}
      <div className="images-container">
        {results.map((e) => {
          return (
            <Link
              key={e}
              className="image"
              to={`/${q}/image-detail`}
              onClick={() => setLevel("shallow")}
              state={{ src: `${e}` }}
            >
              <img key={e} className="image" src={e} alt="space-is-pretty" />
            </Link>
          );
        })}
      </div>
    </>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  level: PropTypes.string.isRequired,
  setLevel: PropTypes.func.isRequired,
};

export default SearchResults;
