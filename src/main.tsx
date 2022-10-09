import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { routes } from "./router/routes"

import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={routes} />
)
