import React, { useEffect } from "react";
import "../styles/inputStyle.css";
import { FaTrash, FaPen } from "react-icons/fa";

function SingleTask(props) {
	const { checked, name, onCheck, onDelete, onEdit } = props;

	useEffect(() => {
		console.log("Single task rendered", checked, name);
	}, []);

	return (
		<div className="inputChekbox">
			<input
				type="checkbox"
				onChange={() => onCheck(name)}
				checked={checked}
			/>
			<span>{name}</span>
			<div className="img-container">
				<FaPen
					color="#304d30"
					size={18}
					style={{ marginRight: "10px", cursor: "pointer" }}
					onClick={() => onEdit(name)}
				/>
				<FaTrash
					color="#304d30"
					size={18}
					style={{ cursor: "pointer" }}
					onClick={() => onDelete(name)}
				/>
			</div>
		</div>
	);
}

export default SingleTask;
