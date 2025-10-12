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
          Vision
        </p>
        <div 
          ref={underlineRef} 
          className="w-30 sm:w-32 md:w-50 h-2 bg-blue-400 absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-0"
        />
      </div>

      <ul className='list-disc leading-14 text-lg pl-6 md:pl-8'>
        <li ref={addToRefs} className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg mb-4 opacity-0">
          ကွန်ပျူတာပညာရှင်များအား ကျင့်ဝတ်သိက္ခာနှင့်အညီ မွေးထုတ်ပေးပြီး ခေတ်မီကွန်ပျူတာဘာသာရပ်များကို အဆက်မပြတ်သင်ယူနိုင်စွမ်းရှိသော တက္ကသိုလ်တစ်ခုဖြစ်လာရန်။
        </li>
        <li ref={addToRefs} className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg mb-4 opacity-0">
          ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်အား သတင်းအချက်အလက်နှင့်ဆက်သွယ်ရေးနည်းပညာနှင့်အညီ ခေတ်မီဖွံ့ဖြိုးပြီးနိုင်ငံအဖြစ် ဖွံ့ဖြိုးတိုးတက်စေရန်။
        </li>
        {/* Add more list items as needed */}
      </ul>
    </section>
  )
}