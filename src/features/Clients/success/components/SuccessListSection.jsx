"use client";
import { useRef } from 'react';
import { fetchSuccess, successApiUrl } from '@/services/history';
import React from 'react'
import useSWR from 'swr';
import HistorySkeleton from '../../history/components/HistorySkeleton';
import Link from 'next/link';
const SuccessListSection = () => {
    const sectionRef = useRef(null)
    const crownsRef = useRef([])
    const imagesRef = useRef([])

    const{data,isLoading,error}=useSWR(`${successApiUrl}`,fetchSuccess)
 console.log(data);
    const  getTitle=(gender, won_status)=> {
        if(gender === "male" && won_status === 1){
            return "King";
        }
        else if(gender === "male" && won_status === 2){
            return "Prince";
        }
        else if(gender === "female" && won_status === 1){
            return "Queen";
        } 
       else if (gender === "female" && won_status === 2){
        return "Princess";
       } 
       else{
        return "Unknown";
       }
     
      }
  return (
    <section className='max-w-7xl mx-auto mt-10 mb-20 '>
    <div className="mt-20 ">
        <h1 className='text-center font-bold'>Success of Section</h1>
    <p className="text-stone-600 px-3">ပဏာမရွေးချယ်ခြင်းခံရသော ကျောင်းသားကျောင်းသူများကို မဲစနစ်ဖြင့်စီစစ်၍ ရရှိလာသောရလဒ်အရ King, Queen, Prince, Princess များ၏ ဓါတ်ပုံများ</p>
    </div>
    <div className="mt-10 space-y-10">
        <div className="grid lg:grid-cols-3   xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10  space-y-20  px-6">
          {
            isLoading ?(
              <HistorySkeleton/>
            ) :(

              data && data.data.length > 0 ? 
              data.data.map((title,index)=>(
                <div key={index} className=" w-full lg:w-[200px]   relative ">
                <div 
                    className="w-full    absolute top-[-20px] left-0   z-10"
                >

                    <div className="relative inline-block w-full  left-1 md:left-[-12px]">
                        <div className="border-[15px]  border-solid border-amber-300 inline-block absolute top-[10px] border-l-transparent"></div>
                        <div className="bg-yellow-300 h-[30px] w-[90%] text-center line-clamp-4 lg:w-[165px] inline-block relative z-100 ml-[30px] before:border-[5px] before:inline-block before:absolute before:border-solid before:left-0 before:bottom-[-9px] before:border-amber-200 before:content-[' ']">
                            <p className='text-white text-lg font-extrabold'>{
                                  getTitle(title.gender, title.won_status)
                                }</p>
                        </div>
                        <div className="border-[15px]  border-solid border-amber-300 inline-block absolute top-[10px] border-r-transparent"></div>
                    </div>
                </div>
                {
                  title?.image_1_url==null ? (
                    <img src={`../image-not-found.png`} alt="" className="object-fill w-full h-[100px] sm:h-[500px]" />
                  ) : (
                   <img src={title?.image_1_url} alt="" className="object-cover  w-full  lg:h-[300px] sm:h-[500px] " />
                  )
                }
                {
                    title.elector_name
                }
            </div>
              ))
              : <p className='text-center   col-span-4  text-red-500'>No Access Found</p>
            )
          } 
        </div>
      </div>
</section>
  )
}

export default SuccessListSection