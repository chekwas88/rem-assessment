import React from "react";
import Button from "../button/Button";
import Label from "../label/Label";
import "./SkipCard.css"

interface SkipCardProps {
  title: string;
  features: string[];
  price: number;
  isSelected?: boolean;
  onSelect: () => void;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
}

const SkipCard: React.FC<SkipCardProps> = ({
  title,
  features,
  price,
  isSelected = false,
  onSelect,
  allowedOnRoad,
  allowsHeavyWaste
}) => {

  const buttonText = isSelected ? "Selected" : `Choose ${title}`
  const getPrivateLabel = !allowedOnRoad ? "private" : "" 
  const getHeavyLabel = !allowsHeavyWaste ? "heavy" : ""

  return (
    <div className={`card ${isSelected ? "selected" : ""} ${!allowsHeavyWaste ? "masked" : ""}`} onClick={onSelect}>
      <h2>{title}</h2>
      <Label type={getPrivateLabel}/>
      <Label type={getHeavyLabel}/>
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
