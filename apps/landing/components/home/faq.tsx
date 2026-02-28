"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "is it free",
        answer: "openslop is completely free and open source. You only pay for the API costs of the models you choose to use.",
    },
    {
        question: "how do i get started",
        answer: "Simply run `bun intall -g @openslop/openslop` in your terminal. Then run `openslop init` to configure your API keys.",
    },
    {
        question: "can i run this on windows",
        answer: "Yes, openslop works on Windows through WSL, Command Prompt, or PowerShell. We recommend WSL for the best experience.",
    },
    {
        question: "is it open source",
        answer: "Yes, the entire codebase is available on GitHub under the MIT license. We welcome contributions from the community!",
    },
    {
        question: "can i run any model",
        answer: "Yes, openslop supports any model that provides an OpenAI-compatible API endpoint.",
    },
    {
        question: "do i need to install an app",
        answer: "No, openslop runs entirely in your terminal. There is no desktop app to install or run in the background.",
    },
];

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-4xl font-medium tracking-tight text-center mb-16 text-foreground">
                    faqs
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-4"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-gray-600 focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-medium">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="h-5 w-5 text-gray-500" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="pb-4 text-gray-600 pr-12">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
