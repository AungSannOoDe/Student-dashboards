"use client";
import { fetchGallery, galleryApiUrl } from "@/services/gallery";
import { BookImage, LucideCircleUser } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import GalleryDetailSkeleton from "./GalleryDetailSkeleton";
import { usTimeformat } from "@/lib/Timer";
import Link from "next/link";

const GalleryDetailSection = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    `${galleryApiUrl}/${id}`,
    fetchGallery
  );
  if (isLoading) {
    return <GalleryDetailSkeleton />;
  }
  return (
    <section className="pl-6 space-y-10">
      <div className="flex  gap-10">
        <div className="w-1/2 ">
          {data?.data.images ? (
            <img src={data?.data.image_url} alt="" />
          ) : (
            <img src="/image-not-found.png" alt="" />
          )}
        </div>
        <div className=" p-6 max-w-lg    space-y-4.5">
          <div className="flex items-center gap-2">
            <BookImage className="size-5 text-blue-500  " />
            <h4 className="font-medium text-lg">Gallery Information</h4>
          </div>
          <div className="space-y-5">
            <dl className=" flex  items-center">
              <dt className="text-stone-500 w-[150px] font-bold text-lg  dark:text-white">
                title
              </dt>
              <dd className="text-sm dark:text-stone-400">
                {data?.data.title}
              </dd>
            </dl>
            <dl className=" flex  items-center">
              <dt className="text-stone-500 w-[150px] font-bold text-lg dark:text-white">
                description
              </dt>
              <dd className="text-sm dark:text-stone-400">
                {data?.data.description}
              </dd>
            </dl>
          </div>
          <div className="flex item-center gap-1.5">
            <div>
              <span className="text-stone-500 w-[150px] font-bold text-lg  dark:text-white">
                Created at
              </span>
              <p className="text-base font-semibold ">
                {usTimeformat(data?.data.created_at)}
              </p>
            </div>
          </div>
           <div className="">
            <Link href={`/dashboard/gallery/${data?.data.id}/edit`} className="bg-blue-500 text-white  w-full text-center block py-1">Edit Gallery</Link>
           </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryDetailSection;
