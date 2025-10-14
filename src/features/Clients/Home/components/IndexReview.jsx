"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import useSWR from 'swr';
import { fetchReview, reviewApiUrl } from '@/services/review';
import { StarRating } from '@/components/StarRating';

const IndexReview = () => {
  const { data, isLoading, error } = useSWR(`${reviewApiUrl}`, fetchReview);
   console.log(data);
  const ReviewSkeleton = () => (
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
                <div className="w-20 h-20 bg-blue-300 rounded-full animate-pulse" />
              </div>
              <div className="text-white flex-1">
                <div className="flex gap-4 justify-between">
                  <div className="h-6 bg-blue-300 rounded animate-pulse w-24" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-300 rounded animate-pulse" />
                    ))}
                  </div>
                </div>
                <div className="mt-2 h-4 bg-blue-300 rounded animate-pulse w-full" />
                <div className="mt-1 h-4 bg-blue-300 rounded animate-pulse w-3/4" />
              </div>
            </div>
            <div className="mt-2 leading-5 text-white">
              <div className="h-4 bg-blue-300 rounded animate-pulse w-full" />
              <div className="mt-1 h-4 bg-blue-300 rounded animate-pulse w-5/6" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  if (isLoading) {
    return (
      <section>
        <h2 className="text-center font-bold text-3xl text-stone-600 mb-4 underline">Reviews</h2>
        <ReviewSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="text-center font-bold text-3xl text-stone-600 mb-4 underline">Reviews</h2>
        <div className="text-center text-red-500 py-8">
          Failed to load reviews
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-center font-bold text-3xl text-stone-600 mb-4 underline">အကြုံပြုစာများ</h2>
      <Swiper 
        className="max-w-7xl mx-auto"
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data?.data?.length > 0 ? (
          data.data.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-blue-400 h-50 px-6 py-4 shadow-xl rounded-sm mx-2 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex gap-4">
                  <div className="self-center">
                    <img 
                      src={review.image || "../images/5.png"} 
                      width="80px" 
                      height="80px"
                      alt={review.reviewer_name || "Reviewer"} 
                      className="rounded-full ring-4 ring-stone-500 object-cover" 
                      onError={(e) => {
                        e.target.src = "../images/5.png";
                      }}
                    />
                  </div>
                  <div className="text-white">
                    <div className="">
                      <h1 className="text-xl font-semibold">
                        {review.reviewer_name || "Anonymous"}
                      </h1>
                    </div>
                    <div className="-mb-4">
                       <StarRating rating={review.rating}/>
                    </div>
                  </div>
                </div>
                <div className="mt-3 leading-5 text-white">
                  <p className="text-sm">
                    {review.message || "No message available."}
                  </p>
                </div>
                {review.created_at && (
                  <div className="mt-3 text-right">
                    <p className=" opacity-80 text-white text-lg">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))
        ) : (
        <p>There is no reviews</p>
        )}
      </Swiper>
    </section>
  );
};

export default IndexReview;