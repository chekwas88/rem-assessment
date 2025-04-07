import React from "react";
import Button from "../button/Button";
import "./SkipCard.css"

interface SkipCardProps {
  title: string;
  features: string[];
  price: number;
  isSelected?: boolean;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  title,
  features,
  price,
  isSelected = false,
  onSelect
}) => {

    const buttonText = isSelected ? "Selected" : `Choose ${title}`
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      <h2>{title}</h2>
      <ul>
        {features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
      <p>{`💵 £${price.toFixed(2)} / week`}</p>
      <Button label={buttonText} onClick={onSelect}/>
    </div>
  );
};

export default SkipCard;
