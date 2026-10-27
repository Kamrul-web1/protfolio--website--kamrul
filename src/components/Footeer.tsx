
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d12] px-5 py-5 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm sm:flex-row">
        <p className="text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-lime-400">
            Kamrul Hasan
          </span>
          . All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/Kamrul-web1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-lime-400"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:saikat678900@gmail.com"
            className="text-gray-400 transition hover:text-lime-400"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
