import { React, useState, useEffect } from "react";

import { Container, Row, Col } from "react-grid-system";
import Input from "../components/Input";
import Button from "../components/Button";
import ListContainer from "../components/ListContainer";
import Comment from "../components/Comment";
import Select from "../components/Select";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";

import "../styles/btnStyle.css";
import "../styles/todoStyle.css";

function Categories(props) {
	const { categories, setCategories } = props;

	const [nameButton, setNameButton] = useState("Add");
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	const [categoryNextId, setCategoryNextId] = useState(3);

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			addCategory();
		}
	};

	const deleteCategory = (el) => {
		const filteredList = categories.filter(
			(category) => category.id !== el.id
		);
		setCategories(() => {
			return filteredList;
		});
	};
	const editCategory = (el) => {
		setName(el.name);
		setColor(el.color);
		setId(el.id);
		setNameButton("Edit");
	};

	const addCategory = (e) => {
		if (e.target.textContent === "Add") {
			const category = {
				id: categoryNextId,
				name: name,
				color: color,
			};
			setCategories([...categories, category]);
			setCategoryNextId(categoryNextId + 1);
		} else {
			const filteredList = categories.filter(
				(category) => category.id !== id
			);

			const category = {
				id: id,
				name: name,
				color: color,
			};
			setCategories([...filteredList, category]);
			setNameButton("Add");
		}
		setName("");
		setColor("");
	};

	return (
		<Container>
			<Row>
				<Col sm={12}>
					<Header />{" "}
				</Col>
			</Row>
			<Row className="align-center mb-24">
				<Col sm={6}>
					{nameButton === "Edit" && (
						<div>Editing of category with id {id} </div>
					)}
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
					<Button
						label={nameButton}
						className="btn align-center"
						onClick={(e) => addCategory(e)}
					/>
				</Col>
			</Row>
			<Row className="align-center">
				<Col sm={6}>
					<Table
						th1="Name"
						th2="Color"
						categories={categories}
						onEdit={editCategory}
						onDelete={deleteCategory}
					/>
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
