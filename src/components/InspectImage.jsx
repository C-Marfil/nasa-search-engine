import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../styles/inspect-image.css";

const InspectImage = () => {
  const { q } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="inspected-elements">
      <img
        src={state.src}
        alt={q}
        className="inspected-image"
        id="inspected-image"
      />
      <button className="back-button" type="button" onClick={handleBack}>
        BACK
      </button>
    </div>
  );
};

export default InspectImage;
