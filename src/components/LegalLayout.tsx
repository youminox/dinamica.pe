"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 border-b border-gray-200 pb-8">
            <a
              href="/"
              className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al inicio
            </a>
            <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-brand-gray">
              Última actualización: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-brand-gray leading-relaxed [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-black [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-brand-black [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-sm [&_a]:text-primary [&_a]:underline [&_strong]:text-brand-black">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
