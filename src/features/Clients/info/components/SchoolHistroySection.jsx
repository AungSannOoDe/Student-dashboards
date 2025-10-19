"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SchoolHistorySection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );

      gsap.fromTo(underlineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: { trigger: underlineRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );

      gsap.fromTo(imageRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 75%", toggleActions: "play none none reverse" }
        }
      );

      gsap.fromTo(textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: textRef.current, start: "top 80%", toggleActions: "play none none reverse" }
        }
      );

      gsap.fromTo(".history-article",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: { trigger: ".history-article", start: "top 85%", toggleActions: "play none none reverse" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto my-10 md:my-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="relative inline-block mb-12 md:mb-16">
        <h2 ref={titleRef} className="text-stone-500 text-3xl sm:text-4xl md:text-5xl font-bold opacity-0">
          History
        </h2>
        <div
          ref={underlineRef}
          className="h-1 sm:h-1.5 bg-blue-400 absolute left-0 bottom-0 w-24 sm:w-28 md:w-36"
        />
      </div>

      {/* Content */}
      <article className="history-article flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        {/* Image */}
        <div ref={imageRef} className="w-full lg:w-1/3 h-64 sm:h-80 lg:h-96 flex-shrink-0 opacity-0">
          <img
            src="/images/photo_1.jpeg"
            alt="School History"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="opacity-0 flex-1 text-justify">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 leading-relaxed sm:leading-loose">
            ကွန်ပျူတာတက္ကသိုလ်(ဘားအံ)ကို ကရင်ပြည်နယ်၊ ဘားအံမြို့တွင် ၂၀၀၁ ခုနှစ်မှစတင်ကာ ဖွင့်လှစ်ခဲ့ပါသည်။ ၂၀၀၂ ခုနှစ်၊ ဇန်နဝါရီလတွင် အစိုးရကွန်ပျူတာကောလိပ်(ဘားအံ)ကို ကရင်ပြည်နယ်၊ ဘားအံမြို့၊ သံလွင်မြစ် အနောက်ဘက်ရှိ ဘားကပ်စံပြကျေးရွာတွင် ဖွင့်လှစ်ခဲ့ပါသည်။ ၂၀၀၇ ခုနှစ်၊ ဇန်နဝါရီလ(၂၀)ရက်နေ့တွင် ကွန်ပျူတာတက္ကသိုလ်(ဘားအံ) အဖြစ် တက္ကသိုလ်အဆင့်သို့ တိုးမြှင့်၍ ယနေ့အထိ ဖွင့်လှစ်လျက်ရှိပါသည်။ ကွန်ပျူတာတက္ကသိုလ်(ဘားအံ)သည် ကရင်ပြည်နယ်၏ မြို့တော် ဘားအံမြို့၊ သံလွင်မြစ်၏ အနောက်ဘက်ရှိ ဘားကပ်စံပြကျေးရွာတွင် တည်ရှိပါသည်။ တက္ကသိုလ်၏ အကျယ်အဝန်းမှာ (၄၁.၃၃)ဧက ကျယ်ဝန်းပါသည်။
          </p>
        </div>
      </article>
    </section>
  );
};

export default SchoolHistorySection;
