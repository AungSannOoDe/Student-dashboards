"use client";
import { storeEvent } from "@/services/event";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EventCreateForm = () => {
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const res = await storeEvent(data);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(`${json.message}` || "Undefiined Errror");
      }
      toast.success(json.message);
      reset();
      router.push(`/dashboard/events`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form action="" className="mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid  grid-cols-1  gap-y-8  ">
        <div className="space-y-2">
          <label htmlFor="" className="block">
            Event Name
          </label>
          <input
            type="text"
            {...register("event_name", {
              required: "Event name is required",
              min: {
                value: 4,
                message: "Event name at least 4 characters",
              },
            })}
            className="block border w-full border-stone-200 py-1 px-3"
          />
          {errors.event_name && (
            <span className="text-red-500 text-xs">
              {errors.event_name.message}
            </span>
          )}
        </div>

        <div className="space-y-2 col-start-1">
          <label htmlFor="" className="block">
            Event partictant
          </label>
          <input
            type="text"
            {...register("event_participant", {
              required: "Event participant is required",
              min: {
                value: 4,
                message: "Event participant at least 4 characters",
              },
            })}
            className="block border w-full border-stone-200 py-1 px-3"
          />
          {errors.event_participant && (
            <span className="text-red-500 text-xs">
              {errors.event_participant.message}
            </span>
          )}
        </div>
        <div className="space-y-2 col-start-1 ">
          <label htmlFor="" className="block">
            Years
          </label>
          <input
            type="datetime-local"
            {...register("event_start_time", {
              required: "Date Time is required",
            })}
            className="block w-full border border-stone-200 py-1 px-3"
          />
          {errors.event_start_time && (
            <span className="text-red-500 text-xs">
              {errors.event_start_time.message}
            </span>
          )}
        </div>
        <div className="col-start-1 col-span-2  w-[100%]">
          <button className="  bg-blue-600 w-full py-2 hover:opacity-90  duration-300  disabled:opacity-75  active:scale-95 text-white  ">
            {isSubmitting ? "creating..." : "create"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EventCreateForm;
