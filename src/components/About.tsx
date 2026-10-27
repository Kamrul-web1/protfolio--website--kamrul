import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#080d12] px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left Side: Introduction */}
        <div className="order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Hello, I&apos;m{" "}
            <span className="text-lime-400">Kamrul Hasan</span>
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-300 sm:text-2xl">
            Aspiring Full Stack Web Developer
          </h3>

          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            I am a passionate web development learner who enjoys creating
            modern, responsive, and user-friendly websites. I am learning
            to build complete web applications using frontend and backend
            technologies.
          </p>

          <p className="mt-4 max-w-xl leading-8 text-gray-400">
            My current focus is on JavaScript, React, Next.js, Node.js,
            Express.js, and MongoDB. I love learning new technologies,
            solving problems, and improving my coding skills through
            real-world projects.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-lime-400/30 bg-lime-400/5 px-4 py-2 text-sm text-lime-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="mt-9">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              View My Resume
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="relative order-2 flex min-h-[600px] items-center justify-center overflow-hidden bg-[#08090b] px-6 sm:px-12 md:justify-end">
          {/* Background glow */}
          <div className="absolute left-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-green-500/10 blur-3xl" />

          {/* Profile Image - Right Side */}
          <div className="relative z-10 h-[280px] w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#102d50] sm:h-[420px] sm:w-[420px]">
            <Image
              src="/kamul.jpg"
              alt="Kamrul Hasan"
              width={500}
              height={600}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>  
    </section>
  );
}