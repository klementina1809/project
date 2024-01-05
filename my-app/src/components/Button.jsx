import React from "react";
import "../styles/btnStyle.css";

function Button(props) {
const { action, label, type } = props;

	return (
		<>
			<button type={type} onClick={() => action}>{label}</button>
		</>
	);
}

export default  Button;
