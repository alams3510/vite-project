import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import PopularProducts from "./pages/PopularProducts";
import SuperQuality from "./pages/SuperQuality";

function App() {
  return (
    <div className="px-10 md:px-16 relative">
      <Nav />
      <Hero />

      <PopularProducts />

      <SuperQuality />
    </div>
  );
}

export default App;
