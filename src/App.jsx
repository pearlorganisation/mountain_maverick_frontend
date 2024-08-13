import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import TrekDeatils from "./components/AllTreks/TrekDeatils/TrekDeatils";
import Product from "./pages/ProductPage/Product";
import TourProduct from "./pages/ProductPage/TourProduct";
import Error from "./pages/ErrorBoundary/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/trekdetails",
        element: <TrekDeatils />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "tourDetail/:id",
        element: <TourProduct />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
