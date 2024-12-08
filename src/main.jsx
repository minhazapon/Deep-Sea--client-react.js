import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './vanila css/Sea.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import About from './about file/About';
import Service from './Service file/Service';
import Work from './work file/Work';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>  ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>  ,
      },
      {
        path: "/work",
        element: <Work></Work>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
