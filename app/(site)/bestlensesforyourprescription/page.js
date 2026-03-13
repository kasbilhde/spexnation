"use client";

import Link from "next/link";

/* ─── TOC ────────────────────────────────────────────── */
const sections = [
    { id: "overview", label: "Overview" },
    { id: "standard", label: "Standard Lenses" },
    { id: "1-6-index", label: "1.6 Index Lenses" },
    { id: "1-67-index", label: "1.67 Index Lenses" },
    { id: "frame-choice", label: "Frame Choice & Lens Thickness" },
    { id: "combination", label: "Choosing the Right Combination" },
];

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-5">
            <h2 className="text-lg font-bold uppercase tracking-widest text-black">{title}</h2>
        </div>
    );
}

/* ─── Lens comparison cards ──────────────────────────── */
const lenses = [
    {
        id: "standard",
        index: "Standard",
        range: "Up to ±3.50",
        thinner: null,
        highlight: false,
        body: "Standard lenses provide a durable and affordable option for everyday wear. For stronger prescriptions, lenses can appear thicker at the edges, so many customers choose a thinner lens option for improved appearance and comfort.",
        barWidth: "100%",
        barLabel: "Standard thickness",
    },
    {
        id: "1-6-index",
        index: "1.6 Index",
        range: "Above ±3.50",
        thinner: "25% thinner",
        highlight: true,
        body: "Up to 25% thinner and lighter than standard lenses, helping to reduce lens edge thickness and improve the overall appearance of your glasses. Many customers choose this option for a slimmer, more comfortable pair of glasses, especially with medium prescriptions.",
        barWidth: "75%",
        barLabel: "~25% thinner",
    },
    {
        id: "1-67-index",
        index: "1.67 Index",
        range: "Above ±5.00",
        thinner: "40% thinner",
        highlight: false,
        body: "Up to 40% thinner and lighter than standard lenses, helping to significantly reduce lens edge thickness. This option is ideal for stronger prescriptions and can help improve the overall cosmetic appearance of your glasses by reducing the thick edge effect often seen with high prescriptions.",
        barWidth: "60%",
        barLabel: "~40% thinner",
    },
];

/* ─── Frame tip card ─────────────────────────────────── */
function FrameTipCard({ icon, title, body }) {
    return (
        <div className="border border-gray-100 bg-white p-6 flex flex-col gap-4">
            <div className="w-10 h-10 bg-yellow-600 flex items-center justify-center text-white flex-shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
        </div>
    );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function BestLensesForPrescription() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── PAGE HEADER ──────────────────────────── */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                    <p className="text-xs tracking-[0.35em] uppercase sCl font-semibold mb-4">Help &amp; Advice</p>
                    <h1
                        className="font-bold uppercase leading-none text-white mb-5"
                        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
                    >
                        Best Lenses for<br />Your Prescription
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        Choosing the right lens thickness can improve the appearance, comfort and weight of your
                        glasses. While all lens options provide clear vision, thinner lenses can help reduce edge
                        thickness, particularly for stronger prescriptions.
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

                        {/* Quick reference box */}
                        <div className="bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">Quick Reference</p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { label: "Up to ±3.50", lens: "Standard" },
                                    { label: "Above ±3.50", lens: "1.6 Index" },
                                    { label: "Above ±5.00", lens: "1.67 Index" },
                                ].map((row) => (
                                    <div key={row.label} className="flex items-center justify-between gap-2">
                                        <span className="text-xs text-gray-500 font-medium">{row.label}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-yellow-600 text-white px-2 py-0.5 flex-shrink-0">{row.lens}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5 bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Not sure?</p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                Our team can help you choose the right lens for your prescription.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-yellow-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-gray-800 transition-colors"
                            >
                                Ask Us
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Guide content */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-14">

                        {/* 01 — Overview */}
                        <section id="overview" className="scroll-mt-8">
                            <SectionHeading number="01" title="Overview" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    The recommendations below are general guidance to help you choose the most suitable option.
                                    All lens options provide clear vision — the key difference is how thick the lens appears,
                                    particularly at the edges.
                                </p>

                                {/* Thickness comparison chart */}
                                <div className="bg-gray-50 border border-gray-100 px-6 py-6">
                                    <p className="text-xs font-bold uppercase tracking-widest text-black mb-6">Lens Thickness Comparison</p>
                                    <div className="flex flex-col gap-5">
                                        {lenses.map((l) => (
                                            <div key={l.index} className="flex items-center gap-4">
                                                <div className="w-24 flex-shrink-0">
                                                    <p className="text-xs font-bold text-black">{l.index}</p>
                                                    <p className="text-[10px] text-gray-400 tracking-wide">{l.range}</p>
                                                </div>
                                                <div className="flex-1 bg-gray-200 h-4 relative">
                                                    <div
                                                        className="h-4 bg-yellow-600 transition-all"
                                                        style={{ width: l.barWidth }}
                                                    />
                                                </div>
                                                <span className="text-[10px] text-gray-500 w-24 text-right flex-shrink-0 font-medium">
                                                    {l.barLabel}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* Lens sections — loop */}
                        {lenses.map((l, i) => (
                            <section key={l.id} id={l.id} className="scroll-mt-8">
                                <SectionHeading number={`0${i + 2}`} title={`${l.index} Lenses`} />
                                <div className="border-t border-gray-100 pt-6">
                                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                                        {/* Prescription badge */}
                                        <div className={`flex-shrink-0 px-5 py-4 flex flex-col items-center justify-center gap-1 self-start min-w-[96px] ${l.highlight ? "bg-yellow-600 text-white" : "bg-gray-50 border border-gray-100 text-yellow-600"}`}>
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Rx Range</span>
                                            <span className="text-sm font-bold text-center leading-tight mt-1">{l.range}</span>
                                            {l.thinner && (
                                                <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider px-2 py-0.5 ${l.highlight ? "bg-white text-black" : "bg-yellow-600 text-white"}`}>
                                                    {l.thinner}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed pt-1">{l.body}</p>
                                    </div>
                                </div>

                                {i < lenses.length - 1 && <div className="h-px bg-gray-100 mt-14" />}
                            </section>
                        ))}

                        <div className="h-px bg-gray-100" />

                        {/* 05 — Frame Choice */}
                        <section id="frame-choice" className="scroll-mt-8">
                            <SectionHeading number="05" title="Frame Choice & Lens Thickness" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    The thickness of your lenses is influenced not only by your prescription, but also by the size
                                    and style of the frame you choose.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                                    <FrameTipCard
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                            </svg>
                                        }
                                        title="Frame Size"
                                        body="Larger frames can make lenses appear thicker at the edges, particularly for stronger prescriptions. Smaller frames often help reduce lens thickness and create a more balanced appearance."
                                    />
                                    <FrameTipCard
                                        icon={
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        }
                                        title="Frame Style"
                                        body="Full-rim plastic frames can help hide lens edges, making them a popular choice for stronger prescriptions. Metal frames and rimless styles may make thicker lenses more visible."
                                    />
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 06 — Choosing the Right Combination */}
                        <section id="combination" className="scroll-mt-8">
                            <SectionHeading number="06" title="Choosing the Right Combination" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="bg-gray-50 border-l-4 border-yellow-600 px-6 py-5">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        If you have a stronger prescription, choosing a thinner lens option together with an
                                        appropriately sized frame can significantly improve the overall look and comfort of your glasses.
                                    </p>
                                </div>

                                {/* Combination guide */}
                                <div className="mt-6 grid sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
                                    {[
                                        { rx: "Up to ±3.50", lens: "Standard Lenses", frame: "Any frame style", icon: "🟢" },
                                        { rx: "±3.50 – ±5.00", lens: "1.6 Index", frame: "Smaller frames preferred", icon: "🟡" },
                                        { rx: "Above ±5.00", lens: "1.67 Index", frame: "Full-rim plastic + small frame", icon: "🔴" },
                                    ].map((row) => (
                                        <div key={row.rx} className="bg-white p-5 flex flex-col gap-2">
                                            <p className="text-xs font-bold uppercase tracking-widest text-black">{row.rx}</p>
                                            <div className="h-px bg-gray-100 my-1" />
                                            <div className="flex items-start gap-2">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-black">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <p className="text-xs text-gray-600">{row.lens}</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-black">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <p className="text-xs text-gray-600">{row.frame}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* CTA Banner */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Ready to find your perfect pair?</p>
                                <p className="text-gray-100 text-sm">Browse our full range of frames and build your glasses today.</p>
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