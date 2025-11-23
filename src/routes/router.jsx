import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Forget from "../pages/Auth/Forget/Forget";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services/Services";
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: '/coverage',
          element: <Coverage></Coverage>,
          loader: ()=> fetch('/warehouses.json').then(res=>res.json())
        },
        {
          path: '/about-us',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/rider',
          element: <PrivateRoute><Rider></Rider></PrivateRoute>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/pricing',
          element: <Pricing></Pricing>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children:[
      {
        path:'/login',
        Component: Login
      },
      {
        path:'/register',
        Component: Register
      },
      {
        path: '/forget',
        Component: Forget
      }
    ]
  }
]);