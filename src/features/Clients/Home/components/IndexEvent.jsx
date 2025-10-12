"use client";
import { eventApiUrl, fechEvent } from '@/services/event';
import React, { useEffect, useRef } from 'react';
import useSWR from 'swr';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndexEvent = () => {
  const { data, isLoading, error } = useSWR(eventApiUrl, fechEvent);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const eventItemsRef = useRef([]);

  useEffect(() => {
    if (!data?.data || isLoading) return;

    const ctx = gsap.context(() => {
      // Create a master timeline
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        }
      });

      // First animate the line
      masterTL.fromTo(lineRef.current,
        { height: 0 },
        { height: "100%", duration: 1.5, ease: "power2.out" }
      );

      // Then animate each event item with stagger
      eventItemsRef.current.forEach((item, index) => {
        masterTL.fromTo(item,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            stagger:0.5,
            ease: "power2.out"
          },
          "-=1" // Overlap with previous animation
        );
      });

    }, timelineRef);

    return () => ctx.revert();
  }, [data, isLoading]);

  const addToRefs = (el) => {
    if (el && !eventItemsRef.current.includes(el)) {
      eventItemsRef.current.push(el);
    }
  };

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <section className="mt-6 w-full overflow-x-hidden overflow-y-visible">
      <h1 className="text-center font-bold underline text-stone-600 lg:text-5xl text-4xl sm:text3xl mb-6">
        ပွဲအစီအစဉ်များ
      </h1>

      <section 
        ref={timelineRef} 
        className="relative max-w-7xl mx-auto overflow-hidden"
      >
        {/* Animated Timeline Line */}
        <div 
          ref={lineRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] bg-black z-0 h-0"
        />
        
        {data?.data.map((event, index) => (
          <div 
            key={index} 
            ref={addToRefs}
            className={`px-[30px] lg:px-[50px] py-[10px] relative w-[50%] container ${
              index % 2 === 0 ? 'lg:left-1 -left-1' : 'lg:left-[50%] left-[51%]'
            }`}
          >
            <div 
              className={`w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] bg-stone-600 rounded-full absolute z-10 top-[32px] 
              ${index % 2 === 0 ? '-right-[20px]' : '-left-[20px]'}`} 
            />
            <div className="px-[30px] py-[20px] bg-blue-500 relative rounded-md text-white shadow-md">
              <p className='text-md font-bold'>{event.event_name}</p>
              <small>{event.event_start_time}</small>
              <p className='text-sm'>{event.event_participant}</p>
              <span 
                className={`absolute top-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent 
                ${
                  index % 2 === 0 
                    ? 'right-0 border-l-[15px] border-l-blue-500 -translate-y-1/2 translate-x-full' 
                    : 'left-0 border-r-[15px] border-r-blue-500 -translate-y-1/2 -translate-x-full'
                }`}
              ></span>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default IndexEvent;