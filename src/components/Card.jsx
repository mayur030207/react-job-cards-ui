import React from "react";
import { VscBookmark } from "react-icons/vsc";

const Card = (props) => {
  
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={props.logo}
          alt="Company Logo"
        />
        <button className="save-btn">
          <VscBookmark />
        </button>
      </div>

      <div className="content">
        <div className="header">
          <h4>{props.name}</h4>
          <span className="time">{props.days} days ago</span>
        </div>
        <h2>{props.title}</h2>
        <div className="tags">
          <span>{props.type}</span>
          <span>{props.level} Level</span>
        </div>
        <div className="footer">
          <div className="salary-location">
            <h3>{props.pay}</h3>
            <span>{props.location}</span>
          </div>
          <button className="apply-btn">Apply now!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
