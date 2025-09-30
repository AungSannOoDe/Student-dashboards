
"use client";
import { Languages } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';

const LanguageSection = () => {
const[locale,setLocale]=useState("")
const router=useRouter()
useEffect(()=>{
 const cookieLocale=document.cookie.split(";")
 .find((row)=>row.startsWith("MYNEXTAPP_LOCALE="))
 ?.split("=")[1]
 if(cookieLocale){
  setLocale(cookieLocale)
 }
 else{
  const broswerLocale=navigator.language.slice(0,2)
  setLocale(broswerLocale)
  document.cookie=`MYNEXTAPP_LOCALE=${broswerLocale};path=/;`
  router.refresh()
 }
},[router])
const changeLocale=(newLocale)=>{
  setLocale(newLocale)
  document.cookie=`MYNEXTAPP_LOCALE=${newLocale};path=/`;
  router.refresh()
}

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="p-2 rounded-md hover:bg-gray-100">
      <div className="flex items-center gap-2">
        <Languages size={20} />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => changeLocale("en")}>
        🇬🇧 English
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => changeLocale("my")}>
        🇲🇲 Myanmar
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );
};

export default LanguageSection;