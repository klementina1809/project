import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import "../styles/todoStyle.css";

function ToDo() {
	const [value, setValue] = useState("");
	const [newTask, setnewTask] = useState([]);
	const [newComplitedTask, setnewComplitedTask] = useState([]);

	const addTask = () => {
		setnewTask([...newTask, value]);
		setValue("");
	};

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

	const complete = (el) => {
		const newList = [...newTask].filter((todo) => todo !== el);
		setnewTask(newList);
		setnewComplitedTask([...newComplitedTask, el]);
	};

	return (
		<div>
			<div className="todoContainer">
				<Input onchange={onchangeHandler} value={value} />
				<Button action={addTask} label="Add" />
				<Output
					label="To Do"
					value={newTask.map((el) => (
						<div>
							<input
								type="checkbox"
								onChange={() => complete(el)}
							/>
							<span>{el}</span>
						</div>
					))}
				>
					{" "}
				</Output>
			</div>
			<Output
				label="Completed"
				value={newComplitedTask.map((el) => (
					<div>
						<input type="checkbox" name="task" disabled checked />
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
