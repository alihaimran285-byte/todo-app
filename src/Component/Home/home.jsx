import React from "react";
import "./home.css";
import Playlist from "../../assets/image/Playlist.png";
import tick from "../../assets/image/Tick.png";
import trash from "../../assets/image/Trash.png";
import pencil from "../../assets/image/Pencil.png";
import checkcircle from "../../assets/image/CheckCircle.png";
import { Link } from "react-router-dom";

const Home = ({ todo,setTodo }) => {

 const Delete = (index) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this?");
  if (confirmDelete) {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  }
};
  

  let content = "";
  if (todo.length === 0) {
    content = <p>Add your List</p>;
  } else { content = (
      <ul>
        {todo.map((both, i) => (
          <li key={i} className="todo">
            <div className="left">
              <div className="title">
                <p>{both.title}</p>
                <h4>{both.detail}</h4>
              </div>
            </div>
            <div className="right">
              <div className="todo-item">
                <Link to="/edit">
                  <img src={pencil} alt="Edit" />
                </Link>
                <button className="icon-button" onClick={() => Delete(i)}>
                  <img src={trash} alt="Delete" />
                </button>
                <Link to='/complete'><button className="icon-button" >
                  <img src={checkcircle} alt="Done" />
                </button></Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="todo-app">
            <div className="nav-title">
              <h2>TODO APP</h2>
            </div>
            <div className="calender">
              <h2>
                <i className="fa-solid fa-calendar-days"></i>
              </h2>
            </div>
          </div>
          <div className="footer">
            <div className="footer-left">
              <div>
                <img src={Playlist} alt="Playlist" />
                <p>All</p>
              </div>
            </div>
            <div className="footer-right">
              <img src={tick} alt="Complete" />
              <p>Complete</p>
            </div>
          </div>
          
          <div className="input-box">{content}</div>
          <div className="button-up">
            <Link to="/add">
              <button className="button-down">
                <i className="fa-solid fa-plus"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
