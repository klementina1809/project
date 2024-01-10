import React, { useEffect } from "react";
import SingleTask from "./SingleTask";

function TaskContainer(props) {
	const { tasks, checked, onCheck, onDelete, onEdit } = props;

	return (
		<div className="outputContainer">
			{tasks.map((task, index) => {
				return (
					<SingleTask
						name={task}
						checked={checked}
						onCheck={onCheck} 
						onDelete={onDelete} 
						onEdit={onEdit}
						key={index}
					/>
				);
			})}
		</div>
	);
}

export default TaskContainer;
