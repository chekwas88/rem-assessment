import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'primary' | 'secondary';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'primary', disabled = false }) => {
    return (
        <button
            className={`button ${type} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;