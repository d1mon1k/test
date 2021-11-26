import React from "react";
import cl from "./MyButton.module.css";

const MyButton = ({ callBack, children, styleClass, ...props }) => {
  return (
    <button {...props} className={[cl.btn, cl[styleClass]].join(" ")}>
      {children}
    </button>
  );
};

export default MyButton;
