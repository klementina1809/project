import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaTrash, FaPen } from "react-icons/fa";
import useLocalStorage from "use-local-storage";

import "../styles/todoStyle.css";

import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import ListContainer from "../components/ListContainer";

function ToDo() {
	const [value, setValue] = useState("");
	const [newTask, setnewTask] = useState([]);
	const [newComplitedTask, setnewComplitedTask] = useState([]);
	const [total, setTotal] = useState(0);
	// const [allTask, setallTask] = useState("Add new task");

	const [username, setUsername] = useLocalStorage("name", "");

	useEffect(() => {
		//quando [] è vuoto viene eseguito solo una volta
		//al render del component dentro cui è inserito
		console.log("Render del component");
		setUsername("Mario");
	}, []);

	useEffect(() => {
		console.log("username:", username);
	}, [username]);

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

	// const controlTask = () => {
	// 	console.log("newTask:", newTask);
	// 	console.log("newComplitedTask:", newComplitedTask);

	// 	if (newTask.length === 0 && newComplitedTask.length === 0)
	// 		setallTask("Add new task");
	// 	else if (newTask.length === 0 && newComplitedTask.length > 0)
	// 		setallTask("All tasks completed");
	// 	else if (newTask.length > 0)
	// 		setallTask(() => ` ${newTask.length} to complete`);
	// };

	const addTask = () => {
		setnewTask((prevTask) => {
			const newTaskList = [...prevTask, value];
			return newTaskList;
		});
		setValue("");
		setTotal(total + 1);
	};

	const clearAllTask = () => {
		setnewTask([]);
		setnewComplitedTask([]);
	};

	const deleteTask = (el) => {
		const newList = newTask.filter((todo) => todo !== el);
		setnewTask(() => {
			return newList;
		});
	};

	const editTask = (el) => {
		const newList = newTask.filter((todo) => todo !== el);
		setnewTask(() => {
			return newList;
		});
		setValue(el);
	};

	const complete = (el) => {
		const filteredList = newTask.filter((todo) => todo !== el);
		setnewTask(() => {
			return filteredList;
		});
		setnewComplitedTask((prevComplitedTask) => [...prevComplitedTask, el]);
	};

	const uncomplete = (el) => {
		const newList = newComplitedTask.filter((todo) => todo !== el);
		setnewComplitedTask(() => newList);
		setnewTask((prevTask) => {
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
						tasks={newTask}
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
						tasks={newComplitedTask}
						label="Completed"
						checked={true}
						action={uncomplete}
					/>
				</Col>
			</Row>
			<div>
				<div>
					<h1>-- Inizio nuovo codice --</h1>
					<ListContainer
						tasks={newTask}
						label="To Do"
						checked={false}
						action={complete}
						//onChange={...}
						//onEdit={...}
						//onDelete={...}
					/>
					<ListContainer
						tasks={newComplitedTask}
						label="Completed"
						checked={true}
						action={uncomplete}
					/>
					<h1>-- Fine nuovo codice --</h1>
				</div>
				<div className="todoContainer">
					{newTask.length === 0 && newComplitedTask.length === 0 ? (
						<h4 className="green">Add your first task</h4>
					) : newTask.length === 0 && newComplitedTask.length > 0 ? (
						<h4 className="red">All tasks completed</h4>
					) : (
						<h4 className="orange">{newTask.length} to complete</h4>
					)}

					<div className="inputContainer">
						<Input onchange={onchangeHandler} value={value} />
						<Button classname="btn" action={addTask} label="Add" />
					</div>
					<Output
						label="To Do"
						value={newTask.map((el) => (
							<div className="inputChekbox">
								<input type="checkbox" onChange={() => complete(el)} />
								<span>{el}</span>

								<div className="img-container">
									<FaPen
										color="#304d30"
										size={24}
										style={{ marginRight: "10px", cursor: "pointer" }}
										onClick={() => editTask(el)}
									/>
									<FaTrash
										color="#304d30"
										size={24}
										style={{ cursor: "pointer" }}
										onClick={() => deleteTask(el)}
									/>
								</div>
							</div>
						))}
					/>
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
				total: {total}
				<div className="contain-buttons">
					<div className="btn-container">
						<Button
							classname="btn"
							label="clear todo"
							action={() => setnewTask([])}
						></Button>
						<Button
							classname="btn"
							label="clear completed"
							action={() => setnewComplitedTask([])}
						></Button>
					</div>
					<div>
						<Button
							classname="btn clear-all"
							label="clear all taks"
							action={() => clearAllTask()}
						></Button>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default ToDo;
