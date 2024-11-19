import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "./redux/products/actions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
function App() {
  const dispatch = useDispatch();
  const { getProducts } = productsActions;

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
