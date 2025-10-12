"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const VisionSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const underlineRef = useRef(null)
  const listContainerRef = useRef(null)

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

      // List items animation with typewriter-like staggered effect
      const listItems = listContainerRef.current?.querySelectorAll('li') || []
      
      gsap.fromTo(listItems,
        { 
          y: 30, 
          opacity: 0,
          rotationX: 90
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: listContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='max-w-7xl mx-auto px-4 py-20'>
      <div className="relative inline-block mb-16 md:mb-20">
        <p ref={titleRef} className='text-stone-500 text-4xl sm:text-5xl md:text-6xl font-bold opacity-0'>
          Goals
        </p>
        <div 
          ref={underlineRef} 
          className="w-30 sm:w-32 md:w-50 h-2 bg-blue-400 absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-0"
        />
      </div>

      <div ref={listContainerRef}>
        <ul className='list-disc leading-14 text-lg pl-6 md:pl-8 space-y-4 md:space-y-6'>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ကွန်ပျူတာသိပ္ပံ၊ ကွန်ပျူတာနည်းပညာနှင့် သတင်းအချက်အလက်နည်းပညာဆိုင်ရာ ဘာသာရပ်ခွဲများစွာတွင် သင်ကြားရေးနှင့် သုတေသနလုပ်ငန်းများ ဆောင်ရွက်သော တက္ကသိုလ်တစ်ခု ဖြစ်လာရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            မြန်မာနိုင်ငံ၏ ယေဘုယျနှင့် အဆင့်မြင့် ကွန်ပျူတာပညာရေး လိုအပ်ချက်များကို ဖြည့်ဆည်းပေးရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            သင်ကြားရေးဝန်ထမ်းများ၏ သင်ကြားရေးအရည်အသွေး၊ သုတေသနလုပ်ငန်းများနှင့် လူမှုရေးစံချိန်စံညွှန်းများ မြှင့်တင်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ကျောင်းသားကျောင်းသူများ၏ အလုပ်အကိုင်အခွင့်အလမ်းများ မြှင့်တင်ရန်အတွက် အရည်အသွေးမြင့်မားသော ပညာရေးဝန်ဆောင်မှုများ ပေးအပ်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            သတင်းအချက်အလက်နှင့် ဆက်သွယ်ရေးနည်းပညာ လုပ်ငန်းများတွင် စီးပွားရေးစွမ်းဆောင်နိုင်မှုကို မြှင့်တင်ရန်။
          </li>
        </ul>
      </div>
    </section>
  )
}

export default VisionSection