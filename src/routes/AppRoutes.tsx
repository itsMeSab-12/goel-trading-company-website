import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "categories", element: <Categories /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
