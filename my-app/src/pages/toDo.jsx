import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import "../styles/todoStyle.css";

function ToDo() {
	// const [task, setTask] = useState("");
	const [value, setValue] = useState("");

	const clearTask = () => {
		setValue('');
	};

	const onchangeHandler = (event) => {
		setValue(event.target.value) ;
	};

	return (
		<div>
			<div className="todoContainer">
				<Input onchange={onchangeHandler}>{value}</Input>
				<Button action="clearTask" label="Clear"></Button>
				<Output ></Output>
			</div>
		</div>
	);
}

export default ToDo;
