"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalBootProps {
    onComplete: () => void;
}

export function TerminalBoot({ onComplete }: TerminalBootProps) {
    const [lines, setLines] = useState<string[]>([]);

    const bootSequence = [
        "> Initializing Resume.exe...",
        "> Loading kernel modules...",
        "> Compiling skills database...",
        "> Optimizing experience threads...",
        "> Mounting project volumes...",
        "> System ready.",
    ];

    useEffect(() => {
        let delay = 0;
        bootSequence.forEach((line, index) => {
            delay += Math.random() * 500 + 200;
            setTimeout(() => {
                setLines((prev) => [...prev, line]);
                if (index === bootSequence.length - 1) {
                    setTimeout(onComplete, 800);
                }
            }, delay);
        });
    }, []);

    return (
        <div className="fixed inset-0 bg-black text-green-500 font-mono p-8 z-50 flex flex-col justify-end pb-20 md:justify-start md:pt-20">
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-2"
                >
                    {line}
                </motion.div>
            ))}
            <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-green-500 inline-block ml-1"
            />
        </div>
    );
}
