import React from "react";
import { useSelector } from "react-redux";
export const Task = () => {
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
