"use client";

import Link from "next/link";

/* ─── TOC sections ───────────────────────────────────── */
const sections = [
    { id: "lens-thickness", label: "Lens Thickness" },
    { id: "protective-coatings", label: "Protective Coatings" },
    { id: "sun-light", label: "Sun & Light-Reactive Lenses" },
];

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-5">
            <h2 className="text-lg font-bold uppercase tracking-widest text-black">{title}</h2>
        </div>
    );
}

/* ─── Lens Thickness Card ────────────────────────────── */
function LensCard({ tag, rec, body, highlight }) {
    return (
        <div className={`border bg-white p-6 flex flex-col gap-3 ${highlight ? "border-yellow-600" : "border-gray-100"}`}>
            {highlight && (
                <span className="self-start text-[10px] font-bold tracking-widest uppercase bg-yellow-600 text-white px-2 py-0.5">
                    Popular
                </span>
            )}
            <h3 className="text-sm font-bold uppercase tracking-widest text-black">{tag}</h3>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{rec}</p>
            <div className="h-px bg-gray-100" />
            <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
        </div>
    );
}

/* ─── Coating Row ────────────────────────────────────── */
function CoatingRow({ icon, title, description }) {
    return (
        <div className="flex items-start gap-5 py-5 border-b border-gray-100 last:border-0">
            <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 flex items-center justify-center text-white">
                {icon}
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

/* ─── Sun Lens Card ──────────────────────────────────── */
function SunCard({ icon, title, description, badge }) {
    return (
        <div className="border border-gray-100 bg-white p-6 flex flex-col gap-3 group hover:border-yellow-600 transition-colors duration-200">
            <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-gray-50 group-hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center text-black group-hover:text-white">
                    {icon}
                </div>
                {badge && (
                    <span className="text-[10px] font-bold tracking-widest uppercase border border-yellow-600 text-yellow-600 px-2 py-0.5">
                        {badge}
                    </span>
                )}
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-black mt-1">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

/* ─── Icons ──────────────────────────────────────────── */
const icons = {
    shield: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    drop: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-6 5.686-6 10a6 6 0 0012 0c0-4.314-6-10-6-10z" />
        </svg>
    ),
    monitor: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
        </svg>
    ),
    ban: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
    ),
    sun: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    ),
    sparkle: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
    ),
    bolt: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
    ),
    eye: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    sunglasses: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 9s2-1 5-1 5 2 5 2 2-2 5-2 5 1 5 1v2s-1 4-5 4-5-4-5-4-1 4-5 4-5-4-5-4V9z" />
        </svg>
    ),
};

/* ─── PAGE ───────────────────────────────────────────── */
export default function LensGuide() {
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
                        Lens &amp;<br />Coatings Guide
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        Choosing the right lenses can improve the comfort, appearance, and performance of your
                        glasses. Below is a guide to the lens options available at Spexnation to help you
                        understand the differences.
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

                        {/* Quick tip box */}
                        <div className="mt-8 bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Not sure which lens?</p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                Our team can help you choose the right lens for your prescription and lifestyle.
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

                        {/* 01 — Lens Thickness */}
                        <section id="lens-thickness" className="scroll-mt-8">
                            <SectionHeading number="01" title="Lens Thickness" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    Lens thickness depends on your prescription strength. Thinner lenses can improve the
                                    appearance and weight of your glasses, particularly for stronger prescriptions.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
                                    <LensCard
                                        tag="Standard Lenses"
                                        rec="Up to ±3.50"
                                        body="Standard lenses provide a durable and affordable option for everyday wear. For stronger prescriptions, lenses can appear thicker at the edges, so many customers choose thinner lenses for improved appearance and comfort."
                                    />
                                    <LensCard
                                        tag="1.6 Index"
                                        rec="Above ±3.50"
                                        highlight
                                        body="Up to 25% thinner and lighter than standard lenses, helping reduce lens edge thickness and improve the overall appearance of your glasses."
                                    />
                                    <LensCard
                                        tag="1.67 Index"
                                        rec="Above ±5.00"
                                        body="Up to 40% thinner and lighter than standard lenses, making them ideal for stronger prescriptions where reducing lens thickness improves comfort and appearance."
                                    />
                                </div>

                                {/* Thickness visual indicator */}
                                <div className="mt-6 bg-gray-50 border border-gray-100 px-6 py-5">
                                    <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">Relative Thickness</p>
                                    <div className="flex flex-col gap-3">
                                        {[
                                            { label: "Standard", width: "100%", pct: "Standard" },
                                            { label: "1.6 Index", width: "75%", pct: "~25% thinner" },
                                            { label: "1.67 Index", width: "60%", pct: "~40% thinner" },
                                        ].map((row) => (
                                            <div key={row.label} className="flex items-center gap-4">
                                                <span className="text-xs text-gray-500 w-20 flex-shrink-0 font-medium">{row.label}</span>
                                                <div className="flex-1 bg-gray-200 h-3">
                                                    <div className="h-3 bg-yellow-600 transition-all" style={{ width: row.width }} />
                                                </div>
                                                <span className="text-xs text-gray-400 w-24 text-right flex-shrink-0">{row.pct}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Protective Coatings */}
                        <section id="protective-coatings" className="scroll-mt-8">
                            <SectionHeading number="02" title="Protective Coatings" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Protective coatings improve lens performance by reducing glare and making lenses easier to keep clean.
                                </p>
                                <div className="divide-y divide-gray-100 border border-gray-100">
                                    <div className="px-6">
                                        <CoatingRow
                                            icon={icons.shield}
                                            title="Anti-Glare"
                                            description="Reduces reflections and glare from lights and screens, providing clearer and more comfortable vision."
                                        />
                                        <CoatingRow
                                            icon={icons.drop}
                                            title="Hydrophobic Anti-Glare"
                                            description="A premium anti-glare coating that includes a water- and oil-repellent layer, helping lenses stay cleaner and reducing smudges."
                                        />
                                        <CoatingRow
                                            icon={icons.monitor}
                                            title="Hydrophobic Anti-Glare with Blue Light Filter"
                                            description="Includes anti-glare and hydrophobic coatings while also helping reduce blue light from digital screens, improving comfort during extended computer or device use."
                                        />
                                        <CoatingRow
                                            icon={icons.ban}
                                            title="No Coating"
                                            description="Basic lenses with no additional protective treatment."
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Sun & Light-Reactive Lenses */}
                        <section id="sun-light" className="scroll-mt-8">
                            <SectionHeading number="03" title="Sun & Light-Reactive Lenses" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                    These options change how your lenses perform in sunlight.
                                </p>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
                                    <SunCard
                                        icon={icons.eye}
                                        title="Clear"
                                        description="Standard clear lenses with no tint or light-reactive technology."
                                    />
                                    <SunCard
                                        icon={icons.sun}
                                        title="Photochromic Lenses"
                                        description="Light-reactive lenses that darken in sunlight and return clear indoors, providing convenient everyday sun protection."
                                    />
                                    <SunCard
                                        icon={icons.sparkle}
                                        title="Transitions® GEN S"
                                        badge="Premium"
                                        description="Premium photochromic lenses that react quickly to changing light conditions, darkening outdoors and returning clear indoors."
                                    />
                                    <SunCard
                                        icon={icons.bolt}
                                        title="Transitions® XTRActive®"
                                        badge="Extra Dark"
                                        description="Extra-dark photochromic lenses designed for stronger sunlight protection, with activation even behind car windscreens."
                                    />
                                    <SunCard
                                        icon={icons.sunglasses}
                                        title="Sunglasses"
                                        description="Fixed-colour tinted lenses designed to provide a stylish sun-ready look and comfortable vision outdoors."
                                    />
                                </div>
                            </div>
                        </section>

                        {/* CTA Banner */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Ready to order?</p>
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