
import { Toaster } from "sonner";
import "../styles/globals.css";
import "../styles/animate.css";
import NextTopLoader from "nextjs-toploader";
import TimeComponent from "@/features/Clients/Home/components/TimeComponent";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
export default async function RootLayout({ children }) {
  const messages=await getMessages()
  const  lang=await getLocale();
  return (
    <html lang={lang}>
      <body className={` antialiased  font-paduak`} suppressHydrationWarning={true}>
         <NextTopLoader color="rgb(0 128 255)" />
         <Toaster/>
        <TimeComponent/>
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
