import car from "../assets/project4.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";

const Projects = () => {
  const projectlinks = [ 
    { url: "https://github.com/yourusername/project2", isLive: false },
    { url: "https://github.com/yourusername/project3", isLive: false },
    { url: "https://github.com/huzaifa454/LampApp.git", isLive: false },
    { url: "https://github.com/yourusername/project5", isLive: false },
    { url: "https://ductscareflorida.com", isLive: true },
  ];
  const projects = [car, pro2, pro3, pro4, pro5];
  return (
    <div className="flex flex-col min-h-screen text-white font-primary py-16">
      <div className="text-center">
        <h1 className="text-3xl text-primary">My</h1>
        <h1 className="text-4xl">Projects</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={projectlinks[index].url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary rounded-lg p-4 bg-black
              transform transition-transform duration-300 hover:scale-105"
              title={
                projectlinks[index].isLive
                  ? "View Live Project"
                  : "View on GitHub"
              }
            >
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
