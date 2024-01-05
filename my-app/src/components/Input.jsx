import React from "react";
import "../styles/inputStyle.css";

function Input(props) {
	 const { onchange } = props;

	return (
		<>
    
			<input type="text" onChange={onchange}/>
		</>
	);
}

export default Input;
