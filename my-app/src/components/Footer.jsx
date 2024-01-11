import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

import "../styles/btnStyle.css";
import "../styles/footerStyle.css";


function Footer(props) {
	const {} = props;

	return (
		<Row >
			<Col sm={12}>
				<footer>
					<ul className="footer">
						<li>
							<NavLink to="/">ToDo</NavLink>
						</li>
						<li>
							<NavLink to="/categories">Categories</NavLink>
						</li>
					</ul>
				</footer>
			</Col>
		</Row>
	);
}

export default Footer;
