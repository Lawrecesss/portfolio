"use client";
import { useState, useEffect } from "react";
import Header from "@/components/ui/Header";
import { Hero } from "@/components/pages/Hero";
import PageLadderTransition from "@/components/ui/PageLadderTransition";
import AboutMe from "@/components/pages/AboutMe";
import { Footer } from "@/components/ui/Footer";
import Projects from "@/components/pages/Projects";
import ContactMe from "@/components/pages/ContactMe";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative overflow-hidden text-slate-100">
      <PageLadderTransition isVisible={isVisible} />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-4 sm:px-6">
        <Header isVisible={isVisible} />
        <Hero isVisible={isVisible} />
        <AboutMe isVisible={isVisible} />
        <Projects isVisible={isVisible} />
        <ContactMe isVisible={isVisible} />
        <Footer isVisible={isVisible} />
      </div>
    </div>
  );
}
