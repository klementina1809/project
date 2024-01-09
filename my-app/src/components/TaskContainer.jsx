import React, { useEffect } from "react";
import SingleTask from "./SingleTask";

function TaskContainer(props) {
	const { tasks, checked, action } = props;

	return (
		<div className="outputContainer">
			{tasks.map((task, index) => {
				return (
					<SingleTask
						name={task}
						checked={checked}
						action={action}
						key={index}
					/>
				);
			})}
		</div>
	);
}

export default TaskContainer;
