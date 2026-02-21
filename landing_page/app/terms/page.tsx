import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsOfService() {
    const effectiveDate = "February 22, 2026";

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Terms of Service</h1>
                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Effective Date: {effectiveDate}</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8 text-zinc-400">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed">
                                These Terms of Service ("Terms") constitute a legally binding agreement between you and the developers of <strong>Tiny Habits</strong> ("the App," "we," "us," or "our"). By downloading, installing, accessing, or using the App, you expressly agree to be bound by these Terms. If you do not agree to all of the terms and conditions outlined herein, you are expressly prohibited from using the App and must discontinue use and uninstall it immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                            <p className="leading-relaxed">
                                Tiny Habits is a minimalist utility software intended to assist users in tracking small, consistent daily actions. The software provides an interface for logging habits and visualizing consistency over a 7-day period.
                            </p>
                            <p className="leading-relaxed">
                                <strong>Important Disclaimer:</strong> Tiny Habits is not a medical device, nor is it a clinical health or therapeutic tool. We do not provide coaching, medical advice, behavioral therapy, or scientifically guaranteed productivity systems. The App purely functions as a digital ledger for self-reported actions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Local Architecture and User Responsibilities</h2>
                            <p className="leading-relaxed">
                                The App operates entirely offline and locally on your device hardware. This structural choice assigns specific responsibilities to the user:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Data Management and Loss:</strong> All data, including habits and grid consistency, is stored locally in your device's sandbox. We do not synchronize, back up, or host your data on external servers. Consequently, uninstalling the App, restoring your device, or suffering hardware damage will result in the permanent, irrecoverable loss of this data. We bear no liability for data loss.</li>
                                <li><strong>Device Security:</strong> You are responsible for safeguarding physical access to your device. Any unauthorized access to your device could result in unauthorized viewing of your local data within the App.</li>
                                <li><strong>Lawful Use:</strong> The App is provided strictly for personal, non-commercial utilization. You agree not to use the App for any malicious, illegal, or unauthorized purposes that violate the laws of your jurisdiction.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                            <p className="leading-relaxed">
                                The App, including but not limited to its visual design, user interface, source code, logos, trademarks, and all other original assets, is the exclusive intellectual property of the developers of Tiny Habits and is protected by applicable domestic and international copyright, trademark, and intellectual property laws.
                            </p>
                            <p className="leading-relaxed">
                                We grant you a limited, non-exclusive, non-transferable, and revocable license to use the App for its intended consumer purpose. You are explicitly forbidden from reproducing, modifying, distributing, reverse engineering, decompiling, or attempting to discover the source code of the App without our express written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
                            <p className="bg-zinc-900 p-6 rounded-2xl border border-white/10 italic text-sm">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APP IS PROVIDED ENTIRELY ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL FUNCTION UNINTERRUPTED, WILL BE FREE OF SOFTWARE BUGS OR ERRORS, OR WILL MEET YOUR SPECIFIC PRODUCTIVITY OR CONSISTENCY EXPECTATIONS.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                In no event shall the developers of Tiny Habits, their affiliates, or agents be liable for any direct, indirect, incidental, special, consequential, or exemplary damages—including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses—resulting from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your use of or inability to use the App.</li>
                                <li>Any loss of data stemming from uninstallation, device malfunction, or OS upgrades.</li>
                                <li>Unauthorized access to or alteration of your local data.</li>
                                <li>Any other matter relating to the service.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Modifications and Termination</h2>
                            <p className="leading-relaxed">
                                We reserve the unilateral right to modify, suspend, or discontinue the App or any portion of its services at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuance. These Terms are effective until terminated by either you or us. You may terminate these Terms by permanently deleting the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                            <p className="leading-relaxed">
                                These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the prevailing laws of your jurisdiction, strictly ignoring conflicts of law provisions.
                            </p>
                        </section>

                        <section className="bg-zinc-900 p-8 rounded-3xl border border-white/5 mt-12">
                            <h2 className="text-xl font-bold text-white mb-4">9. Contact Information</h2>
                            <p className="text-sm leading-relaxed mb-4">
                                If you require any clarification regarding these Terms of Service or have other legal inquiries, please contact us at:
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
