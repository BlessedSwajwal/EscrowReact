import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingNavBar from "./components/LandingNavBar";
import LandingPage from "./routes/LandingPage";
import SignIn from "./routes/SignIn";
import Error from "./routes/error";
import Register from "./routes/Register";

import ConsumerHome from "./routes/Consumer/ConsumerHome";
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
      {
        path: "Consumer",
        element: <ConsumerHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
