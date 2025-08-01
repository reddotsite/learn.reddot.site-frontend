"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import NavbarList from "./navbar-list";
import Link from "next/link";

const navbarList: { title: string; href: string }[] = [
    { title: "Belajar", href: "/" },
    { title: "Komunitas", href: "/community" },
    { title: "Others", href: "/other" },
    { title: "Tentang Kami", href: "/about" },
];

type NavbarProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

export function Navbar({ isOpen, setIsOpen }: NavbarProps) {
    return (
        <>
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex gap-3">
                    {navbarList.map(({ title, href }) => (
                        <NavbarList key={href} href={href}>
                            <span className="flex items-center gap-1 justify-center">
                                {title}
                                {title === "E-Learning" && (
                                    <ArrowUpRight color="white" size={14} />
                                )}
                            </span>
                        </NavbarList>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </>
    );
}

export function MobileMenu({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    return (
        <div className="flex flex-col gap-3 px-4 py-2">
            {navbarList.map(({ title, href }) => (
                <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 font-medium hover:text-black transition"
                >
                    <span className="flex items-center gap-1">
                        {title}
                        {title === "E-Learning" && (
                            <ArrowUpRight color="white" size={14} />
                        )}
                    </span>
                </Link>
            ))}
            <div className="flex flex-col gap-2 text-center mt-2">
                <Link
                    href="/auth/login"
                    className="py-1.5 px-3 border border-white rounded hover:bg-white hover:text-primary transition"
                    onClick={() => setIsOpen(false)}
                >
                    Masuk
                </Link>
                <Link
                    href="/auth/sign-up"
                    className="py-1.5 px-3 rounded bg-white text-primary hover:opacity-90 transition"
                    onClick={() => setIsOpen(false)}
                >
                    Daftar
                </Link>
            </div>
        </div>
    );
}
