import React, { useState } from "react";
import "./edit.css";
import { useNavigate } from "react-router-dom";

const Edit = ({ todo, setTodo }) => {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const navigate = useNavigate();

    const todoedit = (e) => {
        e.preventDefault();
        const updatedTodo = [...todo];
        updatedTodo[0] = { title, detail };
        setTodo(updatedTodo);
        setTitle("");
        setDetail("");
        navigate("/");
    };
    const todocancel = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <>
            <div className="add-app">
                <div className="add-todo-app">
                    <div className="add-todo">
                        <h1>
                            <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
                        </h1>
                        <h1>Edit Task</h1>
                    </div>
                    <div className="app-input">
                        <form onSubmit={todoedit}>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(f) => setTitle(f.target.value)}
                            
                            />
                            <input
                                type="text"
                                placeholder="Detail"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className="button-out">
                        <button className="edit-btn" onClick={todoedit}>
                            Update
                        </button>
                        <button className="edit-down" onClick={todocancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
