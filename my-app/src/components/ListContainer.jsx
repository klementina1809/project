import React from "react";
import TaskContainer from "./TaskContainer";
import "../styles/inputStyle.css";

function ListContainer(props) {
	const { tasks, label, checked, action } = props;

	return (
		<>
			<p>{label}</p>
			<TaskContainer tasks={tasks} checked={checked} action={action} />
		</>
	);
}

export default ListContainer;
