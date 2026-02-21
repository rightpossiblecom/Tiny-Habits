export default function Features() {
    const features = [
        {
            title: "Add Habit",
            description: "Easily add small habits to your daily list. Limit them to keep it minimal.",
            icon: "➕",
        },
        {
            title: "Tap to Mark Done",
            description: "No complicated workflows, just tap when you complete the habit.",
            icon: "✅",
        },
        {
            title: "Simple Weekly Grid",
            description: "View your consistency with an easy-to-read 7-day grid.",
            icon: "📅",
        },
        {
            title: "Local Storage Only",
            description: "Your data is yours. Everything stays purely on your device.",
            icon: "🔒",
        },
        {
            title: "Extreme Simplicity",
            description: "No charts, no percentages, no anxiety-inducing analytics.",
            icon: "🧘",
        },
        {
            title: "No Coaching",
            description: "We don't tell you what to do. You set your own tiny goals and we track them.",
            icon: "🛑",
        },
    ];

    return (
        <section id="features" className="py-24 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Small actions. <br />
                        <span className="text-zinc-500">Big consistency.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-zinc-400">
                        Tiny Habits is built on the philosophy that progress is made one tiny step at a time.
                        We removed everything that gets in the way of your daily focus.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
