import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import "../styles/todoStyle.css";

function ToDo() {
	const [value, setValue] = useState("");
	const [task, setTask] = useState([]);

	const addTask = () => {
		setTask([...task, value]);
		setValue("");
	};

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<div className="todoContainer">
				<Input onchange={onchangeHandler} value={value} />
				<Button action={addTask} label="Add" />
				<Output
					value={task.map((el) => (
						<li>{el}</li>
					))}
				>
					{" "}
				</Output>
			</div>
		</div>
	);
}

export default ToDo;
