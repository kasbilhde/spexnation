"use client";

import Link from "next/link";

/* ─── TOC sections ───────────────────────────────────── */
const sections = [
    { id: "what-are-cookies", label: "What Are Cookies" },
    { id: "how-we-use", label: "How We Use Cookies" },
    { id: "types", label: "Types of Cookies We Use" },
    { id: "managing", label: "Managing Cookies" },
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

function CookieTypeCard({ icon, title, description, items, note }) {
    return (
        <div className="border border-gray-100 bg-gray-50 p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-600 flex items-center justify-center flex-shrink-0 text-white">
                    {icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-black">{title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
            {items && (
                <ul className="space-y-2">
                    {items.map((item) => <CheckItem key={item} text={item} />)}
                </ul>
            )}
            {note && (
                <p className="mt-4 text-gray-500 text-xs leading-relaxed italic border-t border-gray-200 pt-4">
                    {note}
                </p>
            )}
        </div>
    );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function CookiePolicy() {
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
                        Cookie<br />Policy
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        This Cookie Policy explains how Spexnation, operated by Spexnation Limited, uses cookies and
                        similar technologies when you visit our website.
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

                        {/* 01 — What Are Cookies */}
                        <section id="what-are-cookies" className="scroll-mt-8">
                            <SectionHeading number="01" title="What Are Cookies" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Cookies are small text files that are stored on your device when you visit a website. They
                                    help websites function properly and improve the user experience.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — How We Use Cookies */}
                        <section id="how-we-use" className="scroll-mt-8">
                            <SectionHeading number="02" title="How We Use Cookies" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    Spexnation uses cookies to:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Ensure the website functions correctly",
                                        "Remember your preferences",
                                        "Analyse how visitors use the website",
                                        "Improve our services and user experience",
                                    ].map((item) => <CheckItem key={item} text={item} />)}
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Types of Cookies */}
                        <section id="types" className="scroll-mt-8">
                            <SectionHeading number="03" title="Types of Cookies We Use" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="grid sm:grid-cols-1 gap-4">

                                    <CookieTypeCard
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                            </svg>
                                        }
                                        title="Essential Cookies"
                                        description="These cookies are necessary for the website to function properly. They enable core functionality such as:"
                                        items={[
                                            "Shopping cart features",
                                            "Secure checkout",
                                            "Website navigation",
                                        ]}
                                        note="Without these cookies, the website may not function correctly."
                                    />

                                    <CookieTypeCard
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                            </svg>
                                        }
                                        title="Analytics Cookies"
                                        description="Analytics cookies help us understand how visitors interact with our website. This information helps us improve the performance and usability of the website. These cookies may collect information such as:"
                                        items={[
                                            "Pages visited",
                                            "Time spent on the website",
                                            "Device and browser type",
                                        ]}
                                    />

                                    <CookieTypeCard
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        }
                                        title="Functional Cookies"
                                        description="Functional cookies allow the website to remember choices you make, such as preferences or settings, in order to provide a more personalised experience."
                                    />

                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — Managing Cookies */}
                        <section id="managing" className="scroll-mt-8">
                            <SectionHeading number="04" title="Managing Cookies" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    You can control or disable cookies through your browser settings.
                                </p>
                                <div className="bg-gray-50 border-l-4 border-yellow-600 px-5 py-4">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        Please note that disabling certain cookies may affect how the website functions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 05 — Changes to This Policy */}
                        <section id="changes" className="scroll-mt-8">
                            <SectionHeading number="05" title="Changes to This Policy" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We may update this Cookie Policy from time to time. Any changes will be posted on this page.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 06 — Contact */}
                        <section id="contact" className="scroll-mt-8">
                            <SectionHeading number="06" title="Contact" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    If you have questions about our use of cookies, please contact:{" "}
                                    <a
                                        href="mailto:contact@spexnation.co.uk"
                                        className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all"
                                    >
                                        contact@spexnation.co.uk
                                    </a>
                                </p>
                            </div>
                        </section>

                        {/* Contact CTA */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Questions about cookies?</p>
                                <p className="text-gray-100 text-sm">Our team is happy to help clarify how we use cookies.</p>
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