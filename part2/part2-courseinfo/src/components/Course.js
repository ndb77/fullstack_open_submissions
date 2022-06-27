import React from "react";

const Course = ({ course }) => {
  console.log(course.parts);

  let sumExercises = course.parts.reduce(function (sum, part) {
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <h3>{course.name}</h3>
      <ul>
        {course.parts.map((part) => {
          return (
            <li key={part.id}>
              {part.name} {part.exercises}
            </li>
          );
        })}
        <li>
          <b>total exercises: {sumExercises}</b>
        </li>
      </ul>
    </div>
  );
};

export default Course;
