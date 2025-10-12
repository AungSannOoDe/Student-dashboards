"use client";
import Spinner from "@/components/Spinner";
import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import { checkProfile } from "@/services/voters";
import { toast } from "sonner";
import NotFound from "@/components/NotFound";
import IndexPage from "../pages/IndexPage";

export default function HomeLayout({ children }) {
  const router = useRouter();
  const { logout,token,Part,account,setVoteMale, setVoteFemale,SpecifyId} = useAccountStore();
  const [isLoading, setIsLoading] = useState(true);
  console.log(SpecifyId);
  const autoLogoutIfTokenExpire = async (currentToken) => {
    const res = await checkProfile(currentToken);
    if (res.status === 401) {
      toast.error("Your token has expired, please login again");
      logout();
    }
  };
  const autoGenderateMaleVote=()=>{
     account.vote_male==0  && setVoteMale(0)
  }
  const autoGenderateFemaleVote=()=>{
    account.vote_female==0  && setVoteFemale(0)
 }
  useEffect(() => {
    const currentToken = useAccountStore.getState().token;
     autoGenderateMaleVote()
     autoGenderateFemaleVote()
    if (!currentToken) {
      router.push("/");
    } else {
      autoLogoutIfTokenExpire(currentToken);
    }
    setIsLoading(false);
  }, [token,Part,account]);
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (!useAccountStore.getState().token) {
    return <IndexPage />;
  }
  if(Part!=2){
    return <NotFound/>;
  }
  return <>{children}</>;
}