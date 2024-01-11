import React from "react";

import { Container, Row, Col } from "react-grid-system";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/btnStyle.css";
import "../styles/todoStyle.css";

function Categories(props) {
	const {} = props;

	return (
		<Container>
			<Row>
				<Col sm={12}>
          <Header />{" "}
        </Col>
			</Row>
      <Row className="align-center"><Col>Cat Page</Col></Row>
			<Row>
				<Col sm={12}>
          <Footer />
        </Col>
			</Row>
		</Container>
	);
}

export default Categories;
