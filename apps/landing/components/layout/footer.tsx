import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-background pt-16 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gray-200">
                    <div className="flex gap-8">
                        <Link href="#installation" className="text-sm text-gray-500 hover:text-foreground transition-colors">quick links</Link>
                        <Link href="https://github.com/priyanshuguptadev/openslop" className="text-sm text-gray-500 hover:text-foreground transition-colors">github</Link>
                        <Link href="/docs" className="text-sm text-gray-500 hover:text-foreground transition-colors">docs</Link>
                    </div>

                    <div className="text-sm text-gray-500">
                        copyright © {new Date().getFullYear()} openslop
                    </div>
                </div>
            </div>
        </footer>
    );
}
