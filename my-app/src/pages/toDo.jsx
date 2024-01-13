import React, { useState, useEffect } from "react";
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
	const [tasks, setTasks] = useState([]);
	const [tasksCompleted, setTasksCompleted] = useState([]);
	const [taskNextId, setTaskNextId] = useState(0);

	// const [categories, setCategories] = useState([
	// 	{
	// 		id: 0,
	// 		name: "Personal",
	// 		color: "#D61355",
	// 	},
	// 	{
	// 		id: 1,
	// 		name: "Work",
	// 		color: "#F94A29",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Other",
	// 		color: "#30E3DF",
	// 	},
	// ]);
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
		setTasks([...tasks, task]);
		setValue("");
		setTaskNextId(taskNextId + 1);
	};

	useEffect(() => {
		console.log("-----", tasks);
	}, [tasks]);

	const clearAllTask = () => {
		setTasks([]);
		setTasksCompleted([]);
	};

	const deleteTask = (el) => {
		const filteredList = tasks.filter((task) => task.id !== el.id);
		setTasks(() => {
			return filteredList;
		});
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
		setTasks(() => [...tasks, task]);
	};

	const editTask = (el) => {
		const filteredList = tasks.filter((task) => task.id !== el.id);
		setTasks(() => {
			return filteredList;
		});
		setValue(el.name);
	};

	const complete = (el) => {
		const filteredList = tasks.filter((task) => task.id !== el.id);
		setTasks(() => {
			return filteredList;
		});
		setTasksCompleted([...tasksCompleted, el]);
	};

	const uncomplete = (el) => {
		const filteredList = tasksCompleted.filter((task) => task.id !== el.id);
		setTasksCompleted(() => filteredList);
		setTasks([...tasks, el]);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			addTask();
		}
	};

	console.log("test -> ", props.test);

	return (
		<Container>
			<Header />
			<Row className="align-center">
				<Col sm={6}>
					<Comment
						tasksNumber={tasks.length}
						completedTasksNumber={tasksCompleted.length}
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
						tasks={tasks}
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
						tasks={tasksCompleted}
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
						label="clear all taks"
						onClick={() => clearAllTask()}
					/>
				</Col>
			</Row>
			<Row className="align-center mt-10">
				<Col sm={3}>
					<Button
						className="btn clear"
						label="clear todo"
						onClick={() => setTasks([])}
					/>
				</Col>
				<Col sm={3}>
					<Button
						className="btn clear"
						label="clear completed"
						onClick={() => setTasksCompleted([])}
					/>
				</Col>
			</Row>
			<Footer />
		</Container>
	);
}

export default ToDo;
