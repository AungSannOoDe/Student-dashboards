"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
const usePoster = () => {
const heroSectionRef = useRef(null);
  const schoolImgRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const outerScrollRef = useRef(null);
  const innerScrollRef = useRef(null);
gsap.registerPlugin(ScrollTrigger, SplitText);
  useEffect(() => {
  // Only run animations on client-side
  if (typeof window !== 'undefined') {

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // School image animation
    tl.from(schoolImgRef.current, {
      scale: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      immediateRender: false
    })
  .to(schoolImgRef.current, {
    scale: 1.05,
    duration: 0.5,
    ease: "power2.out"
  })
  .to(schoolImgRef.current, {
    scale: 1,
    duration: 0.3
  });

  gsap.fromTo(scrollIndicatorRef.current, {
    y: -20
  }, {
    y: 0,
    duration: 1,
    ease: "bounce.out",
    repeat: -1,
    yoyo: true
  });

  // Horizontal scroll animation
  gsap.fromTo(innerScrollRef.current, {
    translateX: 0
  }, {
    translateX: "-500vw",
    ease: "none",
    duration: 1,
    scrollTrigger: {
      trigger: outerScrollRef.current,
      start: "top top",
      pin: true,
      scrub: 1
    }
  });
    }
  }, []);
  return{
    heroSectionRef,
    scrollIndicatorRef,
    outerScrollRef,
    innerScrollRef,

  }
}

export default usePoster