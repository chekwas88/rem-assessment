
import React from 'react';
import './Loader.css';

interface LoaderProps {
    size?: number;
  width?: number;
}

const Loader: React.FC<LoaderProps> = ({size, width}) => {
    return (
        <div
            className="loader large thick"
            role="status"
            aria-label="Loading..."
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderWidth: `${width}px`,
              }}
        >
        </div>

    );
};

export default Loader;
