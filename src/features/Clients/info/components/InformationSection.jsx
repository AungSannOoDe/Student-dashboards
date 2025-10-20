"use client";
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import useSWR from 'swr';
import { fetchsubject, yearsubjectApiUrl } from '@/services/subject';

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
  const [activeIndex, setActiveIndex] = useState({});
  const sectionRefs = useRef([]);
  const itemRefs = useRef([]);
  const contentRefs = useRef([]);
  const { animateIn, animateContent, animatePlus } = useGsapAnimation();
  const { data, isLoading, error } = useSWR(`${yearsubjectApiUrl}`, fetchsubject);

  const handleItemClick = (yearIndex, subjectIndex) => {
    const key = `${yearIndex}-${subjectIndex}`;
    const wasActive = activeIndex[key];
    
    // Close all items in the same year
    if (data?.data?.[yearIndex]?.subjects) {
      data.data[yearIndex].subjects.forEach((_, i) => {
        const currentKey = `${yearIndex}-${i}`;
        if (contentRefs.current[currentKey]) {
          animateContent(contentRefs.current[currentKey], false);
          const plus = itemRefs.current[currentKey]?.querySelector('.plus-sign');
          if (plus) animatePlus(plus, false);
        }
      });
    }

    if (!wasActive) {
      setActiveIndex(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        if (contentRefs.current[key]) {
          animateContent(contentRefs.current[key], true);
          const plus = itemRefs.current[key]?.querySelector('.plus-sign');
          if (plus) animatePlus(plus, true);
        }
      }, 50);
    } else {
      setActiveIndex(prev => ({ ...prev, [key]: false }));
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <section className="min-h-screen bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            LOADING...
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="min-h-screen bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            ERROR
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gray-900 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl text-red-500 px-4">Failed to load subjects</p>
        </div>
      </section>
    );
  }

  // Empty state
  if (!data?.data?.length) {
    return (
      <section className="min-h-screen bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            NO DATA
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gray-900 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 px-4">No subjects available</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {data.data.map((yearItem, yearIndex) => (
        <section 
          ref={el => sectionRefs.current[yearIndex] = el}
          className="min-h-screen bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8"  
          key={yearItem.id || yearIndex}
        >
          <div className="max-w-7xl mx-auto">
            {/* Mobile & Tablet Layout - Stacked */}
            <div className="lg:hidden space-y-8">
              <div className="text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                  {yearItem.year_name} 
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gray-900 mx-auto"></div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {yearItem.subjects?.length > 0 ? (
                  yearItem.subjects.map((subject, subjectIndex) => (
                    <div key={subject.id || subjectIndex} className="border-b border-gray-200 last:border-b-0">
                      <div
                        ref={el => itemRefs.current[`${yearIndex}-${subjectIndex}`] = el}
                        className="group cursor-pointer py-4 sm:py-6 px-3 sm:px-4 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => handleItemClick(yearIndex, subjectIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 sm:space-x-6">
                            <span className="text-xl sm:text-2xl font-light text-gray-400 tracking-wide">
                              {(subjectIndex + 1).toString().padStart(2, '0')}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-900 tracking-wide break-words max-w-[200px] sm:max-w-none">
                              {subject.sub_name}
                            </h3>
                          </div>
                          <div className="plus-sign w-6 h-6 sm:w-7 sm:h-7 relative transform transition-transform duration-300 group-hover:scale-110 flex-shrink-0 ml-2">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 sm:w-5 h-0.5 bg-gray-900"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 sm:h-5 bg-gray-900"></div>
                          </div>
                        </div>
                      </div>

                      <div
                        ref={el => contentRefs.current[`${yearIndex}-${subjectIndex}`] = el}
                        className="overflow-hidden"
                        style={{ height: 0, opacity: 0 }}
                      >
                        <div className="pb-4 sm:pb-6 px-3 sm:px-4">
                          <div className="max-w-2xl">
                            {/* Show subject image if available */}
                            {subject.images && (
                              <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">
                                <img 
                                  src={`/storage/subject/${subject.images}`}
                                  alt={subject.sub_name}
                                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                            )}
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center sm:text-left">
                              {subject.description || 'No description available.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 sm:py-8">
                    <p className="text-gray-500 text-base sm:text-lg">No subjects available for this year</p>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:flex justify-between">
              <div className="mb-16 text-center self-center flex-1 max-w-md">
                <h2 className="text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight mb-4">
                  {yearItem.year_name} 
                </h2>
                <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
              </div>

              <div className="space-y-2 flex-1 max-w-4xl ml-12 xl:ml-16">
                {yearItem.subjects?.length > 0 ? (
                  yearItem.subjects.map((subject, subjectIndex) => (
                    <div key={subject.id || subjectIndex} className="border-b border-gray-200 last:border-b-0">
                      <div
                        ref={el => itemRefs.current[`${yearIndex}-${subjectIndex}`] = el}
                        className="group cursor-pointer py-8 px-4 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => handleItemClick(yearIndex, subjectIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-8">
                            <span className="text-2xl xl:text-3xl font-light text-gray-400 tracking-wide">
                              {(subjectIndex + 1).toString().padStart(2, '0')}
                            </span>
                            <h3 className="text-3xl xl:text-4xl font-normal text-gray-900 tracking-wide">
                              {subject.sub_name}
                            </h3>
                          </div>
                          <div className="plus-sign w-8 h-8 relative transform transition-transform duration-300 group-hover:scale-110">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-900"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 bg-gray-900"></div>
                          </div>
                        </div>
                      </div>

                      <div
                        ref={el => contentRefs.current[`${yearIndex}-${subjectIndex}`] = el}
                        className="overflow-hidden"
                        style={{ height: 0, opacity: 0 }}
                      >
                        <div className="pb-8 px-4">
                          <div className="max-w-2xl">
                            {/* Show subject image if available */}
                            {subject.images && (
                              <div className="mb-4">
                                <img 
                                  src={`/storage/subject/${subject.images}`}
                                  alt={subject.sub_name}
                                  className="w-32 h-32 object-cover rounded-lg"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                            )}
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {subject.description || 'No description available.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">No subjects available for this year</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default InformationSection;