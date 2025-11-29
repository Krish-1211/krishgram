"use client";

import { Container } from "@/components/ui/Container";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { DmWindow } from "@/components/chat/DmWindow";

export default function ChatPage() {
    return (
        <main className="min-h-screen bg-background pb-20 md:pb-0">
            <TopNav />

            <Container className="py-6 h-[calc(100vh-4rem)] flex items-center justify-center">
                <DmWindow />
            </Container>

            <BottomNav />
        </main>
    );
}
