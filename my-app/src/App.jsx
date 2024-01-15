import { useState } from "react";
import "./App.css";
import ToDo from "./pages/toDo";
import Categories from "./pages/Categories";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleSelect from "./pages/ExampleSelect";

function App() {
	const [categories, setCategories] = useState([
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
	]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <ToDo categories={categories} />,
		},
		{
			path: "/categories",
			element: <Categories categories={categories} setCategories={setCategories} />,
		},
		{
			path: "/example_select",
			element: <ExampleSelect categories={categories} setCategories={setCategories} />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
