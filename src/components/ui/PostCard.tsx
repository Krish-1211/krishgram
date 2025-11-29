"use client";

import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PostCardProps {
    project: {
        id: string;
        title: string;
        caption: string;
        tags: string[];
        image: string;
        likes: number;
        comments: number;
        date?: string;
    };
    index: number;
}

export function PostCard({ project, index }: PostCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 bg-card border rounded-xl overflow-hidden shadow-sm"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 p-[2px]">
                        <div className="h-full w-full rounded-full bg-background p-0.5">
                            <Image
                                src="https://github.com/shadcn.png"
                                alt="Krish"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">krishcodes</p>
                        <p className="text-xs text-muted-foreground">{project.title}</p>
                    </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="h-5 w-5" />
                </button>
            </div>

            {/* Image */}
            <div className="relative aspect-video w-full bg-muted">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Actions */}
            <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                        <button className="hover:text-red-500 transition-colors">
                            <Heart className="h-6 w-6" />
                        </button>
                        <button className="hover:text-blue-500 transition-colors">
                            <MessageCircle className="h-6 w-6" />
                        </button>
                        <button className="hover:text-green-500 transition-colors">
                            <Send className="h-6 w-6" />
                        </button>
                    </div>
                    <button className="hover:text-yellow-500 transition-colors">
                        <Bookmark className="h-6 w-6" />
                    </button>
                </div>

                {/* Likes */}
                <p className="text-sm font-semibold mb-2">{project.likes} likes</p>

                {/* Caption */}
                <div className="space-y-1">
                    <p className="text-sm">
                        <span className="font-semibold mr-2">krishcodes</span>
                        {project.caption}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs text-blue-500 hover:underline cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Comments Link */}
                <button className="text-sm text-muted-foreground mt-2">
                    View all {project.comments} comments
                </button>

                {/* Date */}
                <p className="text-[10px] text-muted-foreground uppercase mt-2">
                    {project.date || "Just now"}
                </p>
            </div>
        </motion.article>
    );
}
