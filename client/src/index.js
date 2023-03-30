import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Invoices } from "./Invoices";
import { Invoice } from "./Invoice";
import { Success } from "./Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invoices />,
  },
  {
    path: "invoices/:id",
    element: <Invoice />,
  },
  {
    path: "invoices/payments/success",
    element: <Success />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
