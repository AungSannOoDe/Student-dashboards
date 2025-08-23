
"use client";
import { cn } from "@/lib/utils";
import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";

const LogoutButton = ({ children, className, ...props }) => {
const router = useRouter();
  const { logout,setPart } = useAccountStore();
  const handleLogout = () => {
    logout();
    router.push("/");
    setPart(0);
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