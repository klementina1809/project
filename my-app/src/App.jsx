import logo from "./logo.svg";
import "./App.css";
import ToDo from "./pages/toDo";
import Categories from "./pages/Categories";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ToDo />,
	},
	{
		path: "/categories",
		element: <Categories />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
