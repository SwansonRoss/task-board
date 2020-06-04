import React, { useState } from "react";

const AddTask = ({ taskList }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [body, setBody] = useState("");

  const addNewTask = () => {
    let newTask = {
      title: { title }.title,
      body: { body }.body,
      date: `${date} ${time}`,
      location: { location }.location,
      claimed: false,
      completed: false,
    };
    //TODO: Actually store this
    taskList.push(newTask);
  };

  return (
    <form
      id="newTask"
      onSubmit={(e) => {
        e.preventDefault();
        addNewTask();
      }}
    >
      <label htmlFor="task-title" className="form-input">
        <div className="form-label">What do you need:</div>
        <input
          id="task-title"
          type="text"
          placeholder="What do you need done?"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </label>
      <label htmlFor="task-location" className="form-input">
        <div className="form-label">Where do you need it:</div>
        <input
          id="task-location"
          type="text"
          placeholder="Where at?"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
      </label>
      <label htmlFor="task-time" className="form-input">
        <div className="form-label">When do you need it:</div>
        <div>
          <input
            id="task-time"
            type="date"
            value={date}
            onChange={(e) => {
              console.log(e.target.value);
              setDate(e.target.value);
            }}
          ></input>
          <input
            id="task-time"
            type="time"
            value={time}
            onChange={(e) => {
              console.log(e);
              setTime(e.target.value);
            }}
          ></input>
        </div>
      </label>
      <label htmlFor="task-description" className="form-input">
        <div className="form-label">Additional Info:</div>
        <textarea
          id="task-description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

export default AddTask;
