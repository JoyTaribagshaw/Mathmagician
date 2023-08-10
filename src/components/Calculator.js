/* eslint-disable */
import React, {useState} from 'react';
import Button from './Button';
import Result from './Result';

function Calculator() {
  const [result, setResult] = useState('');
  
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the expression and set the result
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      // Clear the result
      setResult('');
    } else {
      // Append the clicked button value to the result
      setResult(result + value);
    }
  };

  return (
    <div className="parent">
      <Result value={result} />
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
  );
}

export default Calculator;
