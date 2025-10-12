"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
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
      // Title animation - slide from left
      gsap.fromTo(titleRef.current, 
        { 
          x: -100, 
          opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Underline animation - grow from left
      gsap.fromTo(underlineRef.current,
        { 
          scaleX: 0, 
          transformOrigin: "left center" 
        },
        { 
          scaleX: 1, 
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: underlineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation - slide from right with scale
      gsap.fromTo(imageRef.current,
        { 
          x: 100, 
          opacity: 0,
          scale: 0.8
        },
        { 
          x: 0, 
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text animation - fade in with slight delay
      gsap.fromTo(textRef.current,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Optional: Container animation for the entire article
      gsap.fromTo(".history-article",
        { 
          opacity: 0 
        },
        { 
          opacity: 1, 
          duration: 0.5,
          scrollTrigger: {
            trigger: ".history-article",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section ref={sectionRef} className='max-w-7xl mx-auto my-10 md:my-20 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className="relative inline-block mb-16 md:mb-20">
        <p ref={titleRef} className='text-stone-500 text-4xl sm:text-5xl md:text-6xl font-bold opacity-0'>
          History
        </p>
        <div 
          ref={underlineRef} 
          className="w-30 sm:w-32 md:w-50 h-2 bg-blue-400 absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-0"
        />
      </div>
      
      {/* Content Section */}
      <div className="mt-30 md:mt-20">
        <article className="history-article flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div 
            ref={imageRef}
            className="h-45 w-60 px-4 flex-shrink-0 opacity-0"
          >
            <img
              src="/images/Header.jpg"
              alt="School History"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Text Content */}
          <div 
            ref={textRef}
            className="p-6 sm:p-8 md:p-10 opacity-0 flex-1"
          >
            <p className="text-stone-700 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-justify">
              ကွန်ပျူတာတက္ကသိုလ်(ဘားအံ)ကို ကရင်ပြည်နယ်၊ ဘားအံမြို့တွင် ၂၀၀၁ ခုနှစ်မှစတင်ကာ ဖွင့်လှစ်ခဲ့ပါသည်။၂၀၀၂ ခုနှစ်၊ ဇန်နဝါရီလ တွင် အစိုးရကွန်ပျူတာကောလိပ်(ဘားအံ)ကို  ကရင်ပြည်နယ်၊ ဘားအံမြို့၊ သံလွင်မြစ် အနောက်ဘက်ရှိ ဘားကပ်စံပြကျေးရွာတွင် ဖွင့်လှစ်ခဲ့ပါသည်။ ၂၀၀၇-ခုနှစ်၊ ဇန်နဝါရီလ(၂၀)ရက်နေ့တွင် ကွန်ပျူတာတက္ကသိုလ်(ဘားအံ) အဖြစ် တက္ကသိုလ်အဆင့် သို့ တိုးမြှင့်၍ ယနေ့အထိ ဖွင့်လှစ်လျက်ရှိပါသည်။ွန်ပျူတာတက္ကသိုလ်(ဘားအံ)သည် ကရင်ပြည်နယ်၏ မြို့တော် ဘားအံမြို့၊ သံလွင်မြစ်၏ အနောက်ဘက်ရှိ ဘားကပ်စံပြကျေးရွာတွင် တည်ရှိပါသည်။တက္ကသိုလ်၏ အကျယ်အဝန်းမှာ (၄၁.၃၃)ဧက ကျယ်ဝန်းပါသည်။
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SchoolHistorySection;