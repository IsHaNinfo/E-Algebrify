"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

const hideNavbarRoutes = ["/login", "/register"];

export function ConditionalNavbar() {
    const pathname = usePathname();
    if (hideNavbarRoutes.includes(pathname)) return null;
    return <Navbar />;
} 