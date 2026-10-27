
const contactInfo = [
  {
    name: "Email",
    value: "saikat678900@gmail.com",
   href: "https://mail.google.com/mail/?view=cm&fs=1&to=saikat678900@gmail.com",
    icon: "✉",
  },
  {
    name: "GitHub",
    value: "Kamrul-web1",
    href: "https://github.com/Kamrul-web1",
    icon: "⌘",
  },
  {
    name: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/",
    icon: "in",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#080d12] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            Contact Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Let&apos;s Work{" "}
            <span className="text-lime-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Have a project idea or a job opportunity? Feel free to contact me.
            I would love to hear from you.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name === "Email" ? undefined : "_blank"}
              rel={item.name === "Email" ? undefined : "noopener noreferrer"}
              className="group rounded-2xl border border-white/10 bg-[#111820] p-6 transition hover:-translate-y-1 hover:border-lime-400/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-xl font-bold text-lime-400">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">{item.name}</h3>

              <p className="mt-2 break-all text-sm text-gray-400 transition group-hover:text-lime-400">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Kamrul-web1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 font-semibold text-black transition hover:bg-lime-300"
          >
            Visit My GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
