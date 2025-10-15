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

  const addToRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el)
    }
  }

  return (
    <section ref={sectionRef} className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
      {/* Header */}
      <div className="relative inline-block mb-12 md:mb-16">
        <p ref={titleRef} className='text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-0'>
          တက္ကသိုလ်၏ရည်မှန်းချက်
        </p>
      </div>

      {/* List */}
      <ul className='list-disc pl-5 sm:pl-6 md:pl-8 space-y-4'>
        <li ref={addToRefs} className="text-stone-700 text-justify text-base sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose md:leading-loose opacity-0">
          လျင်မြန်စွာ ပြောင်းလဲနေသော ဒစ်ဂျစ်တယ်ကမ္ဘာတွင် ဆန်းသစ်တီထွင်မှုနှင့် ရေရှည်တည်တံ့သော တိုးတက်မှုကို တွန်းအားပေးသည့် ကျင့်ဝတ်အရ အခြေခံပြီး နည်းပညာဆိုင်ရာကျွမ်းကျင်မှုနှင့် လူမှုရေးအရ တာဝန်ယူမှုရှိသည့် အနာဂတ်ကွန်ပျူတာပညာရှင်မျိုးဆက်သစ်များကို ပြုစုပျိုးထောင်ရန်။
        </li>
        {/* Add more list items as needed */}
      </ul>
    </section>
  )
}
