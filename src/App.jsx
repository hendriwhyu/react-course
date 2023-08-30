import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import CheckOut from "./pages/CheckOut";
import { Provider } from "react-redux";
import store from "./redux/store";

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
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
