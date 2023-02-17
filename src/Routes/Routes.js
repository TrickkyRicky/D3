import { createBrowserRouter } from "react-router-dom";
import App from "../Root/App";
import Smiley from "../Visualizations/Smiley/Smiley";

// remember to put extra path here for / homepage
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "smiley",
        element: <Smiley />,
      },
    ],
  },
]);

export default router;
