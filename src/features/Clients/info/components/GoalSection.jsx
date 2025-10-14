"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const GoalSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const underlineRef = useRef(null)
  const listItemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { x: -80, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Underline animation
      gsap.fromTo(underlineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { 
          scaleX: 1, duration: 1.2, delay: 0.3, ease: "power2.out",
          scrollTrigger: {
            trigger: underlineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // List items animation with stagger
      gsap.fromTo(listItemsRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.3,
          scrollTrigger: {
            trigger: listItemsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Helper function to add refs to list items
  const addToRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el)
    }
  }

  return (
    <section ref={sectionRef} className='max-w-7xl mx-auto px-4 py-20'>
      <div className="relative inline-block mb-16 md:mb-20">
        <p ref={titleRef} className='text-stone-500 text-4xl sm:text-5xl md:text-6xl font-bold opacity-0'>
          တက္ကသိုလ်၏ရည်မှန်းချက်
        </p>
        <div 
          ref={underlineRef} 
          className=" w-60 sm:w-60 md:w-[570px] h-2 bg-blue-400 absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-0"
        />
      </div>

      <ul className='list-none leading-14 text-lg pl-6 md:pl-8'>
        <li ref={addToRefs} className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg mb-4 opacity-0">

         "လျင်မြန်စွာ ပြောင်းလဲနေသော ဒစ်ဂျစ်တယ်ကမ္ဘာတွင် ဆန်းသစ်တီထွင်မှုနှင့် ရေရှည်တည်တံ့သော တိုးတက်မှုကို တွန်းအားပေးသည့် ကျင့်ဝတ်အရ အခြေခံပြီး နည်းပညာဆိုင်ရာကျွမ်းကျင်မှုနှင့် လူမှုရေးအရ တာဝန်ယူမှုရှိသည့် အနာဂတ်ကွန်ပျူတာပညာရှင်မျိုးဆက်သစ်များကို ပြုစုပျိုးထောင်ရန်။"
        </li>
       
        {/* Add more list items as needed */}
      </ul>
    </section>
  )
}