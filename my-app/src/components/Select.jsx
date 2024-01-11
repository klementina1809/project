function Select(props) {
	const { onChange, data, selectedItem } = props;

	return (
		<select onChange={onChange} name="category" id="category" value={selectedItem}>
			{data.map((category) => {
				return (
					<option value={category.id} key={category.id}>
						{category.name}
					</option>
				);
			})}
		</select>
	);
}

export default Select;
