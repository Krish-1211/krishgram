"use client";

import { useState } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { TerminalBoot } from "@/components/resume/TerminalBoot";
import { ResumeInterface } from "@/components/resume/ResumeInterface";
import { Container } from "@/components/ui/Container";

export default function ResumePage() {
    const [bootComplete, setBootComplete] = useState(false);

    return (
        <main className="min-h-screen bg-background pb-20 md:pb-0">
            {!bootComplete && <TerminalBoot onComplete={() => setBootComplete(true)} />}

            <TopNav />

            <Container className="py-6 h-[calc(100vh-4rem)] flex items-center justify-center">
                {bootComplete && <ResumeInterface />}
            </Container>

            <BottomNav />
        </main>
    );
}
