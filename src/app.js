import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { tasks } from "./data/tasks.json";

const App = () => {
  const [taskList, setTaskList] = useState(tasks);
  console.log(taskList);
  return (
    <div>
      <header>
        <Link to="/">Home</Link>{" "}
        <Link to="/new-task" taskList={taskList}>
          Add New Task
        </Link>
      </header>
      <div>
        <Router>
          <AddTask path="/new-task" />
        </Router>
        <TaskList taskList={taskList} />
      </div>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
