import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingNavBar from "./components/LandingNavBar";
import LandingPage from "./routes/LandingPage";
import SignIn from "./components/SignIn";
import Error from "./routes/error";
import Register from "./components/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingNavBar />,
    errorElement: <Error />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
