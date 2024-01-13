import React from "react";

import { Container, Row, Col } from "react-grid-system";
import Input from "../components/Input";
import Button from "../components/Button";
import ListContainer from "../components/ListContainer";
import Comment from "../components/Comment";
import Select from "../components/Select";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/btnStyle.css";
import "../styles/todoStyle.css";

function Categories(props) {
	const { categories } = props;

	return (
		<Container>
			{/* mi servira il map che ritorna td dentro tr dentro table */}
			{/* dopo saranno anche icon di edit e dilite */}
			<Row>
				<Col sm={12}>
					<Header />{" "}
				</Col>
			</Row>
			<Row className="align-center">
				<Col>
					<Input />
					<Input />
					<Button />
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<Footer />
				</Col>
			</Row>
		</Container>
	);
}

export default Categories;
