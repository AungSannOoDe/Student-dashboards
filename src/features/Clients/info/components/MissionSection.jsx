"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const MissionSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const underlineRef = useRef(null)
  const listContainerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - fade in with scale
      gsap.fromTo(titleRef.current, 
        { 
          scale: 0.8, 
          opacity: 0,
          rotationY: 90
        },
        { 
          scale: 1, 
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Underline animation - grow from center
      gsap.fromTo(underlineRef.current,
        { 
          scaleX: 0, 
          transformOrigin: "center center" 
        },
        { 
          scaleX: 1, 
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: underlineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // List items animation with typewriter effect
      const listItems = listContainerRef.current?.querySelectorAll('li') || []
      
      gsap.fromTo(listItems,
        { 
          x: -80, 
          opacity: 0,
          filter: "blur(10px)"
        },
        { 
          x: 0, 
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
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
          Mission
        </p>
        <div 
          ref={underlineRef} 
          className="w-30 sm:w-32 md:w-50 h-2 bg-blue-400 absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-0"
        />
      </div>

      <div ref={listContainerRef}>
        <ul className='list-disc leading-14 text-lg pl-6 md:pl-8 space-y-6 md:space-y-8'>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ကွန်ပျူတာနှင့် သတင်းအချက်အလက်နည်းပညာဆိုင်ရာ ဘာသာရပ်များမှတစ်ဆင့် လူ့စွမ်းအားအရင်းအမြစ်၊ စီးပွားရေး၊ လူမှုရေးနှင့် ပညာရေးစသည့် ကဏ္ဍပေါင်းစုံ ဖွံ့ဖြိုးတိုးတက်ရေး လုပ်ငန်းဆောင်တာများအတွက် အခွင့်အလမ်းများ ပိုမိုရရှိရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            နိုင်ငံတကာမှ ခေတ်မီအဆင့်မီနည်းပညာများကို လေ့လာသုံးသက်၍ နိုင်ငံတော်အတွက် နည်းပညာကို ထိရောက်စွာ အသုံးချနိုင်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ကွန်ပျူတာနယ်ပယ်ဆိုင်ရာ သတင်းအချက်အလက်နည်းပညာ သုတေသနလုပ်ငန်းများ ထူထောင်ရန်အတွက် နိုင်ငံတကာအဖွဲ့အစည်းများ၊ အဆင့်မြင့်ပညာဌာနများနှင့် သုတေသနအဖွဲ့အစည်းများနှင့် ပူးပေါင်းဆောင်ရွက်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ကာယ၊ စာရိတ္တ၊ ကုသိုလ်တရား၊ လူမှုရေးနှင့် စီးပွားရေးဟူသော အားသာချက်ငါးရပ်နှင့် ပြည့်စုံသည့် လူ့စွမ်းအားအရင်းအမြစ်များ မွေးထုတ်ပေးရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ဆန်းသစ်တီထွင်မှုများ၏ သုတေသန ဆန်းစစ်လေ့လာချက်ကို အလေးထားသော သင်ကြားရေး-သင်ယူရေး ပတ်ဝန်းကျင် အသစ်ကို ဖန်တီးပေးရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed md:leading-loose text-base md:text-lg">
            ပညာရေး၊ သုတေသနနှင့် ဝန်ဆောင်မှုကဏ္ဍများ၏ အရည်အသွေးကို မြှင့်တင်ခြင်းဖြင့် အရည်အသွေးအာမခံချက်ရှိသော တက္ကသိုလ်တစ်ခု ဖြစ်လာရန်။
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MissionSection