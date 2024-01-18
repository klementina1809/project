import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { Container, Row, Col } from "react-grid-system";
import { NavLink } from "react-router-dom";

import "../styles/todoStyle.css";
import "../styles/btnStyle.css";
import "../styles/inputStyle.css";

import Input from "../components/Input";
import Button from "../components/Button";
import ListContainer from "../components/ListContainer";
import Comment from "../components/Comment";
import Select from "../components/Select";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ToDo(props) {
	const { categories } = props;

	const [value, setValue] = useState("");
	const [tasks, setTasks] = useLocalStorage("tasks", JSON.stringify([]));
	const [tasksCompleted, setTasksCompleted] = useLocalStorage(
		"tasksCompleted",
		JSON.stringify([])
	);
	const [taskNextId, setTaskNextId] = useState(0);

	const [categorySelected, setCategorySelected] = useState(0);

	const handleTaskAction = (action, el) => {
		switch (action) {
			case "delete":
				deleteTask(el);
				break;
			case "copy":
				copyTask(el);
				break;
			case "edit":
				editTask(el);
				break;
		}
	};

	const selectChange = (e) => {
		setCategorySelected(e.target.value);
	};

	const onchangeHandler = (e) => {
		setValue(e.target.value);
	};

	const addTask = () => {
		const category = categories.find(
			(category) => category.id === +categorySelected
		);
		console.log(categorySelected);
		const task = {
			id: taskNextId,
			name: value,
			category: category,
		};
		const tasksObj = JSON.parse(tasks);
		setTasks(JSON.stringify([...tasksObj, task]));
		setValue("");
		setTaskNextId(taskNextId + 1);
	};

	// useEffect(() => {
	// 	console.log("-----", tasks);
	// }, [tasks]);

	const clearAllTask = () => {
		setTasks(JSON.stringify([]));
		setTasksCompleted(JSON.stringify([]));
	};

	const deleteTask = (el) => {
		const filteredList = JSON.parse(tasks).filter(
			(task) => task.id !== el.id
		);
		setTasks(JSON.stringify(filteredList));
	};

	const copyTask = (el) => {
		const category = categories.find(
			(category) => category.id === +categorySelected
		);
		const task = {
			id: taskNextId,
			name: el.name + " (2)",
			category: category,
		};
		setTaskNextId(taskNextId + 1);
		const tasksObj = JSON.parse(tasks);
		setTasks(() => JSON.stringify([...tasksObj, task]));
	};

	const editTask = (el) => {
		const filteredList = JSON.parse(tasks).filter(
			(task) => task.id !== el.id
		);
		setTasks(JSON.stringify(filteredList));
		setValue(el.name);
	};

	const complete = (el) => {
		const filteredList = JSON.parse(tasks).filter(
			(task) => task.id !== el.id
		);
		setTasks(JSON.stringify(filteredList));
		const tasksCompletedObj = JSON.parse(tasksCompleted);
		setTasksCompleted(JSON.stringify([...tasksCompletedObj, el]));
	};

	const uncomplete = (el) => {
		const filteredList = JSON.parse(tasksCompleted).filter(
			(task) => task.id !== el.id
		);
		setTasksCompleted(JSON.stringify(filteredList));
		const tasksObj = JSON.parse(tasks);
		setTasks(JSON.stringify([...tasksObj, el]));
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			addTask();
		}
	};

	return (
		<Container>
			<Header />
			<Row className="align-center">
				<Col sm={6}>
					<Comment
						tasksNumber={JSON.parse(tasks).length}
						completedTasksNumber={JSON.parse(tasksCompleted).length}
					/>
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={6} className="input-container">
					<Input
						onchange={onchangeHandler}
						value={value}
						onKeyDown={handleKeyPress}
					/>
					<Select
						name="category"
						onChange={selectChange}
						data={categories}
						selectedItem={categorySelected}
					/>
					<Button className="btn" onClick={addTask} label="Add" />
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={6}>
					<ListContainer
						tasks={JSON.parse(tasks)}
						label="To Do"
						checked={false}
						onCheck={complete}
						// onEdit={editTask}
						// onDelete={deleteTask}
						// onCopy={copyTask}
						action={handleTaskAction}
					/>
				</Col>
			</Row>

			<Row className="align-center">
				<Col sm={6}>
					<ListContainer
						tasks={JSON.parse(tasksCompleted)}
						label="Completed"
						checked={true}
						onCheck={uncomplete}
					/>
				</Col>
			</Row>
			<Row className="align-center mt-10">
				<Col sm={6}>
					<Button
						className="btn clear-all"
						label="clear all tasks"
						onClick={() => clearAllTask()}
					/>
				</Col>
			</Row>
			<Row className="align-center mt-10">
				<Col sm={3}>
					<Button
						className="btn clear"
						label="clear todo"
						onClick={() => setTasks(JSON.stringify([]))}
					/>
				</Col>
				<Col sm={3}>
					<Button
						className="btn clear"
						label="clear completed"
						onClick={() => setTasksCompleted(JSON.stringify([]))}
					/>
				</Col>
			</Row>
			<Footer />
		</Container>
	);
}

export default ToDo;
