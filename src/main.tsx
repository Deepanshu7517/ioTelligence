import { render } from "preact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./app/page";
import AboutPage from "./app/about/page";
import ProductsPage from "./app/products/page";
import ContactPage from "./app/contact/page";
import LightingCursor from "./components/site/modernCursor";
import ScrollToTop from "./components/site/ScrollToTop";
import TechStackPage from "./app/teck-stack/page";

// Define your route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <AboutPage />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <ScrollToTop />
        <ProductsPage />
      </>
    ),
  },
  {
    path: "/contact",

    element: (
      <>
        <ScrollToTop />
        <ContactPage />
      </>
    ),
  },
  {
    path: "/tech-stack",

    element: (
      <>
        <ScrollToTop />
        <TechStackPage />
      </>
    ),
  },
  {
    path: "/cursor",
    element: <LightingCursor />,
  },
]);

// Render using RouterProvider
render(
  <RouterProvider router={router} />,
  document.getElementById("app") as HTMLElement
);
