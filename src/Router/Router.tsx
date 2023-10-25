import {
  createBrowserRouter,
} from "react-router-dom";
import HomeView from "../Views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView/>,
  }
])

export default router