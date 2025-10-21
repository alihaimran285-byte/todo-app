import React, { useState } from "react";
import './add.css'
import { useNavigate } from "react-router-dom";

const Add = ({ todo, setTodo }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    
    if (title !== "" && detail !== "") {
      setTodo(prev => [...prev, { title, detail }]);
      setTitle('');
      setDetail('');
      navigate("/"); 
    } else {
      alert("Please fill out both fields before adding a task.");
    }
  };

  return (
    <>
      <div className="add-app">
        <div className="add-todo-app">
          <div className="add-todo">
            <h1>
              <i
                className="fa-solid fa-arrow-left"
                onClick={() => navigate('/')}
              ></i>
            </h1>
            <h1>Add Task</h1>
          </div>

          <div className="app-input">
            <form onSubmit={submit}>
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                type="text"
                id="detail"
                placeholder="Detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                required
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
