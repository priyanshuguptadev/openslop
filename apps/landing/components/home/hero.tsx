"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

export function Hero() {
    const [copied, setCopied] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("npm install -g @openslop/openslop");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center"
        >
            <div className="max-w-4xl space-y-8">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading tracking-tight text-foreground leading-[1.1]">
                    <span>
                        an <span className="italic">agentic</span> <br /> coding assistant
                    </span>
                </h1>

                <div className="flex justify-center mt-12 mb-32">
                    <div className="flex items-center gap-4 bg-white border border-gray-200 shadow-sm rounded-full py-2 px-4 pr-2">
                        <code className="text-sm font-mono text-gray-700">npm install -g @openslop/openslop</code>
                        <button
                            onClick={copyToClipboard}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Copy installation command"
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-green-500" />
                            ) : (
                                <Copy className="w-4 h-4 text-gray-500" />
                            )}
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-800"
                >
                    {/* Native Video Element */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                    >
                        <source src="/assets/openslop.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Fading overlay to make it look like it's blending if needed */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/10"></div>
                </motion.div>
            </div>
        </section>
    );
}
