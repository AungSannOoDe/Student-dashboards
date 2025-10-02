"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HistoryGallerySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-in").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mt-28 max-w-6xl mx-auto leading-30">
      <p className="fade-in text-5xl font-extrabold font-montserrat text-stone-600 leading-18">
        အကိုတို့ကျောင်းရဲ့ေကာလိပ်က‌‌ေနတကသသုိလ်ထိသမိုင်းကြောင်းတွေပေါ့
      </p>

      <p className="fade-in font-bold underline">
        ထပ်သိချင်ရင်တော့ဒီကနေဖတ်လို့ရပါတယ်နော်
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        <img src="../images/Header.jpg" alt="" className="fade-in rounded-lg" />
        <img src="../images/Header.jpg" alt="" className="fade-in rounded-lg" />
        <img src="../images/Header.jpg" alt="" className="fade-in rounded-lg" />
      </div>
    </div>
  );
};

export default HistoryGallerySection;
