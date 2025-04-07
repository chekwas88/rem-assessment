import React from "react";
import "./Label.css";

type LabelType = "private" | "heavy" | "";

interface LabelProps {
  type: LabelType;
}

const Label: React.FC<LabelProps> = ({ type }) => {
  const getIcon = () => {
    if (type === "private") return "⚠️";
    if (type === "heavy") return "🚫";
    return "";
  };

  const message = type === "heavy"? "Not suitable for heavy waste" : type === "private"? "Private property only" : ""

  return (
    <>
    {!!getIcon() ? (<div className={`label ${type}`}>
        <span className="icon">{getIcon()}</span>
        {message}
      </div>):null}
    </>
  )
};

export default Label;