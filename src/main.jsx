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
import Page from './page file/Page';


import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Blog from './blog file/Blog';
import AddForm from './crud file/AddForm';
import YourProducts from './crud file/YourProducts';
import UpdateForm from './crud file/UpdateForm';
import Pay from './payment file/Pay';


// Create a client
const queryClient = new QueryClient()

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
      {
        path: "/page",
        element:  <Page></Page> ,
      },
      {
        path: "/blog",
        element: <Blog></Blog> ,
      },
      {
        path: "/yourProducts",
        element: <YourProducts></YourProducts>   ,
      },
      {
        path: "/add",
        element: <AddForm></AddForm>  ,
      },
      {
        path: "/update/:id",
        element: <UpdateForm></UpdateForm>  ,
        loader: ({params}) => fetch(`https://deepsea-server-express-js.onrender.com/seaData/${params.id}`)
      },
      {
        path: "/pay",
        element: <Pay></Pay>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    
  </StrictMode>,
)
