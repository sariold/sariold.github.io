import "./App.css";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Academia from "./sections/Projects/Academia";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Academia />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
