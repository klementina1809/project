import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

import "../styles/todoStyle.css";

import Input from "../components/Input";
import Button from "../components/Button";
import ListContainer from "../components/ListContainer";
import Comment from "../components/Comment";

function ToDo2() {
	const [value, setValue] = useState("");
	const [tasks, setTasks] = useState([]);
	const [tasksCompleted, setTasksCompleted] = useState([]);
	const [taskNextId, setTaskNextId] = useState(0);

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

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

	const addTask = () => {
		const task = {
			id: taskNextId,
			name: value,
		};
		setTasks([...tasks, task]);
		setValue("");
		setTaskNextId(taskNextId + 1);
	};

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
		const task = {
			id: taskNextId,
			name: el.name + " (2)",
		};
		setTaskNextId(taskNextId + 1); //???
		setTasks(() => [...tasks, task]); // mi crea string con (2) ma non fa vedere
	};

	useEffect(() => {
		console.log("-----", tasks);
	}, [copyTask]);

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

	return (
		<Container>
			<Row className="align-center">
				<Col sm={6}>
					<Comment
						tasksNumber={tasks.length}
						completedTasksNumber={tasksCompleted.length}
					/>
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={7}>
					<Input
						onchange={onchangeHandler}
						value={value}
						onKeyDown={handleKeyPress}
					/>
					<Button classname="btn" onClick={addTask} label="Add" />
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
		</Container>
	);
}

export default ToDo2;
