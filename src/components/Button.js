import React from "react";

const Button = (props) => {
  const btnClassName =
    "contact-btn" + (props.btnName == "Email" ? " email-btn" : " linkedin-btn");

  const iconClassName =
    "contact-icon" +
    (props.btnName == "Email" ? " email-icon" : " linkedin-icon");

  return (
    <div>
      <button className={btnClassName}>
        {props.btnName}
        <div className={iconClassName}></div>
      </button>
    </div>
  );
};

export default Button;
