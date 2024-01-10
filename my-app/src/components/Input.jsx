import React from "react";
import "../styles/inputStyle.css";

function Input(props) {
	const { onchange, value, onKeyDown } = props;

	return (
		<>
			<input type="text" onChange={onchange} value={value} onKeyDown={onKeyDown} />
		</>
	);
}

export default Input;
