"use client";

import { Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

const TrashBtn = ({ updateUrlParams }) => {
  const searchParams = useSearchParams();
  const isTrashOpen = `${searchParams.toString()}`.search("with_archived") >= 0;
  const handleTrashToggle = () => {
    if (!isTrashOpen) {
      updateUrlParams({
        with_archived: true,
        page: 1,
      });
    } else {
      updateUrlParams({});
    }
  };
  return (
    <button
      type="button"
      onClick={handleTrashToggle}
      className={`relative flex items-center gap-3  border 
       text-sm focus:ring-blue-500 focus:border-blue-500
      px-5 py-2.5 dark:bg-stone-700 dark:border-blue-600
      dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500
      dark:focus:border-blue-500 text-nowrap ${
        isTrashOpen
          ? "bg-pink-50 hover:bg-blue-100 border-blue-300 text-blue-600"
          : "bg-stone-50 hover:bg-stone-100 border-stone-300 text-stone-900"
      } `}
    >
      <Trash2 className={`size-4`} />
      {isTrashOpen ? "Exit Trash" : "Open Trash"}
    </button>
  );
};

export default TrashBtn;