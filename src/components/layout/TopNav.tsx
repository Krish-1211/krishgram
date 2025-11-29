"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Clapperboard, MessageCircle, User, Search, Camera } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "../ui/Container";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/reels", label: "Reels", icon: Clapperboard },
    { href: "/chat", label: "Chat", icon: MessageCircle },
    { href: "/profile", label: "Profile", icon: User },
];

export function TopNav() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white shadow-lg transition-transform group-hover:scale-105">
                        <Camera className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold font-oleo bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent hidden sm:block pt-1">
                        Krishgram
                    </span>
                </Link>

                {/* Search Bar (Visual only for now) */}
                <div className="hidden md:flex items-center px-3 py-1.5 bg-muted rounded-lg w-64">
                    <Search className="h-4 w-4 text-muted-foreground mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent border-none focus:outline-none text-sm w-full"
                        readOnly
                    />
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group flex items-center gap-2 transition-colors hover:text-primary",
                                    isActive ? "text-primary font-medium" : "text-muted-foreground"
                                )}
                            >
                                <Icon className={cn("h-6 w-6 transition-transform group-hover:scale-110", isActive && "fill-current")} />
                            </Link>
                        );
                    })}
                    <ThemeToggle />
                </nav>
            </Container>
        </header>
    );
}
