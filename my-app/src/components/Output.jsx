import React from "react";
import "../styles/inputStyle.css";

function Output(props) {
 const { value } = props;

	return (
		<>
			<div className="outputContainer">{value}</div>
		</>
	);
}

export default Output;
