import Header from "../layouts/Header/Header";
import Hero from "../layouts/Hero/Hero";
import Nav from "../layouts/Nav/Nav";
import ProductsSection from "../layouts/ProductsSection/ProductsSection";

const Home = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <ProductsSection />
    </>
  );
};

export default Home;
