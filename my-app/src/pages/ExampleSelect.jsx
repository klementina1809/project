import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";

import "../styles/todoStyle.css";
import "../styles/selectStyle.css";

function ExampleSelect({ categories, setCategories }) {
	// const { categories, setCategories } = props;
	const [categorySelected, setCategorySelected] = useState(-1);
	const [spans, setSpans] = useState([]);
	const [color, setColor] = useState("");
	const [spanStyle, setSpanStyle] = useState("");

	useEffect(() => {
		setSpanStyle(color);
	}, [color]);

	const colors = [
		{ id: "red", name: "Red" },
		{ id: "green", name: "Green" },
		{ id: "yellow", name: "Yellow" },
	];

	const selectChange = (e) => {
		const value = +e.target.value;

		setCategorySelected(value);

		const category = categories.find((category) => category.id === value);
		const span = { id: value, name: category.name };
		setSpans([...spans, span]);
	};

	const changeColorHandler = (e) => {
		setColor(() => e.target.value);
	};

	return (
		<Container>
			<Row>
				<Col sm={12}>
					<Header />
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={2}>
					<Select
						name="category"
						data={categories}
						onChange={selectChange}
						selectedItem={categorySelected}
						placeholder="Select category"
					/>
				</Col>
				<Col sm={2}>
					<Select
						name="colors"
						data={colors}
						onChange={changeColorHandler}
						selectedItem={color}
						placeholder="Select color"
					/>
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={6}>
					{spans.map((span, index) => {
						return (
							<span className={spanStyle} key={index}>
								{span.name}
							</span>
						);
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
