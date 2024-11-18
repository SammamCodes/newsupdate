import React from 'react';
import {
    createBrowserRouter
   
  } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/category/:id",
        element: <h2>This is Category</h2>,
      },
    ],
  },
  {
    path: "/news",
    element: <div>News world!</div>,
  },
  {
    path: "/auth",
    element: <div>Login world!</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);


export default router;