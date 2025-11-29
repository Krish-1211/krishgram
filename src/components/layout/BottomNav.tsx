"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Clapperboard, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/reels", label: "Reels", icon: Clapperboard },
    { href: "/chat", label: "Chat", icon: MessageCircle },
    { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-background/80 backdrop-blur-md md:hidden pb-safe">
            <div className="flex h-16 items-center justify-around px-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            <Icon className={cn("h-6 w-6 transition-transform active:scale-95", isActive && "fill-current")} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
