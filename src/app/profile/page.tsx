"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { HighlightBubble } from "@/components/profile/HighlightBubble";
import { CertificateModal } from "@/components/profile/CertificateModal";
import { Grid, User, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import profileData from "@/data/profile.json";
import certificatesData from "@/data/certificates.json";
import projectsData from "@/data/projects.json";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<"posts" | "about">("posts");
    const [selectedCert, setSelectedCert] = useState<typeof certificatesData[0] | null>(null);

    return (
        <main className="min-h-screen bg-background pb-20 md:pb-0">
            <TopNav />

            <Container className="max-w-xl py-6">
                <ProfileHeader profile={profileData} />

                {/* Highlights */}
                <div className="flex gap-4 overflow-x-auto px-4 py-6 scrollbar-hide">
                    {profileData.highlights.map((highlight, index) => (
                        <HighlightBubble
                            key={highlight.id}
                            label={highlight.title}
                            iconName={highlight.icon}
                            onClick={() => setSelectedCert(certificatesData[index % certificatesData.length])}
                        />
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex border-t border-b">
                    <button
                        onClick={() => setActiveTab("posts")}
                        className={cn(
                            "flex-1 flex items-center justify-center py-3 border-b-2 transition-colors",
                            activeTab === "posts" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
                        )}
                    >
                        <Grid className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => setActiveTab("about")}
                        className={cn(
                            "flex-1 flex items-center justify-center py-3 border-b-2 transition-colors",
                            activeTab === "about" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
                        )}
                    >
                        <User className="h-6 w-6" />
                    </button>
                    <Link
                        href="/resume"
                        className="flex-1 flex items-center justify-center py-3 border-b-2 border-transparent text-muted-foreground hover:text-primary transition-colors"
                    >
                        <FileText className="h-6 w-6" />
                    </Link>
                </div>

                {/* Content */}
                <div className="min-h-[300px]">
                    {activeTab === "posts" ? (
                        <div className="grid grid-cols-3 gap-1">
                            {projectsData.map((project) => (
                                <div key={project.id} className="aspect-square relative bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 space-y-4">
                            <h3 className="font-bold text-lg">About Me</h3>
                            <p className="text-muted-foreground">
                                I'm a passionate Full Stack Developer with a knack for building beautiful, functional, and secure web applications.
                                I love exploring new technologies and pushing the boundaries of what's possible on the web.
                            </p>
                            <h3 className="font-bold text-lg mt-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Container>

            <CertificateModal
                certificate={selectedCert}
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
            />

            <BottomNav />
        </main>
    );
}
