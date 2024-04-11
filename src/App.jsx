import { React, useState, useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import ToDo from "./pages/toDo";
import Categories from "./pages/Categories";
import Random from "./pages/Random";
import LocalStorage from "./pages/LocalStorage";
import ExampleSelect from "./pages/ExampleSelect";

import "./App.css";

function App() {
	const [categories, setCategories] = useLocalStorage(
		"categories",
		JSON.stringify([
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
		])
	);

	const router = createHashRouter([
		{
			path: "/",
			element: <ToDo categories={JSON.parse(categories)} />,
		},
		{
			path: "/categories",
			element: (
				<Categories
					categories={JSON.parse(categories)}
					setCategories={setCategories}
				/>
			),
		},
		{
			path: "/example_select",
			element: (
				<ExampleSelect
					categories={JSON.parse(categories)}
					setCategories={setCategories}
				/>
			),
		},
		{
			path: "/random",
			element: (
				<Random
					categories={JSON.parse(categories)}
					setCategories={setCategories}
				/>
			),
		},
		{
			path: "/local_storage",
			element: <LocalStorage />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
