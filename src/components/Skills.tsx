
const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-friendly interfaces",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Creating server-side applications and APIs",
    skills: ["Node.js", "Express.js", "REST API", "CRUD Operations"],
  },
  {
    title: "Database",
    description: "Storing and managing application data",
    skills: ["MongoDB", "NoSQL"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use while developing projects",
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#080d12] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Technologies I <span className="text-lime-400">Work With</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Technologies and tools I use while learning and building web
            development projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#111820] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-lime-400/20 bg-lime-400/5 px-3 py-2 text-sm text-lime-300 transition hover:border-lime-400/60 hover:bg-lime-400/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
