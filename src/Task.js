import React from "react";

const Task = ({ taskItem }) => {
  return (
    <article className="task-card">
      <h2 className="task-name">NEEDED: {taskItem.title}</h2>
      <p className="task-info">{taskItem.location}</p>
      <p>{taskItem.date}</p>
      {taskItem.body ? <p>{taskItem.body}</p> : ""}
      <div>
        {/* TODO: Make conditional - if this is your task, show completed button not claim */}
        {taskItem.claimed ? (
          <button className="claim-button claimed" disabled>
            Claim
          </button>
        ) : (
          <button
            className="claim-button"
            onClick={() => {
              //TODO: actually make this button claim
              taskItem.claimed = true;
              console.log(taskItem);
            }}
          >
            Claim
          </button>
        )}
      </div>
    </article>
  );
};

export default Task;
