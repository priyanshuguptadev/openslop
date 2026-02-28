import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        openslop
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="#installation" className="transition-colors hover:text-foreground">
                        Installation
                    </Link>
                    <Link href="#meet-openslop" className="transition-colors hover:text-foreground">
                        Introduction
                    </Link>
                    <Link href="#privacy" className="transition-colors hover:text-foreground">
                        Privacy policy
                    </Link>
                </nav>

                <div className="flex items-center">
                    <Link
                        href="/docs"
                        className={cn(
                            "inline-flex h-9 items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        )}
                    >
                        Docs
                    </Link>
                </div>
            </div>
        </header>
    );
}
