
"use client";

import React from "react";

export default function ResumePage() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 text-gray-800 sm:py-12">
      <div className="mx-auto mb-6 flex max-w-[800px] justify-end gap-3 print:hidden">
        <button
          onClick={() => window.history.back()}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Go Back
        </button>

        <button
          onClick={handleDownload}
          className="rounded-md bg-green-700 px-5 py-2 text-sm font-semibold text-white hover:bg-green-800"
        >
          Download Resume PDF
        </button>
      </div>

      <article
        id="resume"
        className="mx-auto min-h-[1120px] max-w-[800px] bg-white px-7 py-10 shadow-md sm:px-12 sm:py-12 print:min-h-0 print:max-w-none print:p-0 print:shadow-none"
      >
        <header className="border-b-2 border-gray-800 pb-5 text-center">
          <h1 className="text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl">
            KAMRUL HASAN
          </h1>

          <p className="mt-2 text-lg font-semibold text-green-700">
            Full Stack Web Developer
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
            <a href="mailto:saikat987600@gmail.com">
              saikat987600@gmail.com
            </a>

            <a
              href="https://github.com/Kamrul-web1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </header>

        <section className="mt-6">
          <SectionTitle title="Professional Summary" />

          <p className="text-sm leading-6 text-gray-700">
            Aspiring Full Stack Web Developer learning to build responsive
            and user-friendly web applications using modern web technologies.
            Passionate about improving development skills through practical
            projects and continuous learning.
          </p>
        </section>

        <section className="mt-6">
          <SectionTitle title="Technical Skills" />

          <div className="space-y-2 text-sm leading-6 text-gray-700">
            <p>
              <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React,
              Next.js
            </p>

            <p>
              <strong>Backend:</strong> Node.js, Express.js
            </p>

            <p>
              <strong>Database:</strong> MongoDB
            </p>

            <p>
              <strong>Tools:</strong> Git, GitHub, REST APIs
            </p>
          </div>
        </section>

        <section className="mt-6">
          <SectionTitle title="Projects" />

          <div className="space-y-5">
            <div>
              <h3 className="font-bold text-gray-900">
                Bazar Dor — Product Price Tracking Website
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-700">
                A Bangla-focused website for viewing product prices and
                market price information. Built using Next.js and API
                integration.
              </p>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <a
                  href="https://assinment-7-nine.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 underline"
                >
                  Live Website
                </a>

                <a
                  href="https://github.com/Kamrul-web1/assinment-7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 underline"
                >
                  Source Code
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                User Management CRUD App
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-700">
                A practice project for creating, reading, updating and
                deleting user data using Express.js, MongoDB and APIs.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <SectionTitle title="Education" />

          <h3 className="font-semibold text-gray-900">
            Secondary School Certificate (SSC)
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            Institution and passing year can be added.
          </p>
        </section>

        <section className="mt-6">
          <SectionTitle title="Professional Development" />

          <p className="text-sm leading-6 text-gray-700">
            Learning full-stack web development through hands-on projects,
            coding practice and continuous improvement.
          </p>
        </section>

        <footer className="mt-8 border-t border-gray-300 pt-3 text-center text-xs text-gray-500">
          Kamrul Hasan | Full Stack Web Developer
        </footer>
      </article>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          body * {
            visibility: hidden;
          }

          #resume,
          #resume * {
            visibility: visible;
          }

          #resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            min-height: 0 !important;
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
          }

          a {
            text-decoration: none !important;
            color: #374151 !important;
          }

          section {
            break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-3 border-b border-gray-300 pb-2 text-base font-bold uppercase tracking-wider text-gray-900">
      {title}
    </h2>
  );
}
