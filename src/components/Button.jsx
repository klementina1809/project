import React from "react";
import "../styles/btnStyle.css";
import "../styles/todoStyle.css";


function Button(props) {
	const { onClick, label, className } = props;

	return (
		<>
			<button onClick={onClick} className={className}>
				{label}
			</button>
		</>
	);
}

export default Button;
