import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic"; 
export default getRequestConfig(async () => {

  const cookieStore = await cookies();
  const cookieLocal = cookieStore.get("MYNEXTAPP_LOCALE")?.value || "en";
  const locale =cookieLocal.trim().split(";")[0].split(" ")[0]
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});