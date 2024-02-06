import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;
