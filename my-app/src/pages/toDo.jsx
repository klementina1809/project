import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import "../styles/todoStyle.css";

function ToDo() {
	const [value, setValue] = useState("");
	const [newTask, setnewTask] = useState([]);

	const addTask = () => {
		setnewTask([...newTask, value]);
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
        label='To Do'
					value={newTask.map((el) => (
						<div>
							<input type="checkbox" name="task" />
							<span>{el}</span>
						</div>
					))}
				>
					{" "}
				</Output>
			</div>
      <Output label='Completed'>

      </Output>
		</div>
	);
}

export default ToDo;
