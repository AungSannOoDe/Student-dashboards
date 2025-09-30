"use client";
import CommentEditing from "@/components/CommentEditing";
import { storeElector } from "@/services/electors";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { debounce } from "lodash";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';

const ElectorCreateForm = () => {
  const t = useTranslations('ElectorCreateForm');
  const {
    register,
    reset,
    setValue,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm();
  
  const editorRef = useRef();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await storeElector({
        elector_name: data.name,
        phone: data.phone,
        Years: data.year,
        address: data.address,
        gender: data.gender,
        won_status: data.won_status,
        description: data.description,
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || t('errors.somethingWentWrong'));
      }
      toast.success(json.message);
      reset();
      editorRef.current?.resetContent();
      if (data.back_to_elector_list) {
        router.push(`/dashboard/elector`)
      }
    } catch (error) {
      toast.error(error.message || t('errors.somethingWentWrong'));
    }
  };

  return (
    <form action="" className="mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-3 gap-x-10 grid-rows-5">
        <div className="">
          <label htmlFor="" className="block">
            {t('fields.name')}
          </label>
          <input
            type="text"
            {...register("name", {
              required: t('errors.nameRequired'),
            })}
            className="block border w-full border-stone-200 py-1 px-3"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="" className="block">
            {t('fields.phone')}
          </label>
          <input
            type="text"
            {...register("phone", {
              min: {
                value: 11,
                message: t('errors.phoneMinLength')
              },
              validate: (value) => {
                if (!value) return t('errors.phoneRequired');
                const cleanedPhone = value.replace(/\D/g, '');
                const myanmarRegex = /^(\+?95|0)?(9|7|6)\d{7,9}$/;
                if (!myanmarRegex.test(cleanedPhone)) {
                  return t('errors.phoneInvalid');
                }
                return true;
              }
            })}
            className="block w-full border border-stone-200 py-1 px-3"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs">{errors.phone.message}</span>
          )}
        </div>
        <div className="col-start-1">
          <label htmlFor="" className="block">
            {t('fields.gender')}
          </label>
          <select
            name=""
            id=""
            {...register("gender")}
            className="block w-full border border-stone-200 py-1 px-3"
          >
            <option value="">{t('fields.selectOption')}</option>
            <option value="male">{t('fields.genderOptions.male')}</option>
            <option value="female">{t('fields.genderOptions.female')}</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="" className="block">
            {t('fields.year')}
          </label>
          <select 
            {...register("year", {
              required: t('errors.yearRequired')
            })} 
            className="block w-full border border-stone-200 py-1 px-3" 
            id=""
          >
            <option value="">{t('fields.selectYear')}</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          {errors.year && (
            <span className="text-red-500 text-xs">{errors.year.message}</span>
          )}
        </div>
        <div className="col-start-1">
          <label htmlFor="" className="block">
            {t('fields.address')}
          </label>
          <input 
            type="text" 
            {...register("address", {
              required: t('errors.addressRequired'),
              minLength: {
                value: 3,
                message: t('errors.addressMinLength'),
              },
            })} 
            className="block w-full border border-stone-200 py-1 px-3" 
          />
          {errors.address && (
            <span className="text-red-500 text-xs">{errors.address.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="" className="block">
            {t('fields.wonStatus')}
          </label>
          <select
            name=""
            id=""
            {...register("won_status", {
              required: t('errors.wonStatusRequired'),
            })}
            className="block w-full border border-stone-200 py-1 px-3"
          >
            <option value="0">{t('fields.selectOption')}</option>
            <option value="1">{t('fields.wonStatusOptions.king')}</option>
            <option value="1">{t('fields.wonStatusOptions.queen')}</option>
            <option value="2">{t('fields.wonStatusOptions.prince')}</option>
            <option value="2">{t('fields.wonStatusOptions.princess')}</option>
          </select>
        </div>
        <div className="col-start-1 col-span-2 row-span-5">
          <label htmlFor="" className="font-bold">
            {t('fields.description')}
          </label>
          <CommentEditing ref={editorRef} onChange={(value) => setValue("description", value)} />
          <input
            type="hidden"
            {...register("description", { required: t('errors.descriptionRequired') })}
          />
          {errors.description && (
            <span className="text-red-500 text-xs">{errors.description.message}</span>
          )}
        </div>
        <div className="col-span-full mt-5">
          <div className="flex items-center mb-4">
            <input
              {...register("all_correct")}
              required
              id="all-correct"
              type="checkbox"
              className="w-4 h-4 accent-blue-600 text-blue-600 checked:bg-blue-500 checked:text-blue-600 bg-stone-100 border-stone-300 focus:ring-blue-500"
            />
            <label
              htmlFor="all-correct"
              className="ml-2 text-sm font-medium text-stone-900"
            >
              {t('confirmation.allFieldsCorrect')}
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              {...register("back_to_elector_list")}
              id="back-to-Employee-list"
              type="checkbox"
              className="w-4 h-4 accent-blue-600 text-blue-600 bg-stone-100 border-stone-300 focus:ring-blue-500"
            />
            <label
              htmlFor="back-to-Employee-list"
              className="ml-2 text-sm font-medium text-stone-900"
            >
              {t('confirmation.backToList')}
            </label>
          </div>
        </div>
        <div className="col-start-1 col-span-2 mt-2 w-[105%]">
          <button className="bg-blue-600 w-full py-2 hover:opacity-90 duration-300 disabled:opacity-75 active:scale-95 text-white">
            {isSubmitting ? t('buttons.creating') : t('buttons.create')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ElectorCreateForm;