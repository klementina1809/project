import React, { useEffect } from "react";
import "../styles/inputStyle.css";
import { FaTrash, FaPen, FaCopy } from "react-icons/fa";

function SingleTask(props) {
	const { checked, name, onCheck, onDelete, onEdit,  onCopy } = props;

	useEffect(() => {
		console.log("onCheck", onCheck);
	}, []);

	return (
		<div className="inputChekbox">
			<input
				type="checkbox"
				onChange={() => onCheck(name)}
				checked={checked}
			/>
			<span>{name}</span>

			{!checked && (
				<div className="img-container">
					<FaPen
						color="#304d30"
						size={18}
						style={{ marginRight: "10px", cursor: "pointer" }}
						onClick={() => onEdit(name)}
					/>
					<FaCopy
						color="#304d30"
						size={18}
						style={{ marginRight: "10px", cursor: "pointer" }}
						onClick={() => onCopy(name)}
					></FaCopy>
					<FaTrash
						color="#304d30"
						size={18}
						style={{ cursor: "pointer" }}
						onClick={() => onDelete(name)}
					/>
				</div>
			)}
		</div>
	);
}

export default SingleTask;
