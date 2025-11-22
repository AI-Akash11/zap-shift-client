import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";

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
          path: 'about-us',
          element: <AboutUs></AboutUs>
        }
    ]
  },
]);