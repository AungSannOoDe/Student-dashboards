import React from 'react'
import ReviewForm from './ReviewForm'
import { Mail, MapPin, Navigation, Phone } from 'lucide-react'

const ReviewSection = () => {
  return (
   <section className='max-w-9xl mx-auto px-4 sm:px-6   lg:px-8 py-12 z-20 relative'>
    <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
           <ReviewForm/>
           <div className=" mt-10">
            <div className=" ">
                 <p className='text-5xl'>Lorem ipsum dolor sit amet.</p>
                   <p className='leading-8 text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum dicta voluptatem vero, cupiditate cum beatae nulla hic deleniti sed!</p>
            </div>
              <div className="grid grid-cols-2 gap-10 mt-10 ">
                    <div className="flex  w-[290px] bg-white/50 gap-2 px-3 py-2 border border-stone-300 rounded-md">
                        <div className=" bg-amber-300 w-12 h-12 self-center rounded-full flex items-center justify-center">
                            <Phone className='text-amber-500 '/>
                        </div>
                        <div className="">
                            <p>Phone</p>
                            <p className=' text-xs'>cing elit. Vero?</p>
                        </div>
                    </div>
                <div className="flex  w-[290px] bg-white/50 gap-2 px-3 py-2 border border-stone-300 rounded-md">
                    <div className=" bg-green-300 w-12 h-12 self-center rounded-full flex items-center justify-center">
                        <Mail className='text-green-500'/>
                       
                    </div>
                    <div className="">
                        <p>Phone</p>
                        <p className=' text-xs'>t. Vero?</p>
                    </div>
                </div>
                  <div className="flex  w-[290px] bg-white/50 gap-2 px-3 py-2 border border-stone-300 rounded-md">
                    <div className=" bg-blue-400 w-12 h-12 self-center rounded-full flex items-center justify-center">
                        <MapPin className='text-blue-300' />
                    </div>
                    <div className="">
                        <p>Location</p>
                        <p className=' text-xs'>Lorem ipsum dolor</p>
                    </div>
                </div>
                  <div className="flex  w-[290px] bg-white/50 gap-2 px-3 py-2 border border-stone-300 rounded-md">
                    <div className=" bg-purple-400 w-12 h-12 self-center rounded-full flex items-center justify-center">
                        <Navigation className="text-purple-300" />
                       
                    </div>
                    <div className="">
                        <p>Phone</p>
                        <p className=' text-xs'> elit. Vero?</p>
                    </div>
                </div>
              </div>
           </div>
        </div>
   </section>
  )
}

export default ReviewSection