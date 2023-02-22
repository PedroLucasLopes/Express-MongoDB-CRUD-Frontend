import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Pages/Home/Home';
import NewProduct from './Pages/New/NewProduct';
import EditProduct from './Pages/Edit/EditProduct';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewProduct />
      },
      {
        path: '/edit/:id',
        element: <EditProduct />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
