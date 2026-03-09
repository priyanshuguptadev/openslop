import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || "http://localhost:3001";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="openslop logo"
              width={160}
              height={40}
              className="h-8 w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={DOCS_URL}
            className="transition-colors hover:text-foreground"
          >
            Introduction
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${DOCS_URL}/get-started`}
            className="transition-colors hover:text-foreground"
          >
            Get Started
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            href="/docs"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            )}
          >
            Docs
          </Link>
        </div>
      </div>
    </header>
  );
}
