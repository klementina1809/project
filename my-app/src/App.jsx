import { useState } from "react";
import "./App.css";
import ToDo from "./pages/toDo";
import Categories from "./pages/Categories";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const [test, setTest] = useState("test");

	const router = createBrowserRouter([
		{
			path: "/",
			element: <ToDo test={test} />,
		},
		{
			path: "/categories",
			element: <Categories />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
