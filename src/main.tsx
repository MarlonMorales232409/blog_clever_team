import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage'
import './index.css'
import { Recently, User } from './pages';
import News from './pages/News';
import { ErrorBoundary } from './pages/Page404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recently",
    element: <Recently />,
    children: [
      {
        path: "news",
        element: <News />,
      }
    ]
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "myuser",
        element: <News />
      }
    ]
  },
  {
    path: "/*",
    element: <ErrorBoundary />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
