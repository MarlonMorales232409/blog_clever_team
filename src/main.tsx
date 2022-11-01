import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage'
import './index.css'
import { ErrorBoundary } from './pages/Page404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
