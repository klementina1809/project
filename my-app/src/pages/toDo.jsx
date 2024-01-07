import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import "../styles/todoStyle.css";

function ToDo() {
	const [value, setValue] = useState("");
	const [newTask, setnewTask] = useState([]);
	const [newComplitedTask, setnewComplitedTask] = useState([]);
	const [allTask, setallTask] = useState("Add new task");

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

	const controlTask = () => {
		console.log("newTask:", newTask);
		console.log("newComplitedTask:", newComplitedTask);
		
		if (newTask.length === 0 && newComplitedTask.length === 0)
			setallTask("Add new task");
		else if (newTask.length === 0 && newComplitedTask.length > 0)
			setallTask("All tasks completed");
		else if (newTask.length > 0)
			setallTask(() => ` ${newTask.length + 1} to complete`);
	};

	const addTask = () => {
		setnewTask((prevTask) => [...prevTask, value]);
		setValue("");
		controlTask();
	};
	const deleteTask = (el) => {
		const newList = newTask.filter((todo) => todo !== el);
		setnewTask(() => newList);
		controlTask();
	};

	const complete = (el) => {
		const filteredList = newTask.filter((todo) => todo !== el);
		setnewTask(() => filteredList);
		setnewComplitedTask((prevComplitedTask) => [...prevComplitedTask, el]);
		controlTask();
	};

	const uncomplete = (el) => {
		const newList = newComplitedTask.filter((todo) => todo !== el);
		setnewComplitedTask(() => newList);
		setnewTask((prevTask) => [...prevTask, el]);
		controlTask();
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
