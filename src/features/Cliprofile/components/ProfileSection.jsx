"use client"
import LogoutButton from '@/components/LogoutButton';
import useAccountStore from '@/stores/useAccountStore';
import { formattedDate } from '@/utils/dateTime';
import { ArrowUpFromLine, Key, LogOut, LucideCircleUser, NotebookPen, Plus, Trash } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { useTranslations } from 'next-intl';
import ClientUpdateImage from './ClientUpdateImage';
const ProfileSection = () => {

 const {account:{id,voter_name,voter_email,created_at,profile_image}}=useAccountStore();
 
  return (
  <section className="px-4 sm:px-6 lg:px-10 flex flex-col space-y-10  lg:mt-10 mt-20">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="font-bold text-2xl sm:text-3xl">အကောင့်အသေးစိတ်</h2>

      <div className="flex flex-wrap gap-3">
        <Link
          href={"/clients/profile/changePassword"}
          className="inline-flex items-center gap-2 border border-stone-300 px-3 py-2 bg-gray-100 text-stone-700 text-sm rounded hover:bg-gray-200 transition"
        >
          <Key size={16} /> စကားဝှက်ပြောင်းရန်
        </Link>
        <Link
          href={"/clients/profile/changeName"}
          className="inline-flex items-center gap-2 border border-stone-300 px-3 py-2 bg-gray-100 text-stone-700 text-sm rounded hover:bg-gray-200 transition"
        >
          <NotebookPen size={16} /> နာမည်ပြောင်းရန်
        </Link>
        <LogoutButton>
          <LogOut size={16} /> ထွက်ရန်
        </LogoutButton>
      </div>
    </div>

    {/* Profile Image */}
    <div className="relative w-[100px] sm:w-[120px]">
      <img
        className="w-25 h-25 rounded-full object-cover border-2 border-blue-600"
        src={
          profile_image
            ? `https://studentvoting.store/storage/${profile_image}`
            : "/images/user.png"
        }
        alt="User photo"
      />
      <ClientUpdateImage />
    </div>

    {/* Profile Details */}
    <div className="bg-blue-50 p-5 sm:p-6 max-w-xl border border-blue-300 space-y-5 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <LucideCircleUser className="size-5 text-blue-500" />
        <h4 className="font-medium text-lg">ကိုယ်ရေးအချက်အလက်</h4>
      </div>

      <div className="space-y-4 text-sm">
        <dl className="flex flex-col sm:flex-row sm:items-center">
          <dt className="text-stone-500 w-36">အမည်</dt>
          <dd>{voter_name}</dd>
        </dl>
        <dl className="flex flex-col sm:flex-row sm:items-center">
          <dt className="text-stone-500 w-36">အီးမေးလ်</dt>
          <dd>{voter_email}</dd>
        </dl>
        <dl className="flex flex-col sm:flex-row sm:items-center">
          <dt className="text-stone-500 w-36">အခန်းကဏ္ဍ</dt>
          <dd>အသုံးပြုသူ</dd>
        </dl>
      </div>
    </div>

    {/* Register Date */}
    <div>
      <span className="text-xs text-stone-500 block">စာရင်းသွင်းထားသည့်နေ့</span>
      <p className="text-base font-semibold">{formattedDate(created_at)}</p>
    </div>
  </section>
  )
}

export default ProfileSection