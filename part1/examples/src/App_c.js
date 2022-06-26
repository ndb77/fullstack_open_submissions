import { useState } from "react";

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };
  const reduceOne = () => {
    setCounter(counter - 1);
  };
  const resetCount = () => {
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={addOne} text="Add One" />
      <Button onClick={reduceOne} text="Reduce One" />
      <Button onClick={resetCount} text="Reset Count" />
    </div>
  );
};

export default App;
