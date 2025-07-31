"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from '@/components/TextType';
import { TextPlugin } from "gsap/TextPlugin";


const IndexHeroSection = () => {
  const heroRef = useRef(null);
  const spiceRef = useRef(null);
  const schoolImgRef = useRef(null);
  const spiceTextRef = useRef(null);
  const wordsRef = useRef([]);
  gsap.registerPlugin(SplitText, ScrollTrigger,TextPlugin);
  useEffect(() => {
    
    // Initialize animations
    const split = new SplitText(wordsRef.current, { 
      type: "chars,words,lines" 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
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

    // Text animation
    tl.from(split.chars, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.3,
      ease: "back",
      stagger: 0.05,
    })
    .to(spiceRef.current, {
      duration: 1.6,
      text: "Welcome",
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    }, "+=0.5");

    // Cleanup
    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section className="mt-10"  ref={heroRef}>
      <div className="flex justify-between gap-4 max-w-7xl mx-auto">
        <div className="w-2/4">
          <div className="w-full text-wrap text-9xl font-bold">
            <span 
              className="text-stone-500 words" 
              data-role="words"
              ref={el => wordsRef.current[0] = el}
            >
              Hello
            </span> 
            <div className="relative h-25">
              <span
                className="text-blue-500 opacity-80 block absolute -top-4"
                ref={spiceRef}
              ></span>
            </div>
            <span 
              className="text-stone-500 words" 
              data-role="words"
              ref={el => wordsRef.current[1] = el}
            >
              To Ours 
            </span>
            <span 
              className="text-blue-500 opacity-80 words" 
              data-role="words"
              ref={el => wordsRef.current[2] = el}
            >
              University
            </span>
          </div>
        </div>
        <div 
          className="self-end rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] w-[400px] h-[400px] bg-blue-500 relative" 
          id="SchoolImg"
          ref={schoolImgRef}
        >
          <img 
            src="/images/vecteezy.png" 
            className="absolute bottom-1/3 left-0" 
            alt="University illustration" 
          />
        </div>
      </div>
    </section>
  );
};

export default IndexHeroSection;