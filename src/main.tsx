import { render } from 'preact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './app/page'
import AboutPage from './app/about/page'
import ProductsPage from './app/products/page'
import ContactPage from './app/contact/page'
import LightingCursor from './components/lightingCursor'

// Define your route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/about",
    element:<AboutPage />
  },
  {
    path: "/products",
    element:<ProductsPage />
  },
  {
    path: "/contact",
    element:<ContactPage />
  },
  {
    path: "/cursor",
    element:<LightingCursor />
  },
])

// Render using RouterProvider
render(
  <RouterProvider router={router} />,
  document.getElementById('app') as HTMLElement
)
