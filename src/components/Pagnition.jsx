"use client";
import { LucideChevronLeft, LucideChevronRight, LucideChevronsLeft, LucideChevronsRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Pagnition = ({
    links = { prev: null, next: null, first: null, last: null },
    meta = {
      total: 0,
      to: 0,
      from: 0,
      per_page: 0,
      current_page: 0,
      last_page: 0,
    },
    handlePaginate,
    handleLimit,
  }) => {
    const t=useTranslations("Pagination")
    const searchParams = useSearchParams();
      const currentLimit = searchParams.get("limit") ?? 5;
      const pageLimits = [5, 10, 20, 50, 100];
    return (
      <div className="flex justify-between items-center flex-wrap gap-4 ">
        <span className="text-sm text-stone-700 dark:text-stone-400">
          {t('showing')} <b>{meta.from ?? 0}</b> {t('to')} <b>{meta.to ?? 0}</b> {t('of')} <b>{meta.total ?? 0}</b> {t('entries')}
        </span>
  
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="limit" className="text-sm text-stone-700 dark:text-white whitespace-nowrap">
             {t('rows')}
            </label>
            <select
              id="limit"
              onChange={handleLimit}
              className="h-10 text-sm border  border-stone-200 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-white"
              value={currentLimit}
            >
              {pageLimits.map((limit) => (
                <option key={limit} value={limit}>
                  {limit}
                </option>
              ))}
            </select>
          </div>
  
          <span className="text-sm text-stone-700 dark:text-stone-400">
            {t('page')} <b>{meta.current_page ?? 0}</b> {t('of')} <b>{meta.last_page ?? 0}</b>
          </span>
  
          <div className="inline-flex">
            <button
              disabled={!links.first}
              onClick={() => handlePaginate(links.first)}
              className="flex items-center justify-center size-10 border-y border-l border-stone-200   dark:bg-stone-800 dark:border-stone-700 dark:text-stone-400 hover:dark:bg-stone-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              <LucideChevronsLeft />
            </button>
            <button
              disabled={!links.prev}
              onClick={() => handlePaginate(links.prev)}
              className="flex items-center justify-center size-10 border-y border-stone-200 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-400 hover:dark:bg-stone-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              <LucideChevronLeft />
            </button>
            <button
              disabled={!links.next}
              onClick={() => handlePaginate(links.next)}
              className="flex items-center justify-center size-10 border-y border-stone-200 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-400 hover:dark:bg-stone-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              <LucideChevronRight />
            </button>
            <button
              disabled={!links.last}
              onClick={() => handlePaginate(links.last)}
              className="flex items-center justify-center size-10 border-y border-r border-stone-200   dark:bg-stone-800 dark:border-stone-700 dark:text-stone-400 hover:dark:bg-stone-700 hover:dark:text-white disabled:opacity-50 disabled:pointer-events-none"
            >
              <LucideChevronsRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default Pagnition