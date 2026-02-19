import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:productId", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
];

export default routes;
