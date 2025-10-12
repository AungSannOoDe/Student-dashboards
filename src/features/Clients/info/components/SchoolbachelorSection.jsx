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
      gsap.fromTo(cardsRef.current.children,
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
    <section ref={sectionRef} className='max-w-7xl mx-auto px-4 py-20'>
      {/* Title Section */}
      <div className="relative mb-20">
        <p ref={titleRef} className='text-center text-6xl text-stone-600 font-bold opacity-0'>
          Graduation
        </p>
        <div 
          ref={underlineRef} 
          className="w-[300px] h-1 bg-blue-400 left-1/2 -translate-x-1/2 absolute"
        />
      </div>    

      {/* Cards Section */}
      <div ref={cardsRef} className="flex justify-center gap-20 mt-10">
        <div className="flex w-[500px] bg-white/50 h-40 gap-2 px-3 py-4 border border-stone-300 rounded-md opacity-0">
          <div className="bg-green-300 w-12 h-12 self-start rounded-full flex items-center justify-center">
            <GraduationCap className='text-green-500'/>  
          </div>
          <div>
            <p className="font-semibold text-lg">Bachelor of Computer Sciences (B.C.SC)</p>
            <p className='text-sm text-stone-600 mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eveniet.
            </p>
          </div>
        </div>
        
        <div className="flex w-[500px] bg-white/50 h-40 gap-2 px-3 py-4 border border-stone-300 rounded-md opacity-0">
          <div className="bg-purple-300 w-12 h-12 self-start rounded-full flex items-center justify-center">
            <GraduationCap className='text-purple-500'/>  
          </div>
          <div>
            <p className="font-semibold text-lg">Bachelor of Computer Technologies (B.C.T)</p>
            <p className='text-sm text-stone-600 mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eveniet.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div ref={addToRefs} className="mt-20 ml-15 opacity-0">
        <p className='text-stone-600 text-4xl font-bold mb-4'>
          What is Bachelor of Computer Science? (B.CSC)
        </p>
        <p className="text-stone-700 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, voluptate. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
      </div>
      
      <div ref={addToRefs} className="mt-20 ml-15 opacity-0">
        <p className='text-stone-600 text-4xl font-bold mb-4'>
          What is Bachelor of Computer Technology? (B.CT)
        </p>
        <p className="text-stone-700 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, voluptate. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
      </div>
    </section>
  )
}

export default SchoolbachelorSection