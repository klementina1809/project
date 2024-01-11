import logo from "./logo.svg";
import "./App.css";
import ToDo2 from "./pages/toDo2";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ToDo2 />,
	},
	{
		path: "/test",
		element: <div>test</div>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
