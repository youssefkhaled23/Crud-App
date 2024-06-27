import React from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Update from "./Components/Update/Update";
import Main from "./Components/Main/Main";
import Layout from "./Components/Layout/Layout";

export default function App() {
  // Make A React Router
  let router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "update/:id", element: <Update /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
