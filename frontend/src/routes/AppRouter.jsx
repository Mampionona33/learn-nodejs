import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Loading from "../components/Loading";
import Products from "../pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};

export default AppRouter;
