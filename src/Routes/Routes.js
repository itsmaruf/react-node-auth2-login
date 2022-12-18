import Broken from "../Pages/Broken/Broken";
import Layout from "../Pages/Dashboard/Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import Register from "../Pages/Register/Register";
import Campaigns from "../Pages/Campaigns/Campaigns";
import Contacts from "../Pages/Contacts/Contacts";
import CustomWorkflow from "../Pages/CustomWorkflow/CustomWorkflow";

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
          {
            path: "/dashboard/campaigns",
            element: <Campaigns />,
          },
          {
            path: "/dashboard/contacts",
            element: <Contacts />,
          },
          {
            path: "/dashboard/*",
            element: <Broken></Broken>,
            errorElement: <h2>OMG</h2>,
          },
          {
            path: "/dashboard/campaign/:id",
            element: <CustomWorkflow></CustomWorkflow>,
          },
        ],
      },
      {
        path: "*",
        element: <Broken></Broken>,
        errorElement: <h2>OMG</h2>,
      },
    ],
  },
];

// const Routes = createBrowserRouter(router);

export default router;
