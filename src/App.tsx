import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useProductsApi } from "./hooks/useProductsApi";
import ProductPage from "./pages/ProductPage";

function App() {
  const { apiResponse, activeCategory, categories, setActiveCategory } =
    useProductsApi();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {apiResponse?.map((product) => (
          <Route
            key={product.id}
            path={`/product/${product.id}`}
            element={<ProductPage {...product} />}
          ></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
