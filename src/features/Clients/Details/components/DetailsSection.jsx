"use client";
import parse from "html-react-parser";
import React from "react";
import DetailSkeleton from "./DetailSkeleton";
import useDetails from "../hooks/useDetails";
import useSWR from "swr";
import { fetchvote, voteapiUrl } from "@/services/votes";
import useAccountStore from "@/stores/useAccountStore";

const DetailsSection = () => {
  const {
    data,
    isLoading,
    isSubmitting,
    register,
    handleSubmit,
    onSubmit,
    account,
    id,
    VoteMale,
  } = useDetails();

  const {
    data: votes,
    isLoading: voteLoading,
    error,
  } = useSWR(
    `${voteapiUrl}/${useAccountStore.getState().account.id}`,
    fetchvote
  );

  if (isLoading || voteLoading) {
    return <DetailSkeleton />;
  }

  return (
    <section className="max-w-7xl mx-auto px-5 mt-30 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT: IMAGE SECTION */}
      <div>
        {/* Main Image */}
        {data.image_1_url ? (
          <img
            src={data.image_1_url}
            alt="Main"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl shadow-md"
          />
        ) : (
          <img
            src="../image-not-found.png"
            alt="Not Found"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl shadow-md"
          />
        )}

        {/* Thumbnail Images */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-3 mt-4">
          {[data.image_2_url, data.image_3_url, data.image_4_url].map(
            (url, idx) => (
              <img
                key={idx}
                src={url || "../image-not-found.png"}
                alt={`Thumbnail ${idx + 1}`}
                className="w-[48%] sm:w-1/4 rounded-lg object-cover shadow-sm"
              />
            )
          )}
        </div>
      </div>

      {/* RIGHT: DETAILS SECTION */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
        <input type="hidden" defaultValue={account.id} {...register("voter_id")} />
        <input type="hidden" defaultValue={id} {...register("elector_id")} />

        <div className="flex flex-col space-y-3">
          <p className="text-3xl md:text-4xl font-bold break-words">
            {data?.elector_name}
          </p>
          <p className="text-xl md:text-2xl text-gray-700">{data?.phone}</p>
          <p className="text-gray-600">{data?.address}</p>

          <div className="ProseMirror leading-relaxed text-gray-700 text-base md:text-lg">
            {parse(data?.description || "Hello")}
          </div>
        </div>

        {VoteMale !== "1" && (
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 py-3 px-6 text-white font-semibold rounded-lg shadow-md w-full sm:w-auto"
          >
            {isSubmitting ? "Selecting..." : "Select"}
          </button>
        )}
      </form>
    </section>
  );
};

export default DetailsSection;
