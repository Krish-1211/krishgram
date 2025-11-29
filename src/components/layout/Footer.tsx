"use client";

import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="hidden md:block py-6 border-t mt-auto">
            <Container className="flex items-center justify-center text-sm text-muted-foreground">
                <p className="hover:text-primary transition-colors cursor-help" title="Help! I'm trapped in a portfolio factory!">
                    Made with logic, caffeine, and mild existential panic.
                </p>
            </Container>
        </footer>
    );
}
