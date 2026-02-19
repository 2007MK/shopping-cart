import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
