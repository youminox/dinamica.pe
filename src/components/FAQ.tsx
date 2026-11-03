"use client";

import { useState } from "react";
import { content } from "@/content/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Preguntas Frecuentes
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-brand-black sm:text-4xl">
            Resolvemos tus dudas sobre limpieza de oficinas
          </h2>
          <p className="text-lg text-brand-gray">
            Todo lo que necesitas saber antes de contratar el servicio de limpieza para tu empresa.
          </p>
        </div>

        <div className="space-y-3">
          {content.faq.map((item, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                openIndex === i
                  ? "border-primary/40 bg-light-bg/70 shadow-sm"
                  : "border-gray-200 bg-white hover:border-primary/25"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="pr-4 text-base font-bold text-brand-black">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`grid transition-all duration-200 ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-brand-gray">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
