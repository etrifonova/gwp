import React, { useState } from "react";
import "./certTwo.css";

const CertTwo = ({ icon, title }) => {
  const [initState, clickedState] = useState(false);
  const onClickCert = () => {
    clickedState(!initState);
  };
  return (
    <div className="website__cert2-container__service">
      <div
        onClick={onClickCert}
        className="website__cert2-container__service-icon"
      >
        <img 
          className={`image ${initState ? "cert2-clicked" : ""}`}
          src={icon} alt="icon" />
      </div>
      <div className="website__cert2-container__service-title">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default CertTwo;
