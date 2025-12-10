"use client";
import { useState, useEffect } from "react";
import Header from "@/components/ui/Header";
import { Hero } from "@/components/pages/Hero";
import PageLadderTransition from "@/components/ui/PageLadderTransition";
import CodeStacks from "@/components/ui/CodeStacks";
import AboutMe from "@/components/pages/AboutMe";
import Certifications from "@/components/pages/Certifications";
import { Footer } from "@/components/ui/Footer";
import Background from "@/components/ui/Background";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";
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
    <div className="bg-black">
      <PageLadderTransition isVisible={isVisible} />
      <Background isVisible={isVisible} />
      <div className="px-10 md:px-32 lg:px-40">
        <Header isVisible={isVisible} />
        <Hero isVisible={isVisible} />
        <AboutMe isVisible={isVisible} />
        <Certifications isVisible={isVisible} />
        {/* <Skills isVisible={isVisible} /> */}
        <Projects isVisible={isVisible} />
        <ContactMe isVisible={isVisible} />
        <Footer isVisible={isVisible} />
      </div>
    </div>
  );
}
