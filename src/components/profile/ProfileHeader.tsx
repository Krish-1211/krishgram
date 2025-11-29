"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Twitter, Globe, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Globe,
};

interface ProfileHeaderProps {
    profile: {
        name: string;
        username: string;
        tagline: string;
        bio: string;
        avatar: string;
        stats: {
            posts: number;
            followers: number;
            following: number;
        };
        socials: {
            platform: string;
            url: string;
            icon: string;
        }[];
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
                        <span className="font-bold text-lg md:text-xl">{profile.stats.posts}</span>
                        <span className="text-xs text-muted-foreground">Posts</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg md:text-xl">{profile.stats.followers}</span>
                        <span className="text-xs text-muted-foreground">Followers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg md:text-xl">{profile.stats.following}</span>
                        <span className="text-xs text-muted-foreground">Following</span>
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
                {profile.socials.map((social) => {
                    const Icon = iconMap[social.icon] || Globe;
                    return (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
