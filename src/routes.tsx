import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
    ],
  },
]);

export { router };
