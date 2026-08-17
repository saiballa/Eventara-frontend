import React from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import AuthModal from "../components/auth/authModal";
import { Toaster } from "sonner";
import AuthInitializer from "../components/auth/authInitializer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <AuthInitializer/>

     <Toaster position='top-right' richColors/>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>
        <Footer />
      </div>

    <AuthModal/>
    </>
  );
}
