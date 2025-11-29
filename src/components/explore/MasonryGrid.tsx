"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

interface MasonryItem {
    id: string;
    image: string;
    title: string;
    likes: number;
    comments: number;
    type: "image" | "video";
}

interface MasonryGridProps {
    items: MasonryItem[];
}

export function MasonryGrid({ items }: MasonryGridProps) {
    return (
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-muted"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                        <div className="flex items-center gap-1">
                            <Heart className="h-5 w-5 fill-white" />
                            <span className="font-bold">{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircle className="h-5 w-5 fill-white" />
                            <span className="font-bold">{item.comments}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
