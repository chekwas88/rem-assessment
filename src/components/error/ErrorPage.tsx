import React from "react";
import "./ErrorPage.css";

interface ErrorPageProps {
  code?: number;
  message?: string;
  retry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  code = 404,
  message = "Skips failed to load",
  retry,
}) => {
  return (
    <div className="error-wrapper">
      <div className="error-card">
        <div className="error-icon">🚫</div>
        <h1 className="error-code">{code}</h1>
        <p className="error-message">{message}</p>
        <button className="error-btn" onClick={retry}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
