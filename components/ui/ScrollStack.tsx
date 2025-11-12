"use client";

import React, { ReactNode, useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import SpotlightCard from "@/components/ui/SpotlightCard";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <SpotlightCard
    className={`scroll-stack-card relative w-full h-96 p-10 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    spotlightColor="rgba(192,192,192,0.3)"
  >
    {children}
  </SpotlightCard>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 0,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}) => {
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const stackCompletedRef = useRef(false);

  const calculateProgress = useCallback(
    (val: number, start: number, end: number) => {
      if (val < start) return 0;
      if (val > end) return 1;
      return (val - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%"))
        return (parseFloat(value) / 100) * containerHeight;
      return parseFloat(value as string);
    },
    []
  );

  const updateCardTransforms = useCallback(
    (scrollTop: number) => {
      if (!cardsRef.current.length) return;

      const getOffset = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
      };

      const containerHeight = window.innerHeight;
      const stackPositionPx = parsePercentage(stackPosition, containerHeight);
      const scaleEndPositionPx = parsePercentage(
        scaleEndPosition,
        containerHeight
      );

      const endElement = document.querySelector(
        ".scroll-stack-end"
      ) as HTMLElement | null;
      const endElementTop = endElement ? getOffset(endElement) : 0;

      cardsRef.current.forEach((card, i) => {
        const cardTop = getOffset(card);
        const triggerStart = cardTop - stackPositionPx;
        const triggerEnd = cardTop - scaleEndPositionPx;
        const pinStart = triggerStart;
        const pinEnd = endElementTop - containerHeight / 2;

        const scaleProgress = calculateProgress(
          scrollTop,
          triggerStart,
          triggerEnd
        );
        const targetScale = baseScale + i * itemScale;
        const scale = 1 - scaleProgress * (1 - targetScale);
        const rotation = rotationAmount
          ? i * rotationAmount * scaleProgress
          : 0;

        let blur = 0;
        if (blurAmount) {
          let topCardIndex = 0;
          for (let j = 0; j < cardsRef.current.length; j++) {
            const jCardTop = getOffset(cardsRef.current[j]);
            const jTriggerStart = jCardTop - stackPositionPx;
            if (scrollTop >= jTriggerStart) topCardIndex = j;
          }
          if (i < topCardIndex) {
            blur = Math.max(0, (topCardIndex - i) * blurAmount);
          }
        }

        let translateY = 0;
        const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

        if (isPinned) translateY = scrollTop - cardTop + stackPositionPx;
        else if (scrollTop > pinEnd)
          translateY = pinEnd - cardTop + stackPositionPx;

        const newTransform = { translateY, scale, rotation, blur };
        const lastTransform = lastTransformsRef.current.get(i);

        // Increased thresholds to reduce micro-updates
        const hasChanged =
          !lastTransform ||
          Math.abs(lastTransform.translateY - newTransform.translateY) > 0.5 ||
          Math.abs(lastTransform.scale - newTransform.scale) > 0.002 ||
          Math.abs(lastTransform.rotation - newTransform.rotation) > 0.2 ||
          Math.abs(lastTransform.blur - newTransform.blur) > 0.2;

        if (hasChanged) {
          card.style.transform = `translate3d(0,${translateY}px,0) scale(${scale}) rotate(${rotation}deg)`;
          card.style.filter = blur > 0 ? `blur(${blur}px)` : "";
          card.style.zIndex = String(i);
          lastTransformsRef.current.set(i, newTransform);
        }

        if (i === cardsRef.current.length - 1) {
          const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
          if (isInView && !stackCompletedRef.current) {
            stackCompletedRef.current = true;
            onStackComplete?.();
          } else if (!isInView && stackCompletedRef.current) {
            stackCompletedRef.current = false;
          }
        }
      });
    },
    [
      itemScale,
      stackPosition,
      scaleEndPosition,
      baseScale,
      rotationAmount,
      blurAmount,
      calculateProgress,
      parsePercentage,
      onStackComplete,
    ]
  );

  const setupLenis = useCallback(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: isMobile ? false : true,
      touchMultiplier: isMobile ? 1 : 2,
      orientation: "vertical",
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      updateCardTransforms(lenis.scroll);
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const cards = Array.from(
      document.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform";
      card.style.backfaceVisibility = "hidden";
      card.style.contain = "layout style paint";
      card.style.transformStyle = "preserve-3d";
      card.style.transformOrigin = "top center";
      card.style.zIndex = String(i);
    });

    setupLenis();

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, [itemDistance, setupLenis]);

  return (
    <div className={`scroll-stack-inner relative w-full ${className}`}>
      {children}
      <div className="scroll-stack-end w-full h-px" />
    </div>
  );
};

export default ScrollStack;
