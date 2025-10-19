"use client";
import React from "react";
import MaleCard from "./MaleCard";
import FemaleCard from "./FemaleCard";
import useSWR from "swr";
import { electorApiUrl, fetchElectors } from "@/services/electors";
import SkeletonSection from "./SkeletonSection";

const CardSection = () => {
  const { data, isLoading, error } = useSWR(`${electorApiUrl}`, fetchElectors);

  if (isLoading) {
    return <SkeletonSection />;
  }

  const electorList = Object.values(data?.data || {});
  const males = electorList.filter((item) => item.gender === "male");
  const females = electorList.filter((item) => item.gender === "female");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Male Section */}
      <div className="mt-6 sm:mt-10 space-y-8 sm:space-y-12">
        <h1 className="text-center font-bold text-3xl sm:text-4xl text-gray-800">
          ပဏာမရွေးချယ်ခြင်းခံရသော ကျောင်းသားများ
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10">
          {males?.length > 0 ? (
            males.map((item) => <MaleCard male={item} key={item.id} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No male candidates available.
            </p>
          )}
        </div>
      </div>

      {/* Female Section */}
      <div className="mt-16 sm:mt-20 space-y-8 sm:space-y-12">
        <h1 className="text-center font-bold text-3xl sm:text-4xl text-gray-800">
           ပဏာမရွေးချယ်ခြင်းခံရသော ကျောင်းသူများ
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10">
          {females?.length > 0 ? (
            females.map((item) => <FemaleCard female={item} key={item.id} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No female candidates available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
