import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Service from "./Service";
import Contact from "./Contact";
const Hero = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="contact">
      <Contact />
      </section>
    </div>
  );
};

export default Hero;
