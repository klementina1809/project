import { React, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaTrash, FaPen } from "react-icons/fa";

import "../styles/btnStyle.css";
import "../styles/todoStyle.css";
import "../styles/tableStyle.css";
import "../styles/inputStyle.css";

function Table(props) {
	const { th1, th2, categories, onEdit, onDelete } = props;

	useEffect(() => {
		console.log("category", console.log(categories));
	}, []);

	return (
		<Container>
			<table border="1">
				<thead>
					<tr>
						<th>{th1}</th>
						<th>{th2}</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category) => {
						return (
							<tr key={category.id}>
								<td>{category.name}</td>
								<td>
									{category.color}
									<span
										className="circle"
										style={{
											backgroundColor: category.color,
											color: category.color,
										}}
									>
										оо
									</span>
								</td>
								<td>
									<div>
										<FaPen
											color="#FF8080"
											size={18}
											style={{
												marginRight: "10px",
												cursor: "pointer",
											}}
											onClick={() => onEdit(category)}
										/>

										<FaTrash
											color="#FF8080"
											size={18}
											style={{ cursor: "pointer" }}
											onClick={() => onDelete(category)}
										/>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Container>
	);
}

export default Table;
