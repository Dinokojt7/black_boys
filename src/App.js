import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Events from "./components/Events";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Events />
      <Plan />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
