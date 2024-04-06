import "../styles/inputStyle.css";

function Comment(props) {
	const {tasksNumber, completedTasksNumber} = props;

	return (
		<div className="todoContainer">
			{tasksNumber === 0 && completedTasksNumber === 0 ? (
				<h4 className="green">Add your first task</h4>
			) : tasksNumber === 0 && completedTasksNumber > 0 ? (
				<h4 className="red">All tasks completed</h4>
			) : (
				<h4 className="orange">{tasksNumber} to complete</h4>
			)}{" "}
		</div>
	);
}

export default Comment;
