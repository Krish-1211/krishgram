"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Code2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface Project {
    id: string;
    title: string;
    caption: string;
    fullDescription?: string;
    tags: string[];
    image: string;
    likes: number;
    comments: number;
    date?: string;
    demoUrl?: string;
    repoUrl?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        <div className="bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto border border-border/50">
                            <div className="relative">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                {/* Image */}
                                <div className="relative aspect-video w-full bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{project.date || "2024"}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Code2 className="h-4 w-4" />
                                            <span>Full Stack</span>
                                        </div>
                                    </div>

                                    <div className="prose dark:prose-invert max-w-none">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.fullDescription || project.caption}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4 border-t">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                                            >
                                                <Github className="h-4 w-4" />
                                                Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
