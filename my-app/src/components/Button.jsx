import React from "react";
import "../styles/btnStyle.css";

function Button(props) {
	const { onClick, label, classname  } = props;

	return (
		<>
			<button onClick={onClick} className={classname}>
				{label}
			</button>
		</>
	);
}

export default Button;
