import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import TrekDeatils from "./components/AllTreks/TrekDeatils/TrekDeatils";
import Product from "./pages/ProductPage/Product";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
