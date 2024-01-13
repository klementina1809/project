import {React, useState, useEffect} from "react";

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
	const { categories, setCategories } = props;

	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	const [taskNextId, setTaskNextId] = useState(3);


	// const onchangeHandler = (e) => {
	// 	setName(e.target.value);
	// 	setColor(e.target.value);
	// };
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			addCategory();
		}
	};

	const addCategory = () => {

		const category = {
			id: taskNextId,
			name: name,
			color: color,
		};
		// setCategories([...categories, category]);
		setName("");
		setColor("");
		setTaskNextId(taskNextId + 1);
	};

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
				<Col sm={4}>
					<Input
						label="Name"
						onchange={(e) => setName(e.target.value)}
						value={name}
						onKeyDown={handleKeyPress}
					/>
				</Col>
				<Col sm={4}>
					<Input
						label="Color"
						onchange={(e) => setColor(e.target.value)}
						value={color}
						onKeyDown={handleKeyPress}
					/>
				</Col>
				<Col sm={2}>
					<Button label="Add" className="btn"  onClick={addCategory} />
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
