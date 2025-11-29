"use client";

import { useRef, useState, useEffect } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { ReelPlayer } from "@/components/reels/ReelPlayer";
import reels from "@/data/reels.json";

export default function ReelsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeReelIndex, setActiveReelIndex] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const index = Math.round(container.scrollTop / container.clientHeight);
            if (index !== activeReelIndex) {
                setActiveReelIndex(index);
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [activeReelIndex]);

    return (
        <main className="h-screen w-full bg-black overflow-hidden flex flex-col">
            <div className="md:hidden absolute top-4 left-4 z-50 text-white font-bold text-xl drop-shadow-md">
                Reels
            </div>

            <div className="hidden md:block">
                <TopNav />
            </div>

            <div
                ref={containerRef}
                className="flex-1 overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
            >
                {reels.map((reel, index) => (
                    <div key={reel.id} className="h-full w-full snap-start relative">
                        <ReelPlayer reel={reel} isActive={index === activeReelIndex} />
                    </div>
                ))}
            </div>

            <BottomNav />
        </main>
    );
}
