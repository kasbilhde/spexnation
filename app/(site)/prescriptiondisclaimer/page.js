"use client";

import Link from "next/link";

/* ─── TOC ────────────────────────────────────────────── */
const sections = [
    { id: "valid-prescription", label: "Valid Prescription Requirement" },
    { id: "not-substitute", label: "Not a Substitute for Eye Examinations" },
    { id: "customer-responsibility", label: "Customer Responsibility" },
    { id: "limitations", label: "Limitations" },
    { id: "seek-advice", label: "Seek Professional Advice" },
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

function CrossItem({ text }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 w-4 h-4 bg-yellow-600 flex items-center justify-center">
                <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                    <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </span>
            <span className="text-gray-600 text-sm leading-relaxed">{text}</span>
        </li>
    );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function PrescriptionDisclaimer() {
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
                        Prescription<br />Disclaimer
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        Spexnation provides eyewear based on the prescription information supplied by the customer.
                        It is the customer's responsibility to ensure that the prescription details provided are accurate and current.
                    </p>
                </div>
            </section>


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

                        {/* Help box */}
                        <div className="bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Questions?</p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                If you're unsure about your prescription details, our team is happy to help.
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

                        {/* 01 — Valid Prescription Requirement */}
                        <section id="valid-prescription" className="scroll-mt-8">
                            <SectionHeading number="01" title="Valid Prescription Requirement" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Customers must ensure that they have a valid prescription issued by a qualified optometrist or medical professional.
                                </p>
                                <div className="bg-gray-50 border-l-4 border-yellow-600 px-5 py-4">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        Prescriptions should typically be no more than <strong className="text-yellow-600">24 months old</strong> unless otherwise advised by your eye care professional.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Not a Substitute */}
                        <section id="not-substitute" className="scroll-mt-8">
                            <SectionHeading number="02" title="Not a Substitute for Eye Examinations" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    The information provided on this website is for general informational purposes only.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                                    <div className="bg-white p-6 flex flex-col gap-3">
                                        <div className="w-9 h-9 bg-yellow-600 border border-gray-200 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 text-gray-100">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black">Online Purchase</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            Purchasing glasses online is <strong className="text-black">not</strong> a substitute for a professional eye examination.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 flex flex-col gap-3">
                                        <div className="w-9 h-9 bg-yellow-600 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black">Eye Examinations</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            Regular eye examinations are important for maintaining eye health.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Customer Responsibility */}
                        <section id="customer-responsibility" className="scroll-mt-8">
                            <SectionHeading number="03" title="Customer Responsibility" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    By placing an order with Spexnation, you confirm that:
                                </p>
                                <ul className="space-y-3">
                                    <CheckItem text="The prescription information you provide is accurate" />
                                    <CheckItem text="You understand that glasses are manufactured based on the details you submit" />
                                    <CheckItem text="You have consulted an eye care professional if you have concerns about your vision" />
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — Limitations */}
                        <section id="limitations" className="scroll-mt-8">
                            <SectionHeading number="04" title="Limitations" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    Spexnation cannot be held responsible for issues arising from:
                                </p>
                                <ul className="space-y-3">
                                    <CrossItem text="Incorrect prescription information entered during ordering" />
                                    <CrossItem text="Outdated prescriptions" />
                                    <CrossItem text="Glasses ordered that are unsuitable for specific visual tasks" />
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 05 — Seek Professional Advice */}
                        <section id="seek-advice" className="scroll-mt-8">
                            <SectionHeading title="Seek Professional Advice" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="bg-yellow-600 text-white px-6 py-6 flex gap-5">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6 flex-shrink-0 mt-0.5 text-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                    <p className="text-gray-100 text-sm leading-relaxed">
                                        If you experience problems with your vision, discomfort with glasses, or concerns about your eye health, you should consult a <strong className="text-white font-semibold">qualified optometrist or medical professional</strong>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Related links */}
                        <div className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                            {[
                                {
                                    label: "How to Read Your Prescription",
                                    desc: "Understand the terms on your prescription.",
                                    href: "/howtoreadyourprescription",
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "How to Measure Your PD",
                                    desc: "Find your pupillary distance at home.",
                                    href: "/howtomeasureyourpd",
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="bg-white p-6 flex items-start gap-4 group hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-9 h-9 bg-yellow-600 group-hover:bg-yellow-600 flex items-center justify-center text-black text-white transition-colors flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-black mb-1 group-hover:underline underline-offset-2">
                                            {item.label}
                                        </p>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Banner */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Ready to order your glasses?</p>
                                <p className="text-gray-100 text-sm">Browse our full range of frames and build your perfect pair.</p>
                            </div>
                            <Link
                                href="/shop"
                                className="flex-shrink-0 bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
                            >
                                Shop Now
                            </Link>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}