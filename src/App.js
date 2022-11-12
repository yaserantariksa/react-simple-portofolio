import "./app.css";
import Intro from "./components/intro/Intro";
import Stack from "./components/stack/Stack";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Intro />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
