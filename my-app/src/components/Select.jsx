import "../styles/inputStyle.css";

function Select(props) {
	const { name, onChange, data, selectedItem, placeholder } = props;

	return (
		<select onChange={onChange} name={name} id={name} value={selectedItem}>
			{placeholder && <option value='-1' disabled>{placeholder}</option>}
			{data.map((el) => {
				return (
					<option value={el.id} key={el.id}>
						{el.name}{" "}
					</option>
				);
			})}
		</select>
	);
}

export default Select;
