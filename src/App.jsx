import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingNavBar from "./components/LandingNavBar";
import LandingPage from "./routes/LandingPage";
import SignIn from "./routes/SignIn";
import Error from "./routes/error";
import Register from "./routes/Register";
import { loader as orderLoader } from "./routes/order";
import { loader as profileLoader } from "./routes/profile";

import ConsumerHome from "./routes/Consumer/ConsumerHome";
import Order from "./routes/order";
import Profile from "./routes/profile";
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
      {
        path: "order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },

      {
        path: "profile",
        element: <Profile />,
        loader: profileLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
