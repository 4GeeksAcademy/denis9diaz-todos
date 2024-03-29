import React, { useState } from "react";

const Home = () => {
    const [input, setInput] = useState([]);
    const [todos, setTodos] = useState([]);

    const inputKeyPress = (event) => {
        if (event.key === "Enter"){
            setTodos([...todos, input]);
            setInput("");
        }
    };

    const deleteTodo = (index) => {
        return () => {
            setTodos(todos.filter((_, i) => i !== index));
        };
    };

    return (
        <div className="list container">
            <h2 className="title">TODOS LIST</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={inputKeyPress}/>
                </li>
                {todos.map((todo, index) => (
                    <li className="list-group-item" key={index}>
                        {todo}
                            <button
                            type="button"
                            className="btn deleteButton"
                            onClick={deleteTodo(index)}>X</button>
                    </li>
                ))}
                <li className="tasks list-group-item">{todos.length} tasks</li>
            </ul>
        </div>
    );
};

export default Home;
