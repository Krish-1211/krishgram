"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FilterBarProps {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={cn(
                        "px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border",
                        activeFilter === filter
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-muted-foreground border-border hover:bg-muted"
                    )}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
