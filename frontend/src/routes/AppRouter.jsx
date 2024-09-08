import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Loading from "../components/Loading";
import Products from "../pages/Products";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/products",
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};

export default AppRouter;
