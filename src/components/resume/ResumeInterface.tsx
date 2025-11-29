"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code, Briefcase, GraduationCap, Award, AlertTriangle, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
];

export function ResumeInterface() {
    const [activeSection, setActiveSection] = useState("skills");
    const [crashed, setCrashed] = useState(false);

    if (crashed) {
        return (
            <div className="fixed inset-0 bg-blue-700 text-white font-mono p-8 flex flex-col items-center justify-center text-center z-50">
                <h1 className="text-6xl mb-8">:(</h1>
                <p className="text-xl mb-4">Your device ran into a problem and needs to restart.</p>
                <p className="text-lg">Stop code: TOO_AWESOME_TO_RENDER</p>
                <button
                    onClick={() => setCrashed(false)}
                    className="mt-8 px-6 py-2 border border-white rounded hover:bg-white/10 transition-colors"
                >
                    Reboot System
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row h-[calc(100vh-8rem)] md:h-[600px] w-full max-w-5xl mx-auto bg-black/90 border border-green-500/30 rounded-xl overflow-hidden shadow-2xl font-mono text-green-400 relative">
            {/* Scanlines Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20" />

            {/* Sidebar */}
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-green-500/30 bg-black/50 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                <div className="hidden md:flex items-center gap-2 mb-6 px-2 text-green-500">
                    <Terminal className="h-5 w-5" />
                    <span className="font-bold">RESUME.EXE</span>
                </div>

                {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded hover:bg-green-500/10 transition-colors whitespace-nowrap",
                                activeSection === section.id ? "bg-green-500/20 text-green-300" : "text-green-500/70"
                            )}
                        >
                            <Icon className="h-4 w-4" />
                            <span>{section.label}</span>
                        </button>
                    );
                })}

                <div className="md:mt-auto pt-4 md:border-t border-green-500/30 flex flex-col gap-2">
                    <button className="flex items-center gap-3 px-4 py-3 rounded hover:bg-green-500/10 transition-colors text-green-500/70">
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                    </button>
                    <button
                        onClick={() => setCrashed(true)}
                        className="flex items-center gap-3 px-4 py-3 rounded hover:bg-red-500/10 transition-colors text-red-400/70 group"
                    >
                        <AlertTriangle className="h-4 w-4 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Do Not Click</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto relative z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeSection === "skills" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold border-b border-green-500/30 pb-2 mb-4">System Capabilities</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-green-300">Languages & Web</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Python, C, C++</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> HTML, CSS, JavaScript</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Bootstrap, Tailwind CSS</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> React / Next.js</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 text-green-300">Data Science & Tools</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Pandas, NumPy, Matplotlib</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Power BI, SQL</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Machine Learning, AI</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> GitHub, VS Code, Jupyter</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "experience" && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold border-b border-green-500/30 pb-2 mb-4">Runtime Logs</h2>
                                <div className="relative border-l border-green-500/30 pl-6 ml-2 space-y-8">
                                    <div className="relative">
                                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-green-500 rounded-full border-4 border-black" />
                                        <h3 className="text-xl font-bold text-green-300">IT Trainer</h3>
                                        <p className="text-sm opacity-70 mb-2">Freelance | 2023 - Present</p>
                                        <p className="opacity-90">Taught and mentored students in core computer science subjects including C, C++, Python, Web Development, and Data Science. Designed beginner-to-advanced level content and guided learners through hands-on projects.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "education" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold border-b border-green-500/30 pb-2 mb-4">Knowledge Base</h2>
                                <div className="bg-green-500/5 p-6 rounded border border-green-500/20">
                                    <h3 className="text-xl font-bold text-green-300">B.Tech. - Computer Science Engineering</h3>
                                    <p className="text-sm opacity-70 mb-2">Parul University (PIT) | 2022 - 2026</p>
                                    <p className="opacity-90">CGPA: 6.91 / 10</p>
                                </div>
                                <div className="bg-green-500/5 p-6 rounded border border-green-500/20">
                                    <h3 className="text-xl font-bold text-green-300">12th Grade (CBSE)</h3>
                                    <p className="text-sm opacity-70 mb-2">Urmi School | 2022</p>
                                    <p className="opacity-90">Percentage: 73%</p>
                                </div>
                            </div>
                        )}

                        {activeSection === "certifications" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold border-b border-green-500/30 pb-2 mb-4">Security Keys</h2>
                                <div className="grid gap-4">
                                    <div className="flex items-center justify-between p-4 bg-green-500/5 rounded border border-green-500/20">
                                        <div>
                                            <h3 className="font-bold text-green-300">Data Science Professional Program</h3>
                                            <p className="text-sm opacity-70">Baroda Institute of Technology | Score: 90.30/100</p>
                                        </div>
                                        <span className="text-xs border border-green-500/50 px-2 py-1 rounded">VERIFIED</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-green-500/5 rounded border border-green-500/20">
                                        <div>
                                            <h3 className="font-bold text-green-300">Data Analysis Master Program</h3>
                                            <p className="text-sm opacity-70">Baroda Institute of Technology | Score: 90/100</p>
                                        </div>
                                        <span className="text-xs border border-green-500/50 px-2 py-1 rounded">VERIFIED</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-green-500/5 rounded border border-green-500/20">
                                        <div>
                                            <h3 className="font-bold text-green-300">Frontend Web Developer Program</h3>
                                            <p className="text-sm opacity-70">Baroda Institute of Technology | Score: 80/100</p>
                                        </div>
                                        <span className="text-xs border border-green-500/50 px-2 py-1 rounded">VERIFIED</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-green-500/5 rounded border border-green-500/20">
                                        <div>
                                            <h3 className="font-bold text-green-300">The Duke of Edinburgh's International Award</h3>
                                            <p className="text-sm opacity-70">Bronze Medalist</p>
                                        </div>
                                        <span className="text-xs border border-green-500/50 px-2 py-1 rounded">AWARD</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
