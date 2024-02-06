import About from './Sections/About';
import Contacts from './Sections/Contacts';
import Footer from './Sections/Footer';
import Header from './Sections/Header';
import Hero from './Sections/Hero';
import Reviews from './Sections/Reviews';

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
