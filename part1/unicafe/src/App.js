import { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = (props) => {
  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClickHandler = () => {
    setGood(good + 1);
    console.log('clicked good')
  };
  const badClickHandler = () => {
    setBad(bad + 1);
  };
  const neutralClickHandler = () => {
    setNeutral(neutral + 1);
  };
  return (
    <div>
      <Header text="Give Feedback"></Header>
      <Button onClick={goodClickHandler} text="good"></Button>
      <Button onClick={neutralClickHandler} text="neutral"></Button>
      <Button onClick={badClickHandler} text="bad"></Button>
      <Header text="Statistics"></Header>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
