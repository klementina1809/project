import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";

import "../styles/todoStyle.css";

function ExampleSelect(props) {
	const { categories, setCategories } = props;
	const [categorySelected, setCategorySelected] = useState(0);
	const [spans, setSpans] = useState([]);
	const [value, setValue] = useState("");

	useEffect(() => {
		let count = spans.filter((span) => span.name === "Work").length;
		console.log("volte di work: ", count);
	}, [spans]);

	const selectChange = (e) => {
		const value = +e.target.value;

		setCategorySelected(value);

		const category = categories.find((category) => category.id === value);
		setValue(category.name);
		const span = { id: value, name: category.name };
		setSpans([...spans, span]);
	};

	return (
		<Container>
			<Row>
				<Col sm={12}>
					<Header />
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={6}>
					<Select
						name="category"
						onChange={selectChange}
						data={categories}
						selectedItem={categorySelected}
					/>
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={6}>
					{spans.map((span, index) => {
						return <span key={index}>{span.name}</span>;
					})}
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

export default ExampleSelect;
