"use client";
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const useGsapAnimation = () => {
  const tl = useRef(gsap.timeline());

  const animateIn = (elements, options = {}) => {
    tl.current.fromTo(elements,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out",
        ...options 
      }
    );
  };

  const animateContent = (element, isOpening) => {
    if (isOpening) {
      gsap.fromTo(element,
        { height: 0, opacity: 0 },
        { 
          height: "auto", 
          opacity: 1, 
          duration: 0.5,
          ease: "power2.out" 
        }
      );
    } else {
      gsap.to(element, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  };

  const animatePlus = (element, isOpening) => {
    gsap.to(element, {
      rotation: isOpening ? 45 : 0,
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  return { animateIn, animateContent, animatePlus };
};

const InformationSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const contentRefs = useRef([]);
  const { animateIn, animateContent, animatePlus } = useGsapAnimation();

  const services = [
    {
      number: "01",
      title: "Architecture",
      content: "Comprehensive architectural services from concept to completion. We create innovative spaces that blend form and function while respecting the environment and client vision."
    },
    {
      number: "02", 
      title: "Interior Design",
      content: "Transform your interior spaces with our bespoke design solutions. We focus on creating environments that reflect your personality while maximizing comfort and functionality."
    },
    {
      number: "03",
      title: "Layout Planning", 
      content: "Strategic space planning that optimizes flow and functionality. Our layouts are designed to enhance user experience and maximize the potential of every square foot."
    },
    {
      number: "04",
      title: "Project Management",
      content: "End-to-end project oversight ensuring timely delivery and quality execution. We coordinate all aspects of your project to bring your vision to life seamlessly."
    }
  ];

  // useEffect(() => {
  //   animateIn(itemRefs.current, {
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 80%",
  //       toggleActions: "play none none reverse"
  //     }
  //   });
  // }, [animateIn]);

  const handleItemClick = (index) => {
    const wasActive = activeIndex === index;
    const newActiveIndex = wasActive ? null : index;
    services.forEach((_, i) => {
      if (contentRefs.current[i]) {
        animateContent(contentRefs.current[i], false);
        const plus = itemRefs.current[i]?.querySelector('.plus-sign');
        if (plus) animatePlus(plus, false);
      }
    });

    if (!wasActive) {
      setActiveIndex(index);
      setTimeout(() => {
        if (contentRefs.current[index]) {
          animateContent(contentRefs.current[index], true);
          const plus = itemRefs.current[index]?.querySelector('.plus-sign');
          if (plus) animatePlus(plus, true);
        }
      }, 50);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl flex justify-between  mx-auto">
        <div className="mb-16 text-center self-center">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            SERVICES
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="space-y-2">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <div
                ref={el => itemRefs.current[index] = el}
                className="group cursor-pointer py-8 px-4 hover:bg-gray-50 transition-colors duration-300"
                onClick={() => handleItemClick(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <span className="text-2xl md:text-3xl font-light text-gray-400 tracking-wide">
                      {service.number}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                  <div className="plus-sign w-8 h-8 relative transform transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-900"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 bg-gray-900"></div>
                  </div>
                </div>
              </div>

              <div
                ref={el => contentRefs.current[index] = el}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="pb-8 px-4">
                  <div className="max-w-2xl">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.content}
                    </p>
                    <button className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;