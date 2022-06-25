const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.partNumber[0]} exercises={props.exercisesNumber[0]}/>
      <Part part={props.partNumber[1]} exercises={props.exercisesNumber[1]}/>
      <Part part={props.partNumber[2]} exercises={props.exercisesNumber[2]}/>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content partNumber={[part1,part2,part3]} exercisesNumber={[exercises1,exercises2,exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
