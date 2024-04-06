import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

import "../styles/btnStyle.css";
import "../styles/footerStyle.css";


function Footer(props) {
	const {} = props;

	return (
		<Row className="align-center mt-10">
			<Col sm={12}>
				<footer>
				© 2024 Klementina
				</footer>
			</Col>
		</Row>
	);
}

export default Footer;
