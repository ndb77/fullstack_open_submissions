import { useState } from "react";

const QuoteDisplay = ({ anecdote, votes }) => {
  return (
    <>
      <div>
        <h1>Anecdote of the Day</h1>
      </div>
      <div>" {anecdote} "</div>
      <div>has {votes} votes</div>
    </>
  );
};

const BestQuote = ({ bestQuote, bestQuoteVotes }) => {
  if (bestQuoteVotes === 0) {
    return (
      <div>
        <div>
          <h1>Best Quote</h1>
        </div>
        <p>A Best Quote has not been selected yet</p>
      </div>
    );
  }
  return (
    <>
      <div>
        <h1>Best Quote</h1>
      </div>
      <div>{bestQuote}</div>
      <div>Votes:{bestQuoteVotes}</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const generateRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * 6);
    setSelected(randomNumber);
  };

  let bestQuoteVotes = 0;
  let bestQuoteIndex = 0;
  for (let quote in votes) {
    if (votes[quote] > bestQuoteVotes) {
      bestQuoteVotes = votes[quote];
      bestQuoteIndex = quote;
    }
  }
  return (
    <div>
      <QuoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <div>
        <button
          onClick={() => {
            setVotes({ ...votes, [selected]: votes[selected] + 1 });
          }}
        >
          Vote
        </button>
        <button onClick={generateRandomQuote}>New quote</button>
      </div>
      <BestQuote
        bestQuoteVotes={bestQuoteVotes}
        bestQuote={anecdotes[bestQuoteIndex]}
      />
    </div>
  );
};

export default App;
