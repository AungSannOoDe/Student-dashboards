
import { Toaster } from "sonner";
import "../styles/globals.css";
import "../styles/animate.css";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`} suppressHydrationWarning={true}>
         <NextTopLoader color="rgb(0 128 255)" />
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
