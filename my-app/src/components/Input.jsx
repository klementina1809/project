import React from "react";
import "../styles/inputStyle.css";

function Input(props) {
	const { onchange, value } = props;

	return (
		<>
			<input type="text" onChange={onchange} value={value} />
		</>
	);
}

export default Input;
