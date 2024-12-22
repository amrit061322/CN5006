import React, { useState } from "react";
import './Calculator.css';
import Button from "./Button.js";

function Calculator() {
    const [display, setDisplay] = useState("");
    
    const handleClick = (e) => {
        const value = e.target.value;
        
        switch(value) {
            case 'C':
            case 'CE':
                setDisplay("");
                break;
                
            case '=':
                try {
                    const result = eval(display);
                    setDisplay(result.toString());
                    alert(result);
                } catch (error) {
                    setDisplay("Error");
                }
                break;
                
            case 'square':
                try {
                    const currentNumber = eval(display);
                    if (isNaN(currentNumber)) {
                        setDisplay("Error");
                        return;
                    }
                    setDisplay((currentNumber * currentNumber).toString());
                } catch (error) {
                    setDisplay("Error");
                }
                break;
                
            case 'Show Me':
                alert("Error");
                break;
                
            default:
                setDisplay(display + value);
        }
    };

    const buttonLayout = [
        ['(', 'CE', ')', 'C'],
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['.', '0', '=', '/'],
        ['square'],
        ['Show Me']
    ];

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={display} />
            </div>
            
            {buttonLayout.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((label) => (
                        <Button 
                            key={label} 
                            label={label} 
                            ClickHandle={handleClick}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Calculator;