import React, { useState } from 'react';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (value) => {
    const newCalculatorData = calculate(calculatorData, value);
    setCalculatorData(newCalculatorData);
  };

  const calculatorScreen = () => {
    if (calculatorData.next && calculatorData.operation && calculatorData.total) {
      return calculatorData.total + calculatorData.operation + calculatorData.next;
    }
    if (calculatorData.total && calculatorData.operation) {
      return calculatorData.total + calculatorData.operation;
    }
    if (!calculatorData.total) {
      return calculatorData.next || '0';
    }
    return calculatorData.total;
  };

  return (
    <div className="calculator_header">
      <h1 className="header">Let us do some math!</h1>
      <div className="parent">
        <Result value={calculatorScreen()} data-testid="display" />
        <Button onClick={handleButtonClick} className="white-btn" value="AC" />
        <Button onClick={handleButtonClick} className="white-btn" value="+/-" />
        <Button onClick={handleButtonClick} className="white-btn" value="%" />
        <Button onClick={handleButtonClick} className="orange-btn" value="/" />
        <Button onClick={handleButtonClick} className="white-btn" value="7" />
        <Button onClick={handleButtonClick} className="white-btn" value="8" />
        <Button onClick={handleButtonClick} className="white-btn" value="9" />
        <Button onClick={handleButtonClick} className="orange-btn" value="x" />
        <Button onClick={handleButtonClick} className="white-btn" value="4" />
        <Button onClick={handleButtonClick} className="white-btn" value="5" />
        <Button onClick={handleButtonClick} className="white-btn" value="6" />
        <Button onClick={handleButtonClick} className="orange-btn" value="-" />
        <Button onClick={handleButtonClick} className="white-btn" value="1" />
        <Button onClick={handleButtonClick} className="white-btn" value="2" />
        <Button onClick={handleButtonClick} className="white-btn" value="3" />
        <Button onClick={handleButtonClick} className="orange-btn" value="+" />
        <Button onClick={handleButtonClick} className="white-btn zero" value="0" />
        <Button onClick={handleButtonClick} className="white-btn" value="." />
        <Button onClick={handleButtonClick} className="orange-btn" value="=" />
      </div>
    </div>
  );
}

export default Calculator;
