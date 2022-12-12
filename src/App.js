import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes";

const router = new createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
