import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import About from "../components/About/About";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "blogs", Component: Blogs },
      { path: "about", Component: About },
      { path: "signin", Component: SignIn },
      { path: "signup", Component: SignUp },
    ],
  },
]);
