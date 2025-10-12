
"use client";
import { cn } from "@/lib/utils";
import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";

const LogoutButton = ({ children, className, ...props }) => {
const router = useRouter();
  const { logout,setPart,SpecifyId,setSpecifyId } = useAccountStore();
  const handleLogout = () => {
    logout();
    setSpecifyId({});
    router.push("/");
    setPart(0);
    localStorage.removeItem("userToken");
    sessionStorage.clear();
  };
  return (
 <button
  type="button"
  onClick={handleLogout}
  className={cn(
    'inline-flex gap-2 border border-stone-300 px-3 py-1 bg-gray-100 text-stone-600',
    className
  )}
  {...props}
>
  {children}
</button>
  )
}

export default LogoutButton