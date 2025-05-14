import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Layouts/Root.jsx';
import UserDetails from './components/UserDetails.jsx';
import EditUser from './components/EditUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: '',
        Component: App
      },
      {
        path: 'user-details/:id',
        Component: UserDetails,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`),
        hydrateFallbackElement: <p>Loading...</p> 
      },
      {
        path: "edit-user-details/:id",
        Component: EditUser,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`),
        hydrateFallbackElement: <p>Loading...</p> 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
