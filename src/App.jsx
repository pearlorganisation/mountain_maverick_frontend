import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import TrekDeatils from "./components/AllTreks/TrekDeatils/TrekDeatils";
import About from "./pages/About";
import Product from "./pages/Product/Product";
import Cancellation from "./pages/Cancellation/Cancellation";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import MedicalFitness from "./pages/MedicalFitness/MedicalFitness";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/trekdetails",
        element: <TrekDeatils />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cancellationpolicy",
        element: <Cancellation />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/Medicalfitness",
        element: <MedicalFitness />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
