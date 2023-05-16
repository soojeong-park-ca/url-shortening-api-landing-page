import Header from "./components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Cta from "./components/Cta/Cta";
import "./App.css";
import HeaderBlankHeight from "./components/Header/HeaderBlankHeight";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeaderBlankHeight />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
