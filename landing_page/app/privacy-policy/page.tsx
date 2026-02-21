import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    const lastUpdated = "February 22, 2026";

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Privacy Policy</h1>
                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Last Updated: {lastUpdated}</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8 text-zinc-400">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p className="leading-relaxed">
                                Welcome to <strong>Tiny Habits</strong> ("the App," "we," "us," or "our"). We believe that your personal data is precisely that—personal. This Privacy Policy documents our comprehensive approach to data privacy, explaining the operational mechanics behind our "Privacy First" policy. We have engineered Tiny Habits explicitly to operate entirely locally on your device, ensuring complete data sovereignty.
                            </p>
                            <p className="leading-relaxed">
                                As you use Tiny Habits to track small daily actions and build consistency, it is imperative to understand what data is created, how it is managed, and, most importantly, our explicit commitment to non-collection. By design, we do not have access to your personal habits or your app usage telemetry. This document outlines these practices in detail.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. The "Privacy First" Architecture</h2>
                            <p className="leading-relaxed">
                                Unlike conventional productivity software that relies on cloud synchronization and centralized databases, Tiny Habits is built on the architectural principle of <strong>Local Sovereignty</strong>. This means the application functions entirely independently of any centralized infrastructure.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>No Account Creation:</strong> You are never required—or even able—to create an account, provide an email address, or authenticate via third-party Single Sign-On (SSO) services.</li>
                                <li><strong>Strict Local Storage:</strong> All of your habits, daily completion statuses, and consistency trends are stored exclusively within the secure internal sandbox of your device's operating system.</li>
                                <li><strong>No Cloud Infrastructure:</strong> Your data never exits your device. We do not maintain any cloud databases, nor do we employ intermediate servers to relay or process your personal productivity metrics.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Data We Exhaustively Do Not Collect</h2>
                            <p className="leading-relaxed">
                                For absolute clarity, we explicitly state that we do not collect, store, transmit, process, or share any of the following categories of information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Personal Identifiers:</strong> Names, email addresses, phone numbers, or physical addresses.</li>
                                <li><strong>Geolocation Data:</strong> GPS coordinates, IP addresses, or regional tracking markers.</li>
                                <li><strong>Usage Telemetry:</strong> Metadata regarding how frequently you open the app, which buttons you interact with, or session durations.</li>
                                <li><strong>Content Data:</strong> The actual text strings of the habits you input into the application.</li>
                                <li><strong>Device Fingerprints:</strong> Unique device identifiers, advertising IDs, or hardware specifications beyond what is required for basic local execution.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Integrations and Analytics</h2>
                            <p className="leading-relaxed">
                                To protect our users from unintended data leakage, Tiny Habits fundamentally abstains from integrating third-party analytics SDKs (such as Google Analytics, Firebase, or Mixpanel) and advertising networks. We reject the monetization of user telemetry.
                            </p>
                            <p className="leading-relaxed italic">
                                Important Notice: When you download or purchase Tiny Habits via platforms such as the Apple App Store or Google Play Store, those respective platforms may automatically collect crash logs and installation metrics. This collection is governed by Apple and Google's proprietary privacy policies, respectively. We encourage you to review your operating system's privacy settings to manage these store-level diagnostics.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention, Management, and Deletion</h2>
                            <p className="leading-relaxed">
                                Because your data remains confined to your hardware, data retention is entirely under your jurisdiction. You possess total autonomy over its lifecycle:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>In-App Deletion:</strong> Utilizing the "Reset All Data" function within the app's settings will execute a permanent deletion of all local storage blocks associated with Tiny Habits. This action is irreversible.</li>
                                <li><strong>Uninstallation:</strong> Removing the application from your device will systematically purge all app-associated files and data partitions, depending on your operating system's standard procedures. We hold no backups to restore this data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Security Measures</h2>
                            <p className="leading-relaxed">
                                By neutralizing the risk of data transit across the internet, the only vector for unauthorized data access is physical or localized compromise of your personal device. We highly recommend fortifying your device using inherent OS-level security measures, including biometric authentication (FaceID, TouchID) and robust passcodes, to ensure that the data within Tiny Habits remains confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Policy Modifications</h2>
                            <p className="leading-relaxed">
                                We may periodically revise this Privacy Policy to reflect substantive changes in our feature set, legal obligations, or technical architecture. However, our foundational commitment—providing a tool that operates entirely locally without data collection—will never be compromised. Any future updates will be clearly documented here, accompanied by a revision of the "Last Updated" date.
                            </p>
                        </section>

                        <section className="bg-zinc-900 p-8 rounded-3xl border border-white/5 mt-12">
                            <h2 className="text-xl font-bold text-white mb-4">8. Contact Information</h2>
                            <p className="text-sm leading-relaxed mb-4">
                                If you require further clarification regarding this Privacy Policy, or wish to discuss our approach to data sovereignty and digital minimalism, please direct your correspondence to our support team:
                            </p>
                            <p className="text-primary font-bold">support@tinyhabits.app</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
