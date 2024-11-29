import React, { useState } from "react";
import "./certOne.css";

const CertOne = ({ icon, title, bullet1 }) => {
  const [initState, clickedState] = useState(false);
  const onClickCert = () => {
    clickedState(!initState);
  };

  return (
    <div className="website__cert1-container__service">
      <div
        onClick={onClickCert}
        className="website__cert1-container__service-icon"
      >
        <img
          className={`image ${initState ? "cert1-clicked" : "clickedState"}`}
          src={icon}
          alt="icon"
        />
      </div>
      <div className="website__cert1-container__service-title">
        <h4>{title}</h4>
      </div>
      <div className="website__cert1-container__service-text">
        <p>{bullet1}</p>
        {/* <ul>
          <li>{bullet1}</li>
        </ul> */}
      </div>
    </div>
  );
};

export default CertOne;
