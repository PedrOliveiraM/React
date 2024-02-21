import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "./Task.css";
import "./Var.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <>
      <div
        className="task-container"
        style={task.completed ? { borderLeft: "6px solid var(--orange)" } : {}}
      >
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
          {task.title}
        </div>

        <div className="task-buttons-container">
          <button onClick={handleTaskDetailsClick} className="task-button-info">
            <CgInfo />
          </button>

          <button
            onClick={() => handleTaskDeletion(task.id)}
            className="task-button-delete"
          >
            <CgClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
