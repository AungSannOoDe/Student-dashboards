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

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section className="mt-10"  ref={heroRef}>
      <div className="flex  flex-col md:flex-row  justify-around   gap-4 max-w-7xl mx-auto">
        <div className="md:w-2/4 sm:w-full ">
          <div className="w-full  text-wrap lg:text-9xl  text-5xl md:text-8xl  font-bold">
            <span 
              className="text-stone-500 words" 
              data-role="words"
              ref={el => wordsRef.current[0] = el}
            >
              Hello
            </span> 
            <div className="relative h-10 md:h-25">
              <span
                className="text-blue-500 opacity-80 block absolute  top-0 md:-top-4"
                ref={spiceRef}
              ></span>
            </div>
            <span 
              className="text-stone-500 words" 
              data-role="words"
              ref={el => wordsRef.current[1] = el}
            >
              To Our
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
          className="lg:self-end lg:mt-26 md:mt-15  mt-26   self-center rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]   md:w-[300px]  w-[200px] h-[200px]  md:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-500 relative" 
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