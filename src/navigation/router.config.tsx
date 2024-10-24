import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "../screens/home";
import { ContactScreen } from "../screens/contacts";
// import { useApp } from "../appContext"
// import { Home } from "../App";
// const SignUp = React.lazy(() => import("../screens/signup"))

const router = createHashRouter([
  {
    path: "/",
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/contacts",
        element: <ContactScreen />,
      },
    ],
  },
]);

const RouterConfig: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default RouterConfig;
