import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import "../styles/todoStyle.css";

function ToDo() {
	const [value, setValue] = useState("");
	const [newTask, setnewTask] = useState([]);
	const [newComplitedTask, setnewComplitedTask] = useState([]);
	const [allTask, setallTask] = useState('');

	const addTask = () => {
		setnewTask([...newTask, value]);
		setValue("");
	};

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

	const complete = (el) => {
		const newList = newTask.filter((todo) => todo !== el);
		setnewTask(() => newList);
		if ([...newTask].length === 1) setallTask('All tasks completed');
		if ([...newTask].length > 1) setallTask('');
		setnewComplitedTask((prevComplitedTask) => [...prevComplitedTask, el]);
		
	};

	const uncomplete = (el) => {
		const newList = newComplitedTask.filter((todo) => todo !== el);
		setnewComplitedTask(newList);
		setallTask('');
		setnewTask((prevTask) => [...prevTask, el]);
	};

	const deleteTask = (el) => {
		const newList = newTask.filter((todo) => todo !== el);
		setnewTask(newList);
		if ([...newTask].length === 1) setallTask('All tasks completed');
		if ([...newTask].length > 1) setallTask('');
	};

	return (
		<div>
			<div className="todoContainer">
			<h4>{allTask}</h4>
				<div className="inputContainer">
					<Input onchange={onchangeHandler} value={value} />
					<Button action={addTask} label="Add" />
				</div>
				<Output
					label="To Do"
					value={newTask.map((el) => (
						<div className="inputChekbox">
							<input
								type="checkbox"
								onChange={() => complete(el)}
							/>
							<span>{el}</span>

							<img
								src="https://i.imgur.com/nwOid4Q.png"
								onClick={() => deleteTask(el)}
							/>
						</div>
					))}
				>
					{" "}
				</Output>
			</div>
			<Output
				label="Completed"
				value={newComplitedTask.map((el) => (
					<div className="inputChekbox">
						<input
							type="checkbox"
							name="task"
							checked
							onChange={() => uncomplete(el)}
						/>
						<span>
							{" "}
							<del>{el}</del>{" "}
						</span>
					</div>
				))}
			></Output>
		</div>
	);
}

export default ToDo;
