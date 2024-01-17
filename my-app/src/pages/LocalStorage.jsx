import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import useLocalStorage from "use-local-storage";

import Input from "../components/Input";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";

import "../styles/selectStyle.css";
import "../styles/todoStyle.css";
import "../styles/btnStyle.css";
import "../styles/inputStyle.css";

function LocalStorage() {
	const categories = [
		{
			id: 0,
			name: "Personal",
			color: "#D61355",
		},
		{
			id: 1,
			name: "Work",
			color: "#F94A29",
		},
		{
			id: 2,
			name: "Other",
			color: "#30E3DF",
		},
	];
	const [test, setTest] = useLocalStorage("test", '');
	const [value, setValue] = useState("");
	const [categorySelected, setCategorySelected] = useState(-1);

	const setTestHandler = () => {
		setTest(JSON.stringify(value));
    // setTest(value);
		setValue("");
	};
	const getTestHandler = () => {
		setValue(JSON.parse(test));
		// setValue(test);
	};

	const onchangeHandler = (e) => {
		setValue(e.target.value);
	};

	const selectChange = (e) => {
		const id = +e.target.value;
		setCategorySelected(id);
		const category = categories.find((category) => category.id === id);
		setTest(category);
	};

	useEffect(() => {
		console.log("test", test);
	}, [test]);

	return (
		<Container>
			<Row>
				<Col sm={12}>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<Select
						name="category"
						data={categories}
						onChange={selectChange}
						selectedItem={categorySelected}
						placeholder="Select category"
					/>
				</Col>
			</Row>
			<Row>
				<Col sm={6}>
					<Input onchange={onchangeHandler} value={value} />
				</Col>
				<Col sm={3}>
					<Button onClick={setTestHandler} label="Set" />
				</Col>
				<Col sm={3}>
					<Button onClick={getTestHandler} label="Get" />
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

export default LocalStorage;
