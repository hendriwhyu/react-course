import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import CheckOut from "./pages/CheckOut";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
        },
      ],
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },
    {
      path: "/detail/:id",
      element: <DetailProduct />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
