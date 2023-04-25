import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import useFetch from "./hooks/useFetch";
import { productsApiProps } from "./interfaces/Product";
import Cart from "./pages/Cart/Cart";

function App() {
  const { apiRes, isLoading, error } = useFetch<productsApiProps>(
    "https://fakestoreapi.com/products/"
  );
  if (isLoading === true) return <div>loading</div>;
  if (error !== null) {
    console.log(error);
    return (
      <div>
        error loading products from fakestoreapi, check if this link still
        works:{" "}
        <a href="https://fakestoreapi.com/products/">
          https://fakestoreapi.com/products/
        </a>
      </div>
    );
  }
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          {apiRes?.map((product) => (
            <Route
              key={product?.id}
              path={`/product/${product?.id}`}
              element={<ProductPage {...product} />}
            />
          ))}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
