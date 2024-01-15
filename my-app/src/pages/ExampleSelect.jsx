import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";

import "../styles/todoStyle.css";
import "../styles/selectStyle.css";

function ExampleSelect({ categories, setCategories }) {
	// const { categories, setCategories } = props;
	const [categorySelected, setCategorySelected] = useState(0);
	const [spans, setSpans] = useState([]);
	const [color, setColor] = useState("");
	const [spanStyle, setSpanStyle] = useState("");
	const [value, setValue] = useState("");

	useEffect(() => {
		setSpanStyle(color);
	}, [color]);

	const selectChange = (e) => {
		const value = +e.target.value;

		setCategorySelected(value);

		const category = categories.find((category) => category.id === value);
		setValue(category.name);
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
						onChange={selectChange}
						data={categories}
						selectedItem={categorySelected}
					/>
				</Col>
				<Col sm={2}>
					<select
						name="colors"
						value={color}
						onChange={changeColorHandler}
					>
						<option value="" disabled selected>
							Color
						</option>
						<option value="red">Red</option>
						<option value="green">Green</option>
						<option value="yellow">Yellow</option>
					</select>
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
