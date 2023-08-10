/*eslint-disable*/
import React, { useState } from 'react';
// import * as math from 'mathjs';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculate';

function Calculator() {
const handleButtonClick = (e) => {
  console.log(e.target);
}
  return (
    <div className="parent">
      <Result value={0} />
      {/* <Button onClick={handleButtonClick} className="white-btn" value="AC" />
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
      <Button onClick={handleButtonClick} className="white-btn" value="1" /> */}
      <Button onClick={(e) => handleButtonClick(e)} className="white-btn" value="2" />
      {/* <Button onClick={handleButtonClick} className="white-btn" value="3" />
      <Button onClick={handleButtonClick} className="orange-btn" value="+" />
      <Button onClick={handleButtonClick} className="white-btn zero" value="0" />
      <Button onClick={handleButtonClick} className="white-btn" value="." />
      <Button onClick={handleButtonClick} className="orange-btn" value="=" /> */}
    </div>
  );
};

export default Calculator;
