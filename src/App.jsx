import Header from "./components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Cta from "./components/Cta/Cta";
import "./App.css";
import HeaderBlankHeight from "./components/Header/HeaderBlankHeight";
import FeatureSection from "./components/FeatureSection/FeatureSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeaderBlankHeight />
      <FeatureSection />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
