import React, { useEffect } from "react";
import "../styles/inputStyle.css";
import { FaTrash, FaPen, FaCopy } from "react-icons/fa";

function SingleTask(props) {
	const { checked, task, onCheck, action, key } = props; //key non mi serve? certo posso fare inpo pi pulito ma per cosa serve

	// useEffect(() => {
	// 	console.log("id", key);
	// }, []);

	return (
		<div className="inputChekbox">
			<input
				type="checkbox"
				onChange={() => onCheck(task)}
				checked={checked}
			/>
			<span>{task.name}</span>

			{!checked && (
				<div className="img-container">
					<FaPen
						color="#304d30"
						size={18}
						style={{ marginRight: "10px", cursor: "pointer" }}
						onClick={() => action("edit", task)}
					/>
					<FaCopy
						color="#304d30"
						size={18}
						style={{ marginRight: "10px", cursor: "pointer" }}
						onClick={() => action("copy", task)}
					></FaCopy>
					<FaTrash
						color="#304d30"
						size={18}
						style={{ cursor: "pointer" }}
						onClick={() => action("delete", task)}
					/>
				</div>
			)}
		</div>
	);
}

export default SingleTask;
