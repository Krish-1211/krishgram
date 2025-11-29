"use client";

import { useState } from "react";
import { PostCard } from "@/components/ui/PostCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import projects from "@/data/projects.json";

export function Feed() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer">
                        <PostCard project={project} index={index} />
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
