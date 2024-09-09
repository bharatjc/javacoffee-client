import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Location from "./Pages/Location"
import Menu from "./Pages/Menu"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Review from "./Pages/Review"
import FAQ from "./Pages/FAQ";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "outlets",
      element: <Location/>,
    },
    {
      path: "menu",
      element: <Menu/>,
    },
    {
      path: "contact",
      element: <Contact/>,
    },
    {
      path: "review",
      element: <Review/>,
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path: "faqs",
      element: <FAQ/>,
    },
    {
      path: "*",
      element: <PageNotFound/>
    },
  ]);

  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
