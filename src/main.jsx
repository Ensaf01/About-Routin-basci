import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>, // home er modhe childer path add,so home modhe kothai dekhabo output of childer seta outlet diye bolte hobe
    children: [
      {
        path: "/about",
        element: <div>
          <p>aaabout</p>
          <About></About>
          </div>
      },
      {
        path: "/users",
        loader :() => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path:'/user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
        // akhne link a click howar pore id ta asbe and loader er modhe params destructure hobe and then params userId or sxy name dynamically load data show korbe
      }
    ]

  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
