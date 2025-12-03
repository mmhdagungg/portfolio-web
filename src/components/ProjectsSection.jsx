import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Company Profile",
    description:
      "my first ever project using only html and css, reprecentate a profile of the company",
    image: "/projects/company-profile.png",
    tags: ["HTML", "CSS"],
    gitHubUrl: "https://mmhdagungg.github.io/",
  },
  {
    id: 2,
    title: "Expense Prediction",
    description:
      "an android app, my job is to create a machine learning model using historical data",
    image: "/projects/cashify.jpg",
    tags: ["Python", "FlaskAPI"],
    gitHubUrl: "https://github.com/mmhdagungg/Cashify-Project",
  },
  {
    id: 3,
    title: "Disney+ Clone",
    description:
      "A Disney+ streaming interface clone built using React JS. Includes responsive UI, movie sliders, API integration, and dynamic components.",
    image: "/projects/disneyclone.png",
    tags: ["React", "TailwindCSS", "API Integration"],
    gitHubUrl: "https://disneyclone-react.netlify.app",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each projets was carefully crafted with
          attention to detail base on my skill, and im still try to improve my
          skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text=center mt-12">
          <a
            className="cosmic-button flex items-center w-fit mx-auto gap-2"
            href="https://github.com/mmhdagungg"
            target="_blank"
          >
            {" "}
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
