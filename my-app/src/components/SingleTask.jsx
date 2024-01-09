import React, { useEffect } from "react";
import "../styles/inputStyle.css";

function SingleTask(props) {
	const { checked, name, action } = props;

	useEffect(() => {
		console.log("Single task rendered", checked, name);
	}, []);

	return (
		<div className="inputChekbox">
			<input type="checkbox" onChange={() => action(name)} checked={checked} />
			<span>{name}</span>
		</div>
	);
}

export default SingleTask;
