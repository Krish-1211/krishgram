"use client";

import { Brain, Globe, Shield, Palette, LucideIcon, Database, Code, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
    Brain,
    Globe,
    Shield,
    Palette,
    Database,
    Code,
    Award,
};

interface HighlightBubbleProps {
    label: string;
    iconName: string;
    onClick: () => void;
}

export function HighlightBubble({ label, iconName, onClick }: HighlightBubbleProps) {
    const Icon = iconMap[iconName] || Globe;

    return (
        <button onClick={onClick} className="flex flex-col items-center gap-1 min-w-[70px]">
            <div className="h-16 w-16 rounded-full border-2 border-muted p-1 hover:border-primary transition-colors">
                <div className="h-full w-full rounded-full bg-muted flex items-center justify-center">
                    <Icon className="h-6 w-6 text-foreground" />
                </div>
            </div>
            <span className="text-xs text-center truncate w-full">{label}</span>
        </button>
    );
}
