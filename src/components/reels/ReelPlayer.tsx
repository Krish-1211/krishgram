"use client";

import { useRef, useState, useEffect } from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ReelProps {
    reel: {
        id: string;
        videoUrl: string;
        caption: string;
        likes: number;
        comments: number;
    };
    isActive: boolean;
}

export function ReelPlayer({ reel, isActive }: ReelProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (isActive) {
            videoRef.current?.play().catch(() => {
                // Autoplay might be blocked
                setIsPlaying(false);
            });
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    }, [isActive]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleLike = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
    };

    return (
        <div className="relative h-full w-full bg-black flex items-center justify-center snap-start shrink-0">
            {/* Video */}
            <video
                ref={videoRef}
                src={reel.videoUrl}
                className="h-full w-full object-cover"
                loop
                muted={isMuted}
                playsInline
                onClick={togglePlay}
            />

            {/* Play/Pause Overlay */}
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="bg-black/40 p-4 rounded-full backdrop-blur-sm">
                            <Play className="h-8 w-8 text-white fill-white" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls & Info */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none">
                <div className="flex justify-end pointer-events-auto">
                    <button onClick={toggleMute} className="p-2 text-white">
                        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                    </button>
                </div>

                <div className="flex items-end justify-between mb-16 md:mb-0">
                    <div className="flex-1 mr-12 pointer-events-auto">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 p-[2px]">
                                <div className="h-full w-full rounded-full bg-black" />
                            </div>
                            <span className="text-white font-semibold text-sm">krishcodes</span>
                            <button className="text-white/80 text-xs border border-white/50 px-2 py-0.5 rounded-md">
                                Follow
                            </button>
                        </div>
                        <p className="text-white text-sm line-clamp-2">{reel.caption}</p>
                        <div className="flex items-center gap-2 mt-2 text-white/80 text-xs">
                            <span>♫ Original Audio</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center pointer-events-auto">
                        <button onClick={handleLike} className="flex flex-col items-center gap-1">
                            <Heart className={cn("h-7 w-7 transition-colors", isLiked ? "text-red-500 fill-red-500" : "text-white")} />
                            <span className="text-white text-xs">{reel.likes}</span>
                        </button>
                        <button className="flex flex-col items-center gap-1">
                            <MessageCircle className="h-7 w-7 text-white" />
                            <span className="text-white text-xs">{reel.comments}</span>
                        </button>
                        <button className="flex flex-col items-center gap-1">
                            <Share2 className="h-7 w-7 text-white" />
                            <span className="text-white text-xs">Share</span>
                        </button>
                        <button>
                            <MoreHorizontal className="h-7 w-7 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
