import Broken from "../Pages/Broken/Broken";
import Layout from "../Pages/Dashboard/Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import Register from "../Pages/Register/Register";

const router = [
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <Layout></Layout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
        ],
      },
      {
        path: "*",
        element: <Broken></Broken>,
      },
    ],
  },
];

// const Routes = createBrowserRouter(router);

export default router;
