"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import PageLadderTransition from "@/components/PageLadderTransition";

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
      <div className="px-40">
        <Header isVisible={isVisible} />
        <Hero isVisible={isVisible} />
      </div>
    </div>
  );
}
