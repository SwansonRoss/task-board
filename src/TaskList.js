import React from "react";
import Task from "./Task";

const TaskList = ({ taskList }) => {
  return (
    <section className="task-list">
      {taskList.length === 0 ? (
        <h2>No Tasks to display</h2>
      ) : (
        taskList.map((task) => (
          <Task taskItem={task} key={task.title} /> //todo: give unique key
        ))
      )}
    </section>
  );
};

export default TaskList;
