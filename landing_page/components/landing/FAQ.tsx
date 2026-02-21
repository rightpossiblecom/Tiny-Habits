"use client";

import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "Is this a productivity system?",
            answer: "No. Tiny Habits is a minimal app that helps users track small daily actions. There is no coaching, no health claims, and no productivity systems.",
        },
        {
            question: "Does the app send me reminders?",
            answer: "In this first version, no. We believe in keeping it simple. Open the app, mark it done, and close it when you remember.",
        },
        {
            question: "Are my habits synced to the cloud?",
            answer: "No. All of your data is stored locally on your device for absolute privacy.",
        },
        {
            question: "Why aren't there detailed analytics and charts?",
            answer: "We want to avoid tracking fatigue and analytics-induced anxiety. A simple 7-day visual grid is all you need to stay consistent.",
        },
        {
            question: "Can it integrate with my wearable or health app?",
            answer: "No. Tiny Habits doesn't integrate with wearables, count steps, or make health claims. It is purely designed as a simple daily tracker.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">
                    Common Questions.
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/5 rounded-3xl overflow-hidden bg-zinc-900/50"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                            >
                                <span className="text-white font-semibold pr-8">{faq.question}</span>
                                <span className={`text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-white/5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
