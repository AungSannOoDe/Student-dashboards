"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useSWR from "swr";
import { fetchReview, reviewApiUrl } from "@/services/review";
import { StarRating } from "@/components/StarRating";

const IndexReview = () => {
  const { data, isLoading, error } = useSWR(`${reviewApiUrl}`, fetchReview);

  const ReviewSkeleton = () => (
    <Swiper
      className="max-w-7xl mx-auto"
      slidesPerView={1}
      spaceBetween={16}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      }}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item}>
          <div className="bg-stone-400 p-4 rounded-md shadow-md animate-pulse">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-stone-300 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-stone-300 w-1/2 rounded"></div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-stone-300 rounded"></div>
                  ))}
                </div>
                <div className="h-4 bg-stone-300 w-full rounded"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  if (isLoading) {
    return (
      <section className="px-4 py-8">
        <h2 className="text-center font-bold text-3xl text-stone-600 mb-4 underline">
          Reviews
        </h2>
        <ReviewSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-4 py-8">
        <h2 className="text-center font-bold text-3xl text-stone-600 mb-4 underline">
          Reviews
        </h2>
        <div className="text-center text-red-500">Failed to load reviews</div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <h2 className="text-center font-bold text-2xl sm:text-3xl text-stone-700 mb-6 underline decoration-blue-400">
        အကြုံပြုစာများ
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {data?.data?.length ? (
          data.data.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-blue-400 p-4 sm:p-6 rounded-lg shadow-lg border border-blue-300 transition hover:scale-105 h-full">
                <div className="flex gap-3 items-start">
                  <div className="text-white flex-1">
                    <h3 className="text-lg font-semibold truncate">
                      {review.reviewer_name || "Anonymous"}
                    </h3>
                    <p>
                      {review.email || "No Email Provided"}
                    </p>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="mt-3 text-white text-sm leading-relaxed line-clamp-4">
                  {review.message}
                </p>
                {review.created_at && (
                  <p className="mt-4 text-right text-white text-opacity-80 text-xs">
                    {new Date(review.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews found</p>
        )}
      </Swiper>
    </section>
  );
};

export default IndexReview;
