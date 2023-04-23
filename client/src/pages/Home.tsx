import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import ProductsSection from "../components/ProductsSection/ProductsSection";

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
