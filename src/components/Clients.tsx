"use client";

import { content } from "@/content/content";

export default function Clients() {
  return (
    <section id="clientes" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Confianza Corporativa
          </span>
          <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
            {content.clients.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {content.clients.logos.map((client, i) => (
            <div
              key={i}
              className="group flex items-center justify-center rounded-2xl border border-gray-100 bg-light-bg/50 p-7 transition-all duration-300 hover:border-primary/25 hover:bg-white hover:shadow-md"
            >
              <picture>
                <source
                  srcSet={client.src.replace(/\.(jpg|png)$/, ".webp")}
                  type="image/webp"
                />
                <img
                  src={client.src}
                  alt={client.name}
                  width={180}
                  height={80}
                  className="h-16 w-auto max-w-[160px] object-contain grayscale opacity-65 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
