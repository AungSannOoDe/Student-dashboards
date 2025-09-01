"use client"
import usePoster from '../hooks/usePoster';
const IndexPosterSection = () => {
  const{scrollIndicatorRef,heroSectionRef,outerScrollRef,innerScrollRef}=usePoster()
  return (
    <>
   <section ref={heroSectionRef} id="heroSection">
    <div ref={scrollIndicatorRef} id="scroll" className="hidden">Scroll indicator</div>
  </section>

  <section className="overflow-hidden">
    <div ref={outerScrollRef} id="scroll-section-outer">
      <div ref={innerScrollRef} id="scroll-section-inner" className="h-[100vh] w-[600vw] flex justify-center relative font-bold">
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
          <p className="text-[300px] text-stone-600 ">2024-</p>
        </div>
        <div className="h-[100vh] w-[100vw] flex items-center">
          <p className="text-[300px] text-stone-600">2025</p>
        </div>
        <div className="h-[100vh] w-[100vw] flex items-center">
          <p className="text-[200px] text-stone-600 font-padauk">ပညာသင်</p>
        </div>
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
          <div> 
            <span className="text-[300px] inline-block text-stone-600 font-padauk">နှစ်ရဲ့ </span> 
            <span className="text-[100px] bg-blue-600 pb-12 pt-3 rounded-r-full text-white font-padauk">လူငယ်</span> 
  <span className="text-[100px] font-padauk">မောင်မယ်များ</span>
          </div>
        </div>
        <div className="h-[100vh] w-[100vw] flex items-center">
          <div> 
            <span className="text-[100px] font-padauk">ကိုနွေးထွေးစွာကြိုဆိုပါ </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default IndexPosterSection