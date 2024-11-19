import React from 'react';
import {
    createBrowserRouter,
    Navigate
   
  } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../page/CategoryNews ';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
   
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