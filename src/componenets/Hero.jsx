import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Service from "./Service";
import Contact from "./Contact";
const Hero = () => {
  return (
    <div className="bg-home bg-cover bg-center bg-fixed min-h-screen">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Hero;
