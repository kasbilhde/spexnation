"use client";

import Link from "next/link";

/* ─── TOC ────────────────────────────────────────────── */
const sections = [
    { id: "custom-made", label: "Custom Made to Order" },
    { id: "free-delivery", label: "Free Delivery" },
    { id: "delivery-time", label: "Delivery Time" },
    { id: "possible-delays", label: "Possible Delays" },
];

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-5">
            <h2 className="text-lg font-bold uppercase tracking-widest text-black">{title}</h2>
        </div>
    );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function DeliveryInformation() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── PAGE HEADER ──────────────────────────── */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                    <p className="text-xs tracking-[0.35em] uppercase sCl font-semibold mb-4">Orders &amp; Shipping</p>
                    <h1
                        className="font-bold uppercase leading-none text-white mb-5"
                        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
                    >
                        Delivery<br />Information
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        At Spexnation, all glasses are custom made to your prescription. Each pair is carefully
                        manufactured and checked before being dispatched to ensure the highest quality.
                    </p>
                </div>
            </section>

            {/* ── KEY STATS STRIP ──────────────────────── */}
            <div className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-100">
                        {[
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                ),
                                value: "FREE",
                                label: "Delivery on all orders",
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                value: "10–14",
                                label: "Working days delivery",
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                value: "100%",
                                label: "Quality checked before dispatch",
                            },
                        ].map((stat) => (
                            <div key={stat.label} className="py-8 px-6 flex flex-col items-center text-center gap-2">
                                <div className="text-black mb-1">{stat.icon}</div>
                                <p className="text-2xl md:text-3xl font-bold text-black tracking-tight">{stat.value}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</p>
                            </div>
                        ))}
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

                        {/* Help box */}
                        <div className="bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Order Query?</p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                If you have a question about your delivery, get in touch with our team.
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

                {/* Page content */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-14">

                        {/* 01 — Custom Made to Order */}
                        <section id="custom-made" className="scroll-mt-8">
                            <SectionHeading title="Custom Made to Order" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    At Spexnation, all glasses are custom made to your prescription. Each pair is carefully
                                    manufactured and checked before being dispatched to ensure the highest quality.
                                </p>

                                {/* Process steps */}
                                <div className="grid sm:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
                                    {[
                                        {
                                            step: "01",
                                            label: "Order Placed",
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            step: "02",
                                            label: "Lens Production",
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            step: "03",
                                            label: "Quality Check",
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            step: "04",
                                            label: "Dispatched",
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                                </svg>
                                            ),
                                        },
                                    ].map((item, idx, arr) => (
                                        <div key={item.step} className="bg-white p-6 flex flex-col items-center text-center gap-3 relative">
                                            <div className="w-10 h-10 bg-yellow-600 flex items-center justify-center text-white">
                                                {item.icon}
                                            </div>
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">{item.step}</span>
                                            <p className="text-xs font-bold uppercase tracking-wide text-black">{item.label}</p>
                                            {idx < arr.length - 1 && (
                                                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-4 h-4 bg-white border border-gray-100 flex items-center justify-center">
                                                    <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2">
                                                        <path d="M1 4h6M4 1l3 3-3 3" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Free Delivery */}
                        <section id="free-delivery" className="scroll-mt-8">
                            <SectionHeading title="Free Delivery" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 bg-yellow-600 text-white px-6 py-5 flex flex-col items-center gap-1 self-start">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                        </svg>
                                        <span className="text-lg font-bold mt-1">FREE</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-100 font-medium">Delivery</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                                        We offer free delivery on all glasses orders. There are no hidden delivery charges — the price you see is the price you pay.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Delivery Time */}
                        <section id="delivery-time" className="scroll-mt-8">
                            <SectionHeading number="03" title="Delivery Time" />
                            <div className="border-t border-gray-100 pt-6 space-y-6">
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0 bg-yellow-600 text-white px-6 py-5 flex flex-col items-center gap-1 self-start min-w-[96px]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-lg font-bold mt-1 leading-none">10–14</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-300 font-medium text-center">Working Days</span>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Most orders are delivered within <strong className="text-black font-semibold">10–14 working days</strong>.
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            As your glasses are made specifically for your prescription, time is required for lens production,
                                            fitting, and final quality checks before dispatch.
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline bar */}
                                <div className="bg-gray-50 border border-gray-100 px-6 py-5">
                                    <p className="text-xs font-bold uppercase tracking-widest text-black mb-5">Typical Order Timeline</p>
                                    <div className="relative">
                                        {/* Track */}
                                        <div className="h-1.5 bg-gray-200 rounded-full mb-6" />
                                        {/* Progress fill */}
                                        <div className="absolute top-0 left-0 h-1.5 bg-black rounded-full" style={{ width: "100%" }} />
                                        {/* Milestones */}
                                        <div className="flex justify-between">
                                            {[
                                                { day: "Day 1", label: "Order Confirmed" },
                                                { day: "Day 2–3", label: "Lens Production" },
                                                { day: "Day 8–10", label: "Quality Check" },
                                                { day: "Day 10–14", label: "Delivered" },
                                            ].map((m) => (
                                                <div key={m.day} className="flex flex-col items-center gap-1 text-center max-w-[60px]">
                                                    <div className="w-2.5 h-2.5 bg-black rounded-full -mt-[26px] mb-1" />
                                                    <span className="text-[9px] font-bold text-black uppercase tracking-wide">{m.day}</span>
                                                    <span className="text-[9px] text-gray-400 leading-tight">{m.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — Possible Delays */}
                        <section id="possible-delays" className="scroll-mt-8">
                            <SectionHeading number="04" title="Possible Delays" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    While most orders arrive within the estimated timeframe, some prescriptions or lens
                                    customisations may require additional time to manufacture. During busy periods, delivery
                                    times may also be slightly longer.
                                </p>
                                <div className="bg-gray-50 border-l-4 border-black px-5 py-4">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        If you have any concerns about your order, please don't hesitate to contact our team.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Banner */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Have a question about your order?</p>
                                <p className="text-gray-100 text-sm">Our team is happy to help with any delivery queries.</p>
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