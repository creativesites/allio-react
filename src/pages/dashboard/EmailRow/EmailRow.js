import Checkbox from '@mui/material/Checkbox';
import React from "react";
import "./EmailRow.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function EmailRow({ id, title, subject, description, time }) {



  return (
    <div className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
          <StarBorderIcon />
          <LabelImportantIcon />
      </div>
      <h4 className="emailRow-title">{title}</h4>
      <div className="emailRow-message">
        <p>
          {subject}{" "}
          <span className="emailRow-description"> - {description}</span>
        </p>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
