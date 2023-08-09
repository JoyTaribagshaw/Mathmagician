import Button from './Button';
import Result from './Result';

function Calculator() {
  return (
    <div className="parent">
      <Result />
      <Button className="white-btn" value="AC" />
      <Button className="white-btn" value="+/-" />
      <Button className="white-btn" value="%" />
      <Button className="orange-btn" value="/" />
      <Button className="white-btn" value="7" />
      <Button className="white-btn" value="8" />
      <Button className="white-btn" value="9" />
      <Button className="orange-btn" value="x" />
      <Button className="white-btn" value="4" />
      <Button className="white-btn" value="5" />
      <Button className="white-btn" value="6" />
      <Button className="orange-btn" value="-" />
      <Button className="white-btn" value="1" />
      <Button className="white-btn" value="2" />
      <Button className="white-btn" value="3" />
      <Button className="orange-btn" value="+" />
      <Button className="white-btn zero" value="0" />
      <Button className="white-btn" value="." />
      <Button className="orange-btn" value="=" />
    </div>
  );
}

export default Calculator;
