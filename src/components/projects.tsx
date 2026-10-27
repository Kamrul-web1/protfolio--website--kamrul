
const projects = [
  {
    name: "Bazar Dor",
    description:
      "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম দেখার একটি ওয়েব অ্যাপ।",
    image: "/bazar-dor.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    liveLink: "https://assinment-7-nine.vercel.app/",
    githubLink: "https://github.com/Kamrul-web1/assinment-7",
  },
  {
    name: "CRUD User Management",
    description:
      "ব্যবহারকারীর তথ্য তৈরি, দেখা, আপডেট ও ডিলিট করার ওয়েব অ্যাপ।",
    image: "/crud-app.png",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "",
    githubLink: "",
  },
  {
    name: "FitLog",
    description:
      "ফিটনেস এবং ওয়ার্কআউট সম্পর্কিত একটি ওয়েব প্রজেক্ট।",
    image: "/fitlog.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveLink: "",
    githubLink: "",
  },
  {
    name: "Bangla News",
    description:
      "বাংলা সংবাদ দেখানোর জন্য তৈরি একটি ওয়েব প্রজেক্ট।",
    image: "/bangla-news.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveLink: "",
    githubLink: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#080d12] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            My Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Some Things I&apos;ve{" "}
            <span className="text-lime-400">Built</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Here are some projects I have built while learning web
            development.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111820] transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
            >
              <div className="flex aspect-video items-center justify-center bg-[#19232d] p-4">
                <span className="text-center text-xl font-bold text-lime-400">
                  {project.name}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-lime-400/10 px-2.5 py-1.5 text-xs text-lime-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-lime-400 transition hover:text-lime-300"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-300 transition hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
