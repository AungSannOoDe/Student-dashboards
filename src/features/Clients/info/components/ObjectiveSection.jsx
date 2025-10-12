"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ObjectiveSection = () => {
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

      // List items animation with cascading effect
      const listItems = listContainerRef.current?.querySelectorAll('li') || []
      
      gsap.fromTo(listItems,
        { 
          x: -100, 
          opacity: 0,
          scale: 0.8
        },
        { 
          x: 0, 
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: listContainerRef.current,
            start: "top 80%",
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
          Objectives
        </p>
        <div 
          ref={underlineRef} 
          className="w-30 sm:w-32 md:w-50 h-2 bg-blue-400 absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-0"
        />
      </div>

      <div ref={listContainerRef}>
        <ul className='list-disc leading-14 text-lg pl-6 md:pl-8 space-y-6 md:space-y-8'>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            မြန်မာနိုင်ငံအတွက် သတင်းအချက်အလက်နည်းပညာပညာရှင်များ၊ ခေါင်းဆောင်များနှင့် စီးပွားရေးလုပ်ငန်းရှင်များကို လေ့ကျင့်မွေးထုတ်ပေးရန်နှင့် ပညာရေးနယ်ပယ်နှင့် ကျွမ်းကျင်မှုနယ်ပယ်နှစ်ခုလုံးတွင် သုတေသနနှင့်ဖွံ့ဖြိုးရေးလုပ်ငန်းများ မြှင့်တင်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            မြန်မာနိုင်ငံ၏ ယေဘုယျနှင့် အဆင့်မြင့် ကွန်ပျူတာပညာရေး လိုအပ်ချက်များကို ဖြည့်ဆည်းရန်နှင့် သုတေသနနှင့် ပညာရေးဆိုင်ရာ လုပ်ငန်းများကို မြှင့်တင်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            တက္ကသိုလ်၏ ပညာရေးအရည်အသွေးနှင့် သင်ယူမှုပတ်ဝန်းကျင်ကို မြှင့်တင်ရန်နှင့် ကျောင်းသားဘဝအရည်အသွေးကို မြှင့်တင်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ကွန်ပျူတာဘာသာရပ်များတွင် ဘွဲ့ကြိုဘွဲ့များ၊ ဘွဲ့လွန်ဒီပလိုမာများနှင့် ဒီပလိုမာသင်တန်းများ ပို့ချပေးရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            နိုင်ငံတော်၏ ဖွံ့ဖြိုးရေးအတွက် အထောက်အကူပြုသော သုတေသနများပြုလုပ်ရန်နှင့် အရည်အချင်းပြည့်ဝသော ကျွမ်းကျင်ပညာရှင်များဖြင့် သတင်းအချက်အလက်နည်းပညာ သုတေသနနှင့် ဖွံ့ဖြိုးရေးလုပ်ငန်းများ ဆောင်ရွက်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ဆရာဗဟိုပြု သင်ကြားရေးနည်းလမ်းမှ ကျောင်းသားဗဟိုပြု သင်ကြားရေးနည်းလမ်းသို့ ချောမောစွာ ကူးပြောင်းရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            စက်မှုလုပ်ငန်း-တက္ကသိုလ် မိတ်ဖက်ပူးပေါင်းမှုများကို မြှင့်တင်ခြင်းနှင့် စက်မှုလုပ်ငန်းနှင့် နိုင်ငံဖွံ့ဖြိုးရေးအတွက် အရေးပါသော ပေါ်ထွန်းနေသည့် နည်းပညာများဆိုင်ရာ အသိပညာများ မျှဝေခြင်းဖြင့် ပညာရေးထူးချွန်မှုကို မြှင့်တင်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ကောင်းမွန်သော အုပ်ချုပ်ရေးစနစ်ကို မြှင့်တင်ခြင်းနှင့် အဆင်ပြေသော စာသင်ခန်းပတ်ဝန်းကျင်ကို ဖန်တီးပေးရန်။
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ObjectiveSection