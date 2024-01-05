import React from "react";
import "../styles/inputStyle.css";

function Output(props) {
	const { value } = props;

	return (
		<>
			<div className="outputContainer">
				<ul>{value}</ul>
			</div>
		</>
	);
}

export default Output;
