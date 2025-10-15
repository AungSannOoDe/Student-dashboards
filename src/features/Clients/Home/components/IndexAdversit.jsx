"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
        <p className="lg:text-6xl md:text-5xl text-3xl font-extrabold text-stone-600">
          အစ်ကိုတို့တက္ကသိုလ်မှာ သစ်လွင်မောင်မယ်တို့က
        </p>
        <p
          ref={gradientTextRef}
          className="lg:text-5xl  md:text-4xl text-2xl font-montserrat mt-10 text-center font-extrabold 
          bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 
          bg-[length:200%_200%] bg-clip-text text-transparent py-4"
        >
          ၄ နှစ် သင်တန်းတက်ရမယ်နော်
        </p>
        <div className="relative bottom-0 ">
            <Link href={`/clients/Information`} className="tracking-widest underline  sm:text-sm  ">ဘာတွေသင်လဲဆိုတာဒီမှာဖတ်လို့ရပါတယ်</Link>
        </div>
      </div>
    </section>
  );
};

export default IndexAdversit;
