import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { changeImage } from "@/services/profile";
import useAccountStore from "@/stores/useAccountStore";

const useChangeImage = () => {
  const router = useRouter();

  const { account, setAccount } = useAccountStore();

  const handleChangeImage = async (event) => {
    const toastId = toast.loading("Uploading ....");
    try {
      const res = await changeImage(event.target.files[0]);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Profile Image Change failed");
      }
      setAccount(json.user);
      toast.success("Image Changed Successfully", {
        id: toastId,
      });
      router.push("/dashboard/profile");
    } catch (error) {
      toast.error(error.message, {
        id: toastId,
      });
      console.error("Error:", error);
    }
  };

  return {
    handleChangeImage,
  };
};

export default useChangeImage;
