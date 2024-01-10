import React, { useEffect } from "react";
import SingleTask from "./SingleTask";

function TaskContainer(props) {
	const { tasks, checked, onCheck,  action } = props;

	return (
		<div className="outputContainer">
			{tasks.map((task, index) => {
				return (
					<SingleTask
						name={task}
						checked={checked}
						onCheck={onCheck} 
						// onDelete={onDelete} 
						// onEdit={onEdit}
						// onCopy={onCopy}
						action={action}
						key={index}
					/>
				);
			})}
		</div>
	);
}

export default TaskContainer;
