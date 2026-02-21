import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Help() {
    const sections = [
        {
            title: "Getting Started",
            items: [
                { q: "How do I add a habit?", a: "Tap the 'Add Habit' button at the bottom of the home screen to add a new small daily action." },
                { q: "How do I mark it complete?", a: "Simply tap the habit on your list to toggle its completion status for the current day." },
                { q: "Can I delete a habit?", a: "Yes, you can long-press or tap the trash icon next to a habit to remove it completely from your app." },
            ]
        },
        {
            title: "Data & Tracking",
            items: [
                { q: "When does the day reset?", a: "The App handles the daily reset at midnight according to your device's local time." },
                { q: "How is consistency tracked?", a: "We show a minimal 7-day grid that visualizes your check-ins over the past week for each habit. There are no complex charts or analytics." },
            ]
        },
        {
            title: "Troubleshooting",
            items: [
                { q: "My data disappeared!", a: "Since data is stored locally, clearing your app cache or uninstalling the app will remove your habits. We cannot recover this data for you as we don't store it." },
                { q: "The app is crashing.", a: "Ensure you are on the latest OS release. If the problem persists, please contact support." },
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-16">
                        <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">Help Center.</h1>
                        <p className="text-zinc-500 max-w-lg leading-relaxed">
                            Find answers to common questions about using Tiny Habits.
                            If you can't find what you're looking for, feel free to contact us.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">{section.title}</h2>
                                <div className="grid gap-8">
                                    {section.items.map((item, i) => (
                                        <div key={i}>
                                            <h3 className="text-zinc-200 font-semibold mb-2">{item.q}</h3>
                                            <p className="text-zinc-500 text-sm leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-primary/10 border border-primary/20 rounded-[40px] text-center">
                        <h3 className="text-white font-bold text-xl mb-4">Still need help?</h3>
                        <p className="text-zinc-400 mb-8 text-sm">Our team is happy to answer any of your questions.</p>
                        <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
