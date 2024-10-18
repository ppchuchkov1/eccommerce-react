import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "./redux/products/actions";
function App() {
  const dispatch = useDispatch();
  const { getProducts } = productsActions;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <></>;
}

export default App;
