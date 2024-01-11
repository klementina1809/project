import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaTrash, FaPen } from "react-icons/fa";

import "../styles/todoStyle.css";

import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import ListContainer from "../components/ListContainer";

function ToDo() {
	const [value, setValue] = useState("");
	const [tasks, setTasks] = useState([]);
	const [tasksCompleted, setTasksCompleted] = useState([]);
	const [total, setTotal] = useState(0);

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

	const addTask = () => {
		setTasks((prevTask) => {
			const newTaskList = [...prevTask, value];
			return newTaskList;
		});
		setValue("");
		setTotal(total + 1);
	};

	const clearAllTask = () => {
		setTasks([]);
		setTasksCompleted([]);
	};

	const deleteTask = (el) => {
		const newList = tasks.filter((todo) => todo !== el);
		setTasks(() => {
			return newList;
		});
	};

	const editTask = (el) => {
		const newList = tasks.filter((todo) => todo !== el);
		setTasks(() => {
			return newList;
		});
		setValue(el);
		setTotal(total - 1);
	};

	const complete = (el) => {
		const filteredList = tasks.filter((todo) => todo !== el);
		setTasks(() => {
			return filteredList;
		});
		setTasksCompleted((prevComplitedTask) => [...prevComplitedTask, el]);
	};

	const uncomplete = (el) => {
		const newList = tasksCompleted.filter((todo) => todo !== el);
		setTasksCompleted(() => newList);
		setTasks((prevTask) => {
			return [...prevTask, el];
		});
	};

	return (
		<Container>
			<Row>
				<Col sm={3}></Col>
				<Col sm={6}>
					<h1>TITOLO</h1>
				</Col>
			</Row>

			<Row>
				<Col sm={3}></Col>
				<Col sm={6}>
					<ListContainer
						tasks={tasks}
						label="To Do"
						checked={false}
						action={complete}
						//onChange={...}
						//onEdit={...}
						//onDelete={...}
					/>
				</Col>
			</Row>

			<Row>
				<Col sm={3}></Col>
				<Col sm={6}>
					<ListContainer
						tasks={tasksCompleted}
						label="Completed"
						checked={true}
						action={uncomplete}
					/>
				</Col>
			</Row>
		</Container>

		// <div>
		// 	<div>
		// 		<h3>-- Inizio nuovo codice --</h3>
		// 		<ListContainer
		// 			tasks={tasks}
		// 			label="To Do"
		// 			checked={false}
		// 			action={complete}
		// 			//onChange={...}
		// 			//onEdit={...}
		// 			//onDelete={...}
		// 		/>
		// 		<ListContainer
		// 			tasks={tasksCompleted}
		// 			label="Completed"
		// 			checked={true}
		// 			action={uncomplete}
		// 		/>
		// 		<h3>-- Fine nuovo codice --</h3>
		// 	</div>
		// <div className="todoContainer">
		// 	{tasks.length === 0 && tasksCompleted.length === 0 ? (
		// 		<h4 className="green">Add your first task</h4>
		// 	) : tasks.length === 0 && tasksCompleted.length > 0 ? (
		// 		<h4 className="red">All tasks completed</h4>
		// 	) : (
		// 		<h4 className="orange">{tasks.length} to complete</h4>
		// 	)}

		// 		<div className="inputContainer">
		// 			<Input onchange={onchangeHandler} value={value} />
		// 			<Button classname="btn" action={addTask} label="Add" />
		// 		</div>
		// 		<Output
		// 			label="To Do"
		// 			value={tasks.map((el) => (
		// 				<div className="inputChekbox">
		// 					<input type="checkbox" onChange={() => complete(el)} />
		// 					<span>{el}</span>

		// 					<div className="img-container">
		// 						<FaPen
		// 							color="#304d30"
		// 							size={24}
		// 							style={{ marginRight: "10px", cursor: "pointer" }}
		// 							onClick={() => editTask(el)}
		// 						/>
		// 						<FaTrash
		// 							color="#304d30"
		// 							size={24}
		// 							style={{ cursor: "pointer" }}
		// 							onClick={() => deleteTask(el)}
		// 						/>
		// 					</div>
		// 				</div>
		// 			))}
		// 		/>
		// 	</div>
		// 	<Output
		// 		label="Completed"
		// 		value={tasksCompleted.map((el) => (
		// 			<div className="inputChekbox">
		// 				<input
		// 					type="checkbox"
		// 					name="task"
		// 					checked
		// 					onChange={() => uncomplete(el)}
		// 				/>
		// 				<span>
		// 					{" "}
		// 					<del>{el}</del>{" "}
		// 				</span>
		// 			</div>
		// 		))}
		// 	></Output>
		// 	total: {total}
			// <div className="contain-buttons">
			// 	<div className="btn-container">
			// 		<Button
			// 			classname="btn"
			// 			label="clear todo"
			// 			action={() => setTasks([])}
			// 		></Button>
			// 		<Button
			// 			classname="btn"
			// 			label="clear completed"
			// 			action={() => setTasksCompleted([])}
			// 		></Button>
			// 	</div>
			// 	<div>
			// 		<Button
			// 			classname="btn clear-all"
			// 			label="clear all taks"
			// 			action={() => clearAllTask()}
			// 		></Button>
			// 	</div>
			// </div>
		// </div>
	);
}

export default ToDo;
