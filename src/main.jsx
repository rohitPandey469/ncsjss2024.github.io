import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Team from "./Pages/Team/Team";
import Alumni from "./Pages/Alumni/Alumni";
import Post from "./Components/Instagram/Post";
import Error from "./Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/ncsjss2024.github.io/",
    element: <App />,
    children: [
      {
        path: "/ncsjss2024.github.io/",
        element: <Home />,
      },
      {
        path: "/ncsjss2024.github.io/projects",
        element: <Projects />,
      },
      {
        path: "/ncsjss2024.github.io/team",
        element: <Team />,
      },
      {
        path: "/ncsjss2024.github.io/alumni",
        element: <Alumni />,
      },
      {
        path: "/ncsjss2024.github.io/post",
        element: <Post />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
