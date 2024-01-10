import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

import "../styles/todoStyle.css";

import Input from "../components/Input";
import Button from "../components/Button";
import Output from "../components/Output";
import ListContainer from "../components/ListContainer";
import Comment from "../components/Comment";

function ToDo2() {
	const [value, setValue] = useState("");
	const [newTask, setnewTask] = useState([]);
	const [newComplitedTask, setnewComplitedTask] = useState([]);
	const [total, setTotal] = useState(0);

	const onchangeHandler = (event) => {
		setValue(event.target.value);
	};

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
		setTotal(total - 1);
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
			<Row className="align-center">
				<Col sm={6}>
					<Comment
						tasksNumber={newTask.length}
						completedTasksNumber={newComplitedTask.length}
					/>
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={7}>
					<Input onchange={onchangeHandler} value={value} />
					<Button classname="btn" onClick={addTask} label="Add" />
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={6}>
					<ListContainer
						tasks={newTask}
						label="To Do"
						checked={false}
						onChek={complete}
						onEdit={editTask}
						onDelete={deleteTask}
					/>
				</Col>
			</Row>

			<Row className="align-center">
				<Col sm={6}>
					<ListContainer
						tasks={newComplitedTask}
						label="Completed"
						checked={true}
						onChek={uncomplete}
						
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default ToDo2;
