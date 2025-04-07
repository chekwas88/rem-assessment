import React from "react";
import "./Success.css";
import Button from "../button/Button";


interface SuccessProps {
    closeModal: () => void;
    skip: string;
}

const Success: React.FC<SuccessProps> = ({closeModal, skip}) => {
  return (
    <div className="wrapper">
      <div className="success-card">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            viewBox="0 0 48 48"
            fill="green"
          >
            <path d="M4 12v24h40V12H4zm20 13L6 14h36L24 25z" />
          </svg>
        </div>
        <h2>{`${skip} Selected`}</h2>
        <p>Thank you for your patronage!</p>
        <button className="close" onClick={closeModal}>
          ×
        </button>
        <Button label="Home 🏠"  onClick={closeModal}/>
      </div>
    </div>
  );
};

export default Success;
