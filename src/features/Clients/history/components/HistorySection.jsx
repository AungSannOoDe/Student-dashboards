"use client";
import { BookMarked } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react'
import HistorySkeleton from './HistorySkeleton';
import useSWR from 'swr';
import { fetchHistory, historyApiUrl } from '@/services/history';
import Link from 'next/link';
import { useSearchParams, useRouter } from "next/navigation";
import { convertSearchPramsToObject } from '@/utils/url';
 

const HistorySection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [fetchUrl, setFetchUrl] = useState(historyApiUrl);
  const currentYear = searchParams.get('year') || "All";
  const years = ["All","2022", "2023", "2024"];
  const updateUrlParams = (newParams) => {
    const updatedSearch = new URLSearchParams(newParams).toString();
    router.push(`?${updatedSearch}`);
    setFetchUrl(`${historyApiUrl}?${updatedSearch}`);
  };
  useEffect(() => {
    const currentParams = convertSearchPramsToObject(searchParams);
    const queries = new URLSearchParams(currentParams).toString();
    setFetchUrl(`${historyApiUrl}?${queries}`);
  }, [searchParams]);

  const {data, isLoading, error} = useSWR(fetchUrl, fetchHistory);
  console.log(data);
  const handleYearChange = (year) => {
    if (year === "All") {
      // Remove year filter if "All" is selected
      const newParams = {...convertSearchPramsToObject(searchParams)};
      delete newParams.year;
      updateUrlParams(newParams);
    } else {
      // Add year filter
      updateUrlParams({
        ...convertSearchPramsToObject(searchParams),
        year,
      });
    }
  };

  return (
    <section className='max-w-7xl mx-auto'>
      <div className="">
        <h1 className='text-center font-bold'>နှစ်အလိုက်King Queen selection များ</h1>
        <p className="text-stone-600 text-center"> အောက်ပါတို့သည်2022 2023 2024တို့တွင်ရရှိခဲ့သော king Queen Prince Princess များကိုအစဉ်လိုက်ဖော်ပြထားပါသည်။ပေးထားသော  ခုနှစ်ကိုနှိပ်၍ကြည့်ရှုနိုင်ပါသည်။</p>
      </div>
      
      <div className="w-3/4 mx-auto flex text-lg pointer-events-auto text-stone-500 justify-around mt-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearChange(year)}
            className={`px-2 ${currentYear === year ? "text-black font-bold underline" : ""}`}
          >
            {year}
          </button>
        ))}
      </div>
      
      <div className="mt-10 space-y-10">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
          {isLoading ? (
            <HistorySkeleton/>
          ) : error ? (
            <p className='text-center col-span-4 text-red-500'>Error loading history</p>
          ) : data && data.data && data.data.length > 0 ? (
            data.data.map((item, index) => (
              <div className="w-full" key={index}>
                {item.image_1_url ? (
                  <img src={item.image_1_url} alt="" className="object-cover w-full h-[400px]" />
                ) : (
                  <img src={"../image-not-found.png"} alt="" className="object-cover w-full h-[400px]" />
                )}
                <div className="flex justify-between mt-2">
                  <p className='font-bold'>{item.elector_name}</p>
                  <Link href={`/clients/history/${item.id}`} className="underline text-stone-600">View Details</Link>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center col-span-4 text-red-500'>No history found</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default HistorySection;