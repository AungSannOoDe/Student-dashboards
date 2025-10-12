import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import Image from 'next/image'

const SchoolIntroduction = () => {
  return (
   <section className='max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between">
        <div className="w-full self-center translate-y-3">
            <p>
             ကွန်ပျူတာတက္ကသိုလ်(ဘားအံ)ကို ကရင်ပြည်နယ်၊ ဘားအံမြို့တွင် ၂၀၀၁ ခုနှစ်မှစတင်ကာ ဖွင့်လှစ်ခဲ့ပါသည်။၂၀၀၂ 
        </p>
        </div>
        <div className="  overflow-hidden w-full lg:w-1/2">
              <div className="">
                <div className="relative left-3 w-32 h-32 mx-auto mb-6">
                    <Image 
                        src="/images/Culogo-removebg-preview.png" 
                        alt="School Logo" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1" className="relative border rounded-lg overflow-hidden">
    
                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                    
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold">i</span>
                            </div>
                            <span className="text-lg font-semibold">Objectives</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-yellow-50 relative">
                        {/* Corner decoration */}
                        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-300"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-300"></div>
                        
                        <p className="text-gray-700 leading-relaxed relative z-10">
                            Our flagship product combines cutting-edge technology with sleek
                            design. Built with premium materials, it offers unparalleled
                            performance and reliability.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                {/* Additional Accordion Items */}
                <AccordionItem value="item-2" className="relative border rounded-lg overflow-hidden mt-4">
                    <div className="absolute left-0 top-0 w-1 h-full bg-green-500"></div>
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 font-bold">✓</span>
                            </div>
                            <span className="text-lg font-semibold">Our Mission</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-green-50 relative">
                        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-green-300"></div>
                        <p className="text-gray-700 leading-relaxed">
                            To provide quality education and foster an environment of learning and growth for all students.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="relative border rounded-lg overflow-hidden mt-4">
                    <div className="absolute left-0 top-0 w-1 h-full bg-purple-500"></div>
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-purple-600 font-bold">★</span>
                            </div>
                            <span className="text-lg font-semibold">Contact us</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-purple-50 relative">
                        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-purple-300"></div>
                        <p className="text-gray-700 leading-relaxed">
                            To be a leading institution in academic excellence and character development.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
   </section>
  )
}

export default SchoolIntroduction