"use client"
import { ModeToggle } from "@/components/theme-toggle";
import { CommandIcon } from "lucide-react";
import Link from "next/link";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useAuth } from "@/store/AuthContext";
import { jwtDecode } from "jwt-decode"
import { getUserById } from "@/services/api";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              <ModeToggle />
            </div>
            <UserAvatarDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

function UserAvatarDropdown() {
  const { token, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!token) return;
      try {
        const decoded: any = jwtDecode(token);
        const userId = decoded.id;
        console.log(userId)
        const userData = await getUserById(userId);
        console.log(userData.data)
        setUser(userData.data);
        console.log(user.firstName)
        // Optionally update localStorage
        localStorage.setItem("user", JSON.stringify(userData.data));
      } catch (e) {
        setUser(null);
      }
    }
    fetchUser();
  }, [token]);

  let firstName = user?.firstName || "";
  let lastName = user?.lastName || "";
  let initials = `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase() || "?";

  if (!token) return null;

  return (
    <div className="relative ml-4">
      <button
        className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-lg focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        title="Account"
      >
        {initials}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50 p-4">
          <div className="mb-2 text-gray-900 dark:text-white font-semibold text-base">
            {firstName} {lastName}
          </div>
          <button
            className="w-full text-left px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            onClick={() => {
              logout();
              setOpen(false);
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <CommandIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
      <h2 className="text-md font-bold font-code">Algebrify</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-sm text-[14.5px] dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
