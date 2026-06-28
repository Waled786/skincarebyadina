import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <About />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;