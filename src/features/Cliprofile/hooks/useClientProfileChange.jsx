
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { changeImage, ClientChangeImage } from "@/services/profile";
import useAccountStore from "@/stores/useAccountStore";
const useClientProfileChange = () => {
     const router = useRouter();

      const { account, setAccount } = useAccountStore();

      const handleChangeImage = async (event) => {
        const toastId = toast.loading("Uploading ....");
        try {
          const res = await ClientChangeImage(event.target.files[0]);
          const json = await res.json();
          if (!res.ok) {
            throw new Error(json.message || "Profile Image Change failed");
          }
          setAccount(json.user);
          toast.success("Image Changed Successfully", {
            id: toastId,
          });
          router.push("/clients/profile");
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
}

export default useClientProfileChange