import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Surrey Garden Services",
  description: "Professional landscaping & garden care in Surrey",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar visible on every page */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-1 container mx-auto p-6">{children}</main>

        {/* Footer visible on every page */}
        <Footer />
      </body>
    </html>
  );
}
