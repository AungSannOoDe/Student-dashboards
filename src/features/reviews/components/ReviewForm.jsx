"use client";
import StarRatingComponent from '@/components/StarRatingComponent'
import React from 'react'
import { useForm } from 'react-hook-form';
import useReview from '../hooks/useReview';

const ReviewForm = () => {
  const{register,reset,currentRating,errors,handleSubmit,onSubmit,setValue,watch}=useReview()

  

  return (
    <section className='bg-stone-100 px-6 py-4 rounded-lg'>
      <p className='text-3xl text-center'>Reviews</p>
      <p className='text-xs text-center'>Give the reviews to your experience</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-4 my-4'>
          
          {/* NAME FIELD */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 4, message: "Name must be at least 4 characters" }
              })}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter name..."
            />
            {errors.name && (
              <span className='text-xs text-red-500'>{errors.name.message}</span>
            )}
          </div>

          {/* EMAIL FIELD */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter email..."
            />
            {errors.email && (
              <span className='text-xs text-red-500'>{errors.email.message}</span>
            )}
          </div>

          {/* RATING FIELD */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Rating</label>
            <StarRatingComponent
              name="rating"
              setValue={setValue}
              watch={watch}
            />
            {errors.rating && (
              <span className='text-xs text-red-500'>{errors.rating.message}</span>
            )}
            {currentRating > 0 && (
              <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>
                You rated: {currentRating} star{currentRating !== 1 ? 's' : ''}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
            <textarea
              id="comments"
              {...register("comments", {
                required: "Comment is required",
                minLength: { value: 4, message: "Comment must be at least 4 characters" }
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter review..."
            />
            {errors.comments && (
              <span className='text-xs text-red-500'>{errors.comments.message}</span>
            )}
          </div>

          {/* BUTTON */}
          <div className="w-full">
            <button className='bg-blue-500 hover:bg-blue-600 duration-200 text-white w-full py-1.5 rounded-sm'>
              Feedback
            </button>
          </div>

        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
