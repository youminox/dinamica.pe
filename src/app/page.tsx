"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import Clients from "@/components/Clients";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Header onOpenQuote={() => setQuoteOpen(true)} />
      <main>
        <Hero onOpenQuote={() => setQuoteOpen(true)} />
        <Stats />
        <Experience />
        <Services />
        <Process />
        <Differentials />
        <Clients />
        <CTASection onOpenQuote={() => setQuoteOpen(true)} />
        <FAQ />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
