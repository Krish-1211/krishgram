import { Container } from "@/components/ui/Container";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { Feed } from "@/components/feed/Feed";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <TopNav />

      <Container className="max-w-xl py-6">
        <div className="flex flex-col gap-4">
          {/* Stories / Highlights Placeholder */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {/* We can add stories here later if needed, or just keep it clean */}
          </div>

          {/* Feed */}
          <Feed />
        </div>
      </Container>

      <BottomNav />
    </main>
  );
}
