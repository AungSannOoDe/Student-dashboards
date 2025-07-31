"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const IndexReview = () => {
  return (
    <section>
      <h2 className="text-center font-bold text-3xl text-stone-600 mb-4 underline">Reviews</h2>
      <Swiper 
        className="max-w-7xl mx-auto"
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <div className="bg-blue-400 h-50 px-6 py-2 shadow-xl rounded-sm mx-2">
              <div className="flex gap-4">
                <div className="self-center">
                  <img 
                    src="../images/5.png" 
                    width="100px" 
                    alt="Reviewer" 
                    className="rounded-full ring-4  ring-stone-500" 
                  />
                </div>
                <div className="text-white">
                  <div className="flex gap-4">
                    <h1 className="text-2xl">Hello</h1>
                    <div className="self-end">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptatum.</p>
                </div>
              </div>
              <div className="mt-2 leading-5 text-white">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tenetur.</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default IndexReview