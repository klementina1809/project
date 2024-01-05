import React from "react";
import "../styles/btnStyle.css";

function Button(props) {
	const { action, label,  } = props;

	return (
		<>
			<button onClick={action}>
				{label}
			</button>
		</>
	);
}

export default Button;
