
import { Toaster } from "sonner";
import "../styles/globals.css";
import "../styles/animate.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
