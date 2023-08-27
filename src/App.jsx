import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import CheckOut from "./pages/CheckOut";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ProductsReducer } from "./redux/product/reducer";
import dataProduct from "./data/data.json";
import { addProduct } from "./redux/product/action";

const store = createStore(ProductsReducer);
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
  dataProduct.forEach((product) => {
    const existingProduct = store
      .getState()
      .products.find((p) => p.id === product.id);
    if (!existingProduct) {
      store.dispatch(addProduct(product));
    }
  });

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
