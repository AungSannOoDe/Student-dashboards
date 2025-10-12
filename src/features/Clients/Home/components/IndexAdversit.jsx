"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndexAdversit = () => {
  const sectionRef = useRef(null);
  const gradientTextRef = useRef(null);

  useEffect(() => {
    // Fade-in when scrolling into view
    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(gradientTextRef.current, {
      backgroundPosition: "200% center", // move gradient
      duration: 5,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mt-10 mx-auto mb-10 flex justify-center font-montserrat opacity-0"
    >
      <div className="font-bold leading-30 text-center">
        <p className="lg:text-7xl md:text-6xl text-4xl font-extrabold text-stone-600">
          အကိုတို့ကျောင်းမှာဂျုးဂျုးတို့က
        </p>
        <p
          ref={gradientTextRef}
          className="lg:text-5xl  md:text-4xl text-2xl font-montserrat mt-10 text-center font-extrabold 
          bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 
          bg-[length:200%_200%] bg-clip-text text-transparent py-4"
        >
          5နှစ် သင်တန်းတက်ရမယ်နော်
        </p>
        <div className="relative bottom-0 ">
          <p className="tracking-widest underline  sm:text-sm  ">ဘာတွေသင်လဲဆိုတာဒီမှာဖတ်လို့ရတယ်နော်</p>
        </div>
      </div>
    </section>
  );
};

export default IndexAdversit;
