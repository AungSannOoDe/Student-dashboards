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
    <section 
      ref={sectionRef} 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20"
    >
      {/* Title Section */}
      <div className="relative mb-8 sm:mb-12 lg:mb-16 xl:mb-20 w-full">
        <p 
          ref={titleRef} 
          className="text-stone-500 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 text-center"
        >
          တက္ကသိုလ်၏ တာဝန်
        </p>
        </div>

      {/* List Section */}
      <div ref={listContainerRef}>
        <ol className="list-decimal leading-relaxed space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 pl-4 xs:pl-5 sm:pl-6 md:pl-7 lg:pl-8">
          <li className="text-stone-700 text-justify leading-relaxed sm:leading-loose text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
            ပြောင်းလဲနေသော ကမ္ဘာ့လူ့အဖွဲ့အစည်း၏ စိန်ခေါ်မှုများ အတွက် ကျောင်းသားများကို ပြင်ဆင်ပေးရန် နက်ရှိုင်းသောသီအိုရီနှင့် အသိပညာ၊ လက်တွေ့ကျွမ်းကျင်မှုနှင့်ကျင့်ဝတ်ဆိုင်ရာ အခြေခံသဘော တရားများကို ပေါင်းစပ်ထားသည့် အပြောင်းအလဲဖြစ်ထွန်းစေသော ကွန်ပျူတာ ပညာရေးကို ပေးအပ်ရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed sm:leading-loose text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
            လူ့အဖွဲ့အစည်း၏လိုအပ်ချက်များကို ဖြည့်ဆည်းပေးရန်နှင့် အပြုသဘော ဆောင်သော ပြောင်းလဲမှုများ ကိုဖန်တီးပေးရန် ဆန်းသစ်သော၊ စီးပွားရေးအရဖြစ်ထွန်းနိုင်သော၊ သဘာဝပတ်ဝန်းကျင်နှင့် ရေရှည်တည်တံ့ သော ဖြေရှင်းနည်းများကို တီထွင်ဖန်တီးနိုင်ရန် တစ်ဦးချင်းစီအား ကျွမ်းကျင်မှုနှင့် အသိပညာဗဟုသုတများ ပံ့ပိုးပေးရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed sm:leading-loose text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
            ကျောင်းသားများ၏အသက်မွေးဝမ်းကြောင်းတွင် ထူးချွန်စွာစွမ်းဆောင် နိုင်ရန်၊ ရှုပ်ထွေးသောစိန်ခေါ်မှုများကို ကိုင်တွယ်ဖြေရှင်းရန်နှင့် မျှတပြီး ရေရှည်တည်တံ့သော ဖွံ့ဖြိုးတိုးတက်မှုအတွက် အထောက်အကူဖြစ်စေရန် ဝေဖန်သုံးသပ်နိုင်စွမ်း၊ တီထွင်ဖန်တီးနိုင်စွမ်းနှင့် ပြဿနာဖြေရှင်းနိုင်စွမ်း များကို မြှင့်တင်ပေးရန်။
          </li>
          <li className="text-stone-700 text-justify leading-relaxed sm:leading-loose text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
            ပြည့်စုံသော သင်ရိုးညွှန်းတမ်းများ၊ ဆန်းသစ်သောသင်ကြားမှု၊ ကျင့်ဝတ် ဆိုင်ရာ အလေ့အကျင့်များနှင့် လူမှုအဖွဲ့အစည်း တိုးတက်လာစေရန် ကတိကဝတ်များဖြင့် ခေတ်မီကွန်ပျူတာပညာရေးကို မြှင့်တင်ပေးရန်။
          </li>
        </ol>
      </div>
    </section>
  )
}

export default MissionSection