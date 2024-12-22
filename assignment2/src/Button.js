import App from "./App";
import './App.css';
import './Calculator.css';
import React, { useState } from "react";

const Button = (props) => {
    const [showImage, setShowImage] = useState(false);

    // "Show Me" button
    if (props.label === "Show Me") {
        return (
            <button 
                className="ButtonStyle" 
                onClick={() => setShowImage(!showImage)}
                value={props.label}
            > 
                {props.label}
                {showImage && (
                    <img 
                    src={require('./Screenshot.png')}
                    alt="My Picture"
                    style={{ 
                        display: 'block',
                        maxWidth: '200px',
                        marginTop: '10px'
                    }} 
                    />
                )}
            </button>
        );
    }

    // "Square" button
    if (props.label === "square") {
        return (
            <button 
                className="ButtonStyle" 
                value={props.label} 
                onClick={props.ClickHandle}
            >
                {props.label}
            </button>
        );
    }

    // Default button 
    return (
        <button 
            className="ButtonStyle" 
            value={props.label} 
            onClick={props.ClickHandle}
        >
            {props.label}
        </button>
    );
};

export default Button;
