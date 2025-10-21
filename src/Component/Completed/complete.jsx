import React from "react";
import { useNavigate } from "react-router-dom";
import "./complete.css";

const Completed = ({ todo }) => {
  const navigate = useNavigate();

  return (
    <div className="complete">
      <div className="complete-todo-app">
        <div className="complete-todo">
          <h1>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => navigate("/")}
            ></i>
          </h1>
          <h1>Complete Tasks</h1>
        </div>

       <div className="inputbox">
  {todo.length > 0 && (
    <ul>
      {todo.map((complete, i) => (
        <li key={i} className="task">
          <div className="task-info">
            <p>{complete.title}</p>
            <h4>{complete.detail}</h4>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>

      </div>
    </div>
  );
};

export default Completed;
