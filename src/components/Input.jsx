import React from "react";
import "../styles/inputStyle.css";

function Input(props) {
	const { onchange, value, onKeyDown, label } = props;

	return (
		<div>
			<div>{label}</div>
			
				<input
					type="text"
					onChange={onchange}
					value={value}
					onKeyDown={onKeyDown}
				/>
			
		</div>
	);
}

export default Input;
