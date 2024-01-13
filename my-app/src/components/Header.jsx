import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

import "../styles/btnStyle.css";
import "../styles/headerStyle.css";

function Header(props) {
	const {} = props;

	return (
		<Container>
			<Row className="align-center">
				<Col sm={12}>
					<header>
						<ul className="navbar">
							<li>
								<NavLink to="/">ToDo</NavLink>
							</li>
							<li>
								<NavLink to="/categories">Categories</NavLink>
							</li>
						</ul>
					</header>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;