"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
    <div ref={sectionRef} className=" px-3 mt-28 max-w-6xl mx-auto leading-30">
      <p className="fade-in   text-3xl md:text-4xl lg:text-5xl font-extrabold font-montserrat text-stone-600 leading-18">
        UCS(Hpa-an) ရဲ့ ကောလိပ်အဆင့်မှ တက္ကသိုလ် အဆင့်သို့ တိုးမြှင့်လာခဲ့သော သမိုင်းကြောင်းမှတ်တမ်းပုံများ
      </p>

      <Link href={`clients/Information`} className="fade-in font-bold underline">
        ထပ်သိချင်ရင်တော့ဒီကနေဖတ်လို့ရပါတယ်နော်
      </Link>

      <div className="grid grid-cols-1 px-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        <img src="../images/Header.jpg" alt="" className="fade-in rounded-lg" />
        <img src="../images/Header.jpg" alt="" className="fade-in rounded-lg" />
        <img src="../images/Header.jpg" alt="" className="fade-in rounded-lg" />
      </div>
    </div>
  );
};

export default HistoryGallerySection;
