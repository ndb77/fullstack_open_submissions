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

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let avg = (good * 1 + neutral * 0 + bad * -1) / all;
  let pct_positive = good / all;

  if (all === 0) {
    return <p>No Feedback Given</p>;
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={pct_positive} />
        </tbody>
      </table>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClickHandler = () => {
    setGood(good + 1);
    console.log("clicked good");
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
