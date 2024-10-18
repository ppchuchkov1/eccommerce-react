import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "./redux/products/actions";
function App() {
  const dispatch = useDispatch();
  const { getProducts } = productsActions;
  const { products } = useSelector((state) => state.ProductsReducer);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default App;
