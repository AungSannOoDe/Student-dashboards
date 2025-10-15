"use client";
import { GraduationCap, Phone } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const SchoolbachelorSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const underlineRef = useRef(null)
  const cardsRef = useRef(null)
  const contentRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Underline animation
      gsap.fromTo(underlineRef.current,
        { 
          scaleX: 0, 
          transformOrigin: "left center" 
        },
        { 
          scaleX: 1, 
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: underlineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards animation (staggered)
      gsap.fromTo(cardsRef.current?.children || [],
        { 
          y: 60, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Content sections animation
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(ref,
            { 
              x: index % 2 === 0 ? -50 : 50, 
              opacity: 0 
            },
            { 
              x: 0, 
              opacity: 1, 
              duration: 1,
              scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert() // Cleanup
  }, [])

  // Helper function to add refs to content sections
  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <section ref={sectionRef} className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20'>
      {/* Title Section */}
      <div className="relative mb-12 md:mb-16 lg:mb-20">
        <p 
          ref={titleRef} 
          className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-600 font-bold opacity-0 px-2 sm:px-4'
        >
          Graduation
        </p>
        <div 
          ref={underlineRef} 
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-1 sm:h-1.5 bg-blue-400 left-1/2 -translate-x-1/2 absolute mt-2 sm:mt-3 md:mt-4"
        />
      </div>    

      {/* Cards Section */}
      <div 
        ref={cardsRef} 
        className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
      >
        {/* B.C.SC Card */}
        <div className="flex w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white/50 h-auto min-h-[120px] sm:min-h-[130px] md:min-h-[140px] gap-3 sm:gap-4 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border border-stone-300 rounded-lg shadow-sm opacity-0 hover:shadow-md transition-shadow duration-300">
          <div className="bg-green-300 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 self-start rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <GraduationCap className='text-green-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/>  
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-stone-800 leading-tight sm:leading-snug md:leading-relaxed">
              Bachelor of Computer Science (B.C.Sc.)
            </p>
            <p className="text-xs sm:text-sm md:text-base text-stone-600 mt-2 sm:mt-3 leading-relaxed">
              4-year comprehensive computer science program focusing on software development, algorithms, and computer systems.
            </p>
          </div>
        </div>
        
        {/* B.C.T Card */}
        <div className="flex w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white/50 h-auto min-h-[120px] sm:min-h-[130px] md:min-h-[140px] gap-3 sm:gap-4 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border border-stone-300 rounded-lg shadow-sm opacity-0 hover:shadow-md transition-shadow duration-300">
          <div className="bg-purple-300 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 self-start rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <GraduationCap className='text-purple-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/>  
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-stone-800 leading-tight sm:leading-snug md:leading-relaxed">
              Bachelor of Computer Technology (B.C.Tech.)
            </p>
            <p className="text-xs sm:text-sm md:text-base text-stone-600 mt-2 sm:mt-3 leading-relaxed">
              4-year technology-focused program emphasizing practical applications, hardware systems, and emerging technologies.
            </p>
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default SchoolbachelorSection