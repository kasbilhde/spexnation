"use client";

import Link from "next/link";

/* ─── TOC ────────────────────────────────────────────── */
const sections = [
    { id: "14-day-returns", label: "14 Day Returns" },
    { id: "prescription-lenses", label: "Prescription Lenses" },
    { id: "return-shipping", label: "Return Shipping" },
    { id: "how-to-return", label: "How to Start a Return" },
];

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-5">
            <h2 className="text-lg font-bold uppercase tracking-widest text-black">{title}</h2>
        </div>
    );
}

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

/* ─── PAGE ───────────────────────────────────────────── */
export default function Returns() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── PAGE HEADER ──────────────────────────── */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                    <p className="text-xs tracking-[0.35em] uppercase sCl font-semibold mb-4">Orders &amp; Support</p>
                    <h1
                        className="font-bold uppercase leading-none text-white mb-5"
                        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
                    >
                        Returns<br />Policy
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        At Spexnation, every pair of prescription glasses is made specifically for your order. For this
                        reason, our returns policy differs between frames and prescription lenses.
                    </p>
                </div>
            </section>


            {/* ── AT A GLANCE STRIP ────────────────────── */}
            <div className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 divide-x divide-gray-100">
                        <div className="py-8 px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="w-11 h-11 bg-yellow-600 flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest text-black">Frames</p>
                                <p className="text-xs text-gray-500 mt-0.5">14-day returns accepted</p>
                            </div>
                        </div>
                        <div className="py-8 px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="w-11 h-11 bg-yellow-600 border border-gray-200 flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 text-gray-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest text-black">Prescription Lenses</p>
                                <p className="text-xs text-gray-500 mt-0.5">Custom made — not returnable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MAIN CONTENT ─────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Sticky TOC */}
                <aside className="lg:w-64 flex-shrink-0">
                    <div className="lg:sticky lg:top-8">
                        <p className="text-xs font-bold tracking-widest uppercase text-black mb-5 pb-3 border-b border-gray-100">
                            Contents
                        </p>
                        <nav className="flex flex-col gap-1 mb-8">
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

                        {/* Start return box */}
                        <div className="bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Start a Return</p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                Have your order number ready and contact our support team to begin.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-yellow-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-gray-800 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-12">

                        {/* 01 — 14 Day Returns */}
                        <section id="14-day-returns" className="scroll-mt-8">
                            <SectionHeading number="01" title="14 Day Returns" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                                    <div className="flex-shrink-0 bg-yellow-600 text-white px-6 py-5 flex flex-col items-center gap-1 self-start min-w-[88px]">
                                        <span className="text-2xl font-bold leading-none">14</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-100 font-medium text-center">Day Returns</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                                        If you change your mind, you may return frames within <strong className="text-black font-semibold">14 days</strong> of receiving your order.
                                    </p>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    To be eligible for a return, frames must be:
                                </p>
                                <ul className="space-y-3">
                                    <CheckItem text="Unused" />
                                    <CheckItem text="In their original condition" />
                                    <CheckItem text="Returned with the original case and packaging" />
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Prescription Lenses */}
                        <section id="prescription-lenses" className="scroll-mt-8">
                            <SectionHeading number="02" title="Prescription Lenses" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <div className="bg-gray-50 border-l-4 border-yellow-600 px-5 py-4">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        Prescription lenses are custom made to your prescription and therefore <strong className="text-black">cannot be returned or refunded</strong>.
                                    </p>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Please ensure your prescription details are entered correctly when placing your order.
                                </p>
                                <Link
                                    href="/prescriptiondisclaimer"
                                    className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-600 underline underline-offset-2 hover:no-underline transition-all"
                                >
                                    View our Prescription Disclaimer
                                    <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Return Shipping */}
                        <section id="return-shipping" className="scroll-mt-8">
                            <SectionHeading number="03" title="Return Shipping" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Customers are responsible for the cost of return shipping.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                                    <div className="bg-white p-6 flex flex-col gap-3">
                                        <div className="w-9 h-9 bg-yellow-600 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black">Use a Tracked Service</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            We recommend using a tracked delivery service to ensure the item arrives safely.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 flex flex-col gap-3">
                                        <div className="w-9 h-9 bg-yellow-600 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black">Shipping Cost</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            Return shipping costs are the responsibility of the customer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — How to Start a Return */}
                        <section id="how-to-return" className="scroll-mt-8">
                            <SectionHeading number="04" title="How to Start a Return" />
                            <div className="border-t border-gray-100 pt-6 space-y-5">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To arrange a return, please contact our support team with your order number and details of the item you wish to return. Our team will provide instructions on how to return your item.
                                </p>

                                {/* Steps */}
                                <div className="grid sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
                                    {[
                                        {
                                            step: "01",
                                            label: "Contact Support",
                                            desc: "Get in touch with your order number and return details.",
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            step: "02",
                                            label: "Receive Instructions",
                                            desc: "Our team will send you return instructions.",
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            step: "03",
                                            label: "Send Item Back",
                                            desc: "Pack securely and ship using a tracked service.",
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                                </svg>
                                            ),
                                        },
                                    ].map((item) => (
                                        <div key={item.step} className="bg-white p-6 flex flex-col gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 bg-yellow-600 flex items-center justify-center text-white flex-shrink-0">
                                                    {item.icon}
                                                </div>
                                                <span className="text-[12px] font-bold tracking-widest uppercase text-gray-600">{item.step}</span>
                                            </div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-black">{item.label}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* CTA Banner */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Ready to start a return?</p>
                                <p className="text-gray-100 text-sm">Contact our team with your order number and we'll take it from there.</p>
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