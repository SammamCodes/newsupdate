import React from 'react';
import {
    createBrowserRouter,
    Navigate
   
  } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';

import AuthLayout from '../layouts/AuthLayout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
   
  },
  {
    path: "/news",
    element: <AuthLayout></AuthLayout>,
    children:[{
      path: "/auth/login",
  element: <h2>Login </h2>,
    },
    {
      path: "/auth/register",
  element: <h2>Register </h2>,
    },
    ],
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