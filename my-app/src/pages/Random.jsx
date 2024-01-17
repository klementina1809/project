import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";
import Button from "../components/Button";

import "../styles/todoStyle.css";
import "../styles/selectStyle.css";

function Random({ categories }) {
	const [categorySelected, setCategorySelected] = useState(-1);

	const selectChange = (e) => {
		const value = +e.target.value;
		setCategorySelected(value);
	};

	const randomHandler = () => {
		const id = Math.floor(Math.random() * categories.length);
		setCategorySelected(id);
	};

	return (
		<Container>
			<Row>
				<Col sm={12}>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col sm={8}>
					<Select
						name="category"
						data={categories}
						onChange={selectChange}
						selectedItem={categorySelected}
						placeholder="Select category"
					/>
				</Col>
				<Col sm={2}>
					<Button onClick={randomHandler} label="Random category" />
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

export default Random;
