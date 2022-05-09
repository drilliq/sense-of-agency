import React from "react";

import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function ExperimentChooser() {
  return (
    <div className="experiment-page">
      <div className="experiment-choice-instruction">
        Please select experiment
      </div>
      <div className="experiment-choices">
        <Link to="/experiment/1">
          <div className="experiment-chooser">1</div>
        </Link>
        <Link to="/experiment/2">
          <div className="experiment-chooser">2</div>
        </Link>
      </div>
      <div className="back-container">
        <Link to="/" className="back-button">
          <BiArrowBack className="back-arrow" /> Back
        </Link>
      </div>
    </div>
  );
}

export default ExperimentChooser;
