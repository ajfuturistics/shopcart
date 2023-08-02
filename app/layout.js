import Topbar from "@/components/Topbar/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopcart",
  description: "shopcart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
