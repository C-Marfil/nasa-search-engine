import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const InspectImage = () => {
  const { q } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={navigate(-1)}>
        GO BACK
      </button>
      <img src={state.src} alt={q} />
    </>
  );
};

export default InspectImage;
