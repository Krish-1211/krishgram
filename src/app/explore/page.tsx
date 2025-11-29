"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { FilterBar } from "@/components/explore/FilterBar";
import { MasonryGrid } from "@/components/explore/MasonryGrid";

import exploreData from "@/data/explore.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exploreItems = exploreData as any[];

const filters = ["All", "React", "AI", "Web", "Data", "Security", "Design"];

export default function ExplorePage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredItems = activeFilter === "All"
        ? exploreItems
        : exploreItems.filter(item => item.category === activeFilter);

    return (
        <main className="min-h-screen bg-background pb-20 md:pb-0">
            <TopNav />

            <Container className="py-6">
                <div className="flex flex-col gap-6">
                    <FilterBar
                        filters={filters}
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                    />

                    <MasonryGrid items={filteredItems} />
                </div>
            </Container>

            <BottomNav />
        </main>
    );
}
