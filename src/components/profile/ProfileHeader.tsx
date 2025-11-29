"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface ProfileHeaderProps {
    profile: {
        name: string;
        username: string;
        tagline: string;
        bio: string;
        avatar: string;
        stats: {
            projects: number;
            years: number;
            commits: string;
        };
        socials: {
            github: string;
            linkedin: string;
            twitter: string;
            email: string;
        };
    };
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col gap-6 px-4 pt-4">
            <div className="flex items-center justify-between">
                {/* Avatar */}
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 p-[2px]">
                    <div className="h-full w-full rounded-full bg-background p-1">
                        <Image
                            src={profile.avatar}
                            alt={profile.name}
                            width={96}
                            height={96}
                            className="rounded-full object-cover h-full w-full"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-1 justify-around ml-4 md:ml-12">
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg md:text-xl">{profile.stats.projects}</span>
                        <span className="text-xs text-muted-foreground">Projects</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg md:text-xl">{profile.stats.years}</span>
                        <span className="text-xs text-muted-foreground">Years Exp</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg md:text-xl">{profile.stats.commits}</span>
                        <span className="text-xs text-muted-foreground">Commits</span>
                    </div>
                </div>
            </div>

            {/* Bio */}
            <div className="space-y-1">
                <h1 className="font-bold text-lg">{profile.name}</h1>
                <p className="text-sm text-muted-foreground">{profile.tagline}</p>
                <p className="text-sm whitespace-pre-line">{profile.bio}</p>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                    <Github className="h-5 w-5" />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                    <Linkedin className="h-5 w-5" />
                </a>
                <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                    <Twitter className="h-5 w-5" />
                </a>
                <a href={profile.socials.email} className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                    <Mail className="h-5 w-5" />
                </a>
            </div>
        </div>
    );
}
