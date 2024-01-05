import React from "react";
import "../styles/inputStyle.css";

function Output(props) {
	const { value, label } = props;

	return (
		<>
    <div>{label}</div>
			<div className="outputContainer">
				{value}
			</div>
		</>
	);
}

export default Output;
