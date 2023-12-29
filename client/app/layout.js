"use client";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Management/Sidebar";

import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "TechsyHub",
  description: "TechsyHub",
};
export default function RootLayout({ children }) {
  const path = usePathname();
  const router = useSearchParams();
  const route = router.get("route");
  const id = router.get("id");
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@200;400;600;800&family=Spinnaker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Toaster />
        {path === "/management" ? (
          <Sidebar title={route} id={id}>
            {children}
          </Sidebar>
        ) : path === "/auth" ? (
          <>{children}</>
        ) : (
          <>
            <Header route={path} />
            <Chatbot />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
