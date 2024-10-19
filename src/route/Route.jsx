import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Layout } from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:page",
    element: <Layout />,
  },
]);

export default router;
//