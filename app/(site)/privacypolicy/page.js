"use client";

import Link from "next/link";

/* ─── TOC sections ───────────────────────────────────── */
const sections = [
    { id: "company", label: "Company Information" },
    { id: "information-we-collect", label: "Information We Collect" },
    { id: "how-we-use", label: "How We Use Your Information" },
    { id: "payment", label: "Payment Information" },
    { id: "prescription-data", label: "Prescription Data" },
    { id: "cookies", label: "Cookies" },
    { id: "data-sharing", label: "Data Sharing" },
    { id: "data-security", label: "Data Security" },
    { id: "your-rights", label: "Your Rights" },
    { id: "changes", label: "Changes to This Policy" },
    { id: "contact", label: "Contact" },
];

function CheckItem({ text }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 w-4 h-4 bg-yellow-600 flex items-center justify-center">
                <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                    <path d="M2 5.5L4 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <span className="text-gray-600 text-sm leading-relaxed">{text}</span>
        </li>
    );
}

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-5">
            <h2 className="text-lg font-bold uppercase tracking-widest text-black">{title}</h2>
        </div>
    );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── PAGE HEADER ──────────────────────────── */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                    <p className="text-xs tracking-[0.35em] uppercase sCl font-semibold mb-4">Legal</p>
                    <h1
                        className="font-bold uppercase leading-none text-white mb-5"
                        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
                    >
                        Privacy<br />Policy
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        This Privacy Policy explains how Spexnation, operated by Spexnation Limited, collects, uses,
                        and protects your personal information when you use our website.
                    </p>
                </div>
            </section>

            {/* ── MAIN CONTENT ─────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Sticky Table of Contents */}
                <aside className="lg:w-64 flex-shrink-0">
                    <div className="lg:sticky lg:top-8">
                        <p className="text-xs font-bold tracking-widest uppercase text-black mb-5 pb-3 border-b border-gray-100">
                            Contents
                        </p>
                        <nav className="flex flex-col gap-1">
                            {sections.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="text-xs text-gray-500 hover:text-black transition-colors py-1.5 tracking-wide border-l-2 border-transparent hover:border-black pl-3 font-medium"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Policy content */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-12">

                        {/* 01 — Company Information */}
                        <section id="company" className="scroll-mt-8">
                            <SectionHeading number="01" title="Company Information" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">Spexnation is operated by:</p>
                                <div className="bg-gray-50 border border-gray-100 px-6 py-5 text-sm text-gray-700 leading-relaxed">
                                    <p className="font-bold text-black mb-1">Spexnation Limited</p>
                                    <p>228 Walmersley Road</p>
                                    <p>Bury</p>
                                    <p>BL9 6NH</p>
                                    <p>United Kingdom</p>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mt-5">
                                    If you have any questions about this Privacy Policy, you can contact us at:{" "}
                                    <a href="mailto:contact@spexnation.co.uk" className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all">
                                        contact@spexnation.co.uk
                                    </a>
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Information We Collect */}
                        <section id="information-we-collect" className="scroll-mt-8">
                            <SectionHeading number="02" title="Information We Collect" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    When you use our website or place an order, we may collect the following information:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Name",
                                        "Email address",
                                        "Billing and delivery address",
                                        "Phone number",
                                        "Prescription details required for the manufacture of glasses",
                                        "Payment information",
                                        "IP address and browser information",
                                        "Cookies and website usage data",
                                    ].map((item) => <CheckItem key={item} text={item} />)}
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — How We Use Your Information */}
                        <section id="how-we-use" className="scroll-mt-8">
                            <SectionHeading number="03" title="How We Use Your Information" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    We use the information we collect to:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Process and fulfil orders",
                                        "Manufacture prescription eyewear",
                                        "Provide customer support",
                                        "Communicate with you regarding your order",
                                        "Improve our website and services",
                                        "Prevent fraud and maintain website security",
                                    ].map((item) => <CheckItem key={item} text={item} />)}
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — Payment Information */}
                        <section id="payment" className="scroll-mt-8">
                            <SectionHeading number="04" title="Payment Information" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Payments are processed securely through third-party payment providers.
                                </p>
                                <div className="bg-gray-50 border-l-4 border-yellow-600 px-5 py-4">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        Spexnation does not store your full payment card details on our servers.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 05 — Prescription Data */}
                        <section id="prescription-data" className="scroll-mt-8">
                            <SectionHeading number="05" title="Prescription Data" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Prescription information is collected solely for the purpose of manufacturing prescription eyewear.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    This information is handled securely and only shared where necessary to fulfil your order.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 06 — Cookies */}
                        <section id="cookies" className="scroll-mt-8">
                            <SectionHeading number="06" title="Cookies" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our website uses cookies and similar technologies to improve functionality and analyse website usage.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Cookies help us understand how visitors use our website so that we can improve the user experience.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    You may disable cookies through your browser settings if you prefer.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Further details can be found in our{" "}
                                    <Link href="/cookiepolicy" className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all">
                                        Cookie Policy
                                    </Link>.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 07 — Data Sharing */}
                        <section id="data-sharing" className="scroll-mt-8">
                            <SectionHeading number="07" title="Data Sharing" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    We may share necessary information with trusted third parties in order to operate our business, including:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Payment processors",
                                        "Delivery providers",
                                        "Optical laboratories responsible for manufacturing lenses",
                                        "Website hosting providers",
                                    ].map((item) => <CheckItem key={item} text={item} />)}
                                </ul>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    These third parties only receive the information required to perform their services.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 08 — Data Security */}
                        <section id="data-security" className="scroll-mt-8">
                            <SectionHeading number="08" title="Data Security" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We take appropriate security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 09 — Your Rights */}
                        <section id="your-rights" className="scroll-mt-8">
                            <SectionHeading number="09" title="Your Rights" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    Under UK data protection law, you have the right to:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "Request access to your personal data",
                                        "Request correction of inaccurate data",
                                        "Request deletion of your personal data where appropriate",
                                        "Object to certain uses of your personal data",
                                    ].map((item) => <CheckItem key={item} text={item} />)}
                                </ul>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To exercise these rights, please contact us at:{" "}
                                    <a href="mailto:contact@spexnation.co.uk" className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all">
                                        contact@spexnation.co.uk
                                    </a>
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 10 — Changes to This Policy */}
                        <section id="changes" className="scroll-mt-8">
                            <SectionHeading number="10" title="Changes to This Policy" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 11 — Contact */}
                        <section id="contact" className="scroll-mt-8">
                            <SectionHeading number="11" title="Contact" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    If you have questions about this Privacy Policy or how we handle your data, please contact:{" "}
                                    <a href="mailto:contact@spexnation.co.uk" className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all">
                                        contact@spexnation.co.uk
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Contact CTA */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Questions about your data?</p>
                                <p className="text-gray-100 text-sm">Our team is here to help with any privacy queries.</p>
                            </div>
                            <Link
                                href="/contact"
                                className="flex-shrink-0 bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}