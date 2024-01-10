import React from "react";
import TaskContainer from "./TaskContainer";
import "../styles/inputStyle.css";

import { Row, Col } from "react-grid-system";

function ListContainer(props) {
	const { tasks, label, checked, onCheck,  action } = props;

	return (
		<>
			<Row>
				<Col sm={12}>
					<p>{label}</p>
				</Col>
			</Row>

			<Row>
				<Col sm={12}>
					<TaskContainer tasks={tasks} checked={checked} onCheck={onCheck}  action={action} />
				</Col>
			</Row>
		</>
	);
}

export default ListContainer;
