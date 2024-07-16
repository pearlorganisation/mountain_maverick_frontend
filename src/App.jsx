import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import TrekDeatils from "./components/AllTreks/TrekDeatils/TrekDeatils";
import About from "./pages/About";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
