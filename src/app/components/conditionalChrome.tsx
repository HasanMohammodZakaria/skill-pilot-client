"use client";

import { usePathname } from "next/navigation";

import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const HIDE_CHROME_ON = ["/login", "/register"];

export default function ConditionalChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = HIDE_CHROME_ON.some((path) => pathname.startsWith(path));

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}