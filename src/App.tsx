import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductsSection from "./components/ProductsSection/ProductsSection";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <ProductsSection />
    </>
  );
}

export default App;
