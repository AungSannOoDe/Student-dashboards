import React from 'react'

const IndexWelcome = () => {
  return (
    <section className="mt-20 h-80 bg-blue-500 bg-[url('/images/HeroSection.jpg')] bg-blend-multiply bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col items-center gap-y-5">
            <p className="md:text-5xl text-md text-white font-padauk">24ကြိမ်မြောက်</p>
             <p className="md:text-3xl text-sm text-white font-padauk"> မောင်မယ်သစ်လွင်ကြိုဆိုပွဲ အခမ်းအနား</p>
        </div>
    </section>
  )
}

export default IndexWelcome