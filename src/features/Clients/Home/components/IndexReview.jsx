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
  <section className="px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
    <h2 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl text-stone-600 mb-8 sm:mb-12 underline decoration-2 decoration-blue-400">
      အကြုံပြုစာများ
    </h2>
  
    <div className="max-w-7xl mx-auto">
      <Swiper 
        className="w-full"
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          // Mobile first approach
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.2, // Slight peek for tablets
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        centeredSlides={false}
        grabCursor={true}
      >
        {data?.data?.length > 0 ? (
          data.data.map((review) => (
            <SwiperSlide key={review.id} className="pb-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-full px-4 sm:px-6 py-4 sm:py-6 shadow-lg rounded-lg mx-1 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-blue-300">
                {/* Header with image and info */}
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="flex-shrink-0">
                    <img 
                      src={review.image || "../images/5.png"} 
                      width="70px" 
                      height="70px"
                      alt={review.reviewer_name || "Reviewer"} 
                      className="rounded-full ring-3 ring-white ring-opacity-50 object-cover shadow-md" 
                      onError={(e) => {
                        e.target.src = "../images/5.png";
                      }}
                    />
                  </div>
                  <div className="text-white flex-1 min-w-0">
                    <div className="mb-1">
                      <h1 className="text-lg sm:text-xl font-semibold truncate">
                        {review.reviewer_name || "Anonymous"}
                      </h1>
                    </div>
                    <div className="mb-2">
                      <StarRating rating={review.rating}/>
                    </div>
                  </div>
                </div>
              
                {/* Review Message */}
                <div className="mt-3 sm:mt-4">
                  <p className="text-white text-sm sm:text-base leading-6 sm:leading-7 line-clamp-4">
                    {review.message || "No message available."}
                  </p>
                </div>
              
                {/* Date */}
                {review.created_at && (
                  <div className="mt-4 sm:mt-5 pt-3 border-t border-white border-opacity-20">
                    <p className="text-white text-opacity-90 text-sm sm:text-base text-right">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">There are no reviews yet</p>
          </div>
        )}
      </Swiper>
    </div>
  </section>
  );
};

export default IndexReview;