import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import { Repos } from "../pages/Repos"
import NotFoundPage from "../pages/404"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/repos/:id",
    element: <Repos />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
