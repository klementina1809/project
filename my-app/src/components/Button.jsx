import React from "react";
import "../styles/btnStyle.css";

function Button(props) {
	const { action, label, classname  } = props;

	return (
		<>
			<button onClick={action} className={classname}>
				{label}
			</button>
		</>
	);
}

export default Button;
