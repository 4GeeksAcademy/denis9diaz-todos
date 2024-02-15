import React, { useState } from "react";

const Home = () => {
	const [input, setInput] = useState ([])
	const [todos, setTodos] = useState ([])

	const inputKeyPress = (event) => {
			if (event.key == "Enter") {
			setTodos([...todos, input])
			setInput("")
		}
	}
	return (
		<div className="list container">
			<h1 className="title">Todo list</h1>
			<ul className="list-group">
				<li className="list-group-item"><input onKeyDown={inputKeyPress} type="text" placeholder="What needs to be done?" value={input} onChange={(e) => {
					setInput(e.target.value)
				}}></input></li>
				{todos.map((todo, index) => {
					return (
						<li className="list-group-item" key={index}>{todo}<button type="button" className="btn deleteButton" onClick={()=>{setTodos(todos.filter((_, i) => i !== index))}}>X</button></li>
					)
				})}
				<li className="tasks list-group-item">{todos.length} tasks</li>
			</ul>
		</div>
	);
};

export default Home;
