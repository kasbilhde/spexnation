"use client";

import Link from "next/link";

/* ─── TOC ────────────────────────────────────────────── */
const sections = [
    { id: "sphere", label: "Sphere (SPH)" },
    { id: "cylinder", label: "Cylinder (CYL)" },
    { id: "axis", label: "Axis" },
    { id: "pd", label: "Pupillary Distance (PD)" },
    { id: "example", label: "Example Prescription" },
    { id: "important", label: "Important" },
];

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-5">
            <h2 className="text-lg font-bold uppercase tracking-widest text-black">{title}</h2>
        </div>
    );
}

function ExampleBadge({ label }) {
    return (
        <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 px-5 py-3 mt-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Example</span>
            <div className="w-px h-4 bg-gray-200" />
            <span className="text-sm font-bold text-black font-mono tracking-widest">{label}</span>
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
export default function HowToReadPrescription() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── PAGE HEADER ──────────────────────────── */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                    <p className="text-xs tracking-[0.35em] uppercase text-gray-400 font-semibold mb-4">Help &amp; Advice</p>
                    <h1
                        className="font-bold uppercase leading-none text-white mb-5"
                        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
                    >
                        How to Read<br />Your Prescription
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        Your glasses prescription contains measurements that tell us how to manufacture lenses
                        that correct your vision. Below is a guide to help you understand the most common terms
                        you may see on your prescription.
                    </p>
                </div>
            </section>


            {/* ── TERMS AT A GLANCE STRIP ──────────────── */}
            <div className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
                        {[
                            { abbr: "SPH", full: "Sphere", desc: "Lens strength" },
                            { abbr: "CYL", full: "Cylinder", desc: "Astigmatism correction" },
                            { abbr: "AXIS", full: "Axis", desc: "Correction orientation" },
                            { abbr: "PD", full: "Pupillary Distance", desc: "Pupil alignment" },
                        ].map((t) => (
                            <div key={t.abbr} className="py-7 px-6 flex flex-col gap-1">
                                <span className="text-2xl font-bold text-black tracking-tight font-mono">{t.abbr}</span>
                                <span className="text-xs font-semibold text-black uppercase tracking-widest">{t.full}</span>
                                <span className="text-xs text-gray-400">{t.desc}</span>
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

                        {/* Tip box */}
                        <div className="bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Need Your PD?</p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                If your PD isn't on your prescription, learn how to measure it yourself.
                            </p>
                            <Link
                                href="/how-to-measure-pd"
                                className="inline-block bg-yellow-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-gray-800 transition-colors"
                            >
                                Measure Your PD
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-14">

                        {/* 01 — Sphere */}
                        <section id="sphere" className="scroll-mt-8">
                            <SectionHeading number="01" title="Sphere (SPH)" />
                            <div className="border-t border-gray-100 pt-6 space-y-5">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Sphere indicates the strength of the lens needed to correct your vision. It is measured in diopters (D).
                                </p>

                                {/* Minus / Plus cards */}
                                <div className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                                    <div className="bg-white p-6 flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 bg-yellow-600 text-white flex items-center justify-center text-lg font-bold leading-none">−</div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-black">Minus (−) Value</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            You are <strong className="text-yellow-600 font-semibold">short-sighted (myopic)</strong> and need help seeing distant objects clearly.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 bg-yellow-600 text-white flex items-center justify-center text-lg font-bold leading-none">+</div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-black">Plus (+) Value</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            You are <strong className="text-yellow-600 font-semibold">long-sighted (hyperopic)</strong> and need help focusing on nearby objects.
                                        </p>
                                    </div>
                                </div>

                                <ExampleBadge label="SPH  −2.00" />
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Cylinder */}
                        <section id="cylinder" className="scroll-mt-8">
                            <SectionHeading number="02" title="Cylinder (CYL)" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Cylinder is used when correcting <strong className="text-yellow-600 font-semibold">astigmatism</strong>, which occurs when the eye is not perfectly round.
                                    If your prescription includes a cylinder value, it means your lenses must correct this irregular curvature of the eye.
                                </p>
                                <ExampleBadge label="CYL  −1.25" />
                                <div className="bg-gray-50 border-l-4 border-yellow-600 px-5 py-4 mt-2">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        If the CYL box on your prescription is blank, it means no astigmatism correction is required.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Axis */}
                        <section id="axis" className="scroll-mt-8">
                            <SectionHeading number="03" title="Axis" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Axis works together with the cylinder value to correct astigmatism. It is measured in degrees
                                    from <strong className="text-yellow-600 font-semibold">1 to 180</strong> and indicates the orientation of the correction needed.
                                </p>

                                {/* Axis dial illustration */}
                                <div className="bg-gray-50 border border-gray-100 p-6 flex flex-col items-center gap-4">
                                    <svg viewBox="0 0 160 160" className="w-36 h-36" xmlns="http://www.w3.org/2000/svg">
                                        {/* Outer circle */}
                                        <circle cx="80" cy="80" r="70" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
                                        {/* Degree ticks */}
                                        {Array.from({ length: 18 }, (_, i) => {
                                            const angle = (i * 20 * Math.PI) / 180;
                                            const x1 = 80 + 62 * Math.cos(angle - Math.PI / 2);
                                            const y1 = 80 + 62 * Math.sin(angle - Math.PI / 2);
                                            const x2 = 80 + 70 * Math.cos(angle - Math.PI / 2);
                                            const y2 = 80 + 70 * Math.sin(angle - Math.PI / 2);
                                            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d1d5db" strokeWidth="1" />;
                                        })}
                                        {/* Inner circle */}
                                        <circle cx="80" cy="80" r="28" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
                                        {/* Axis line at 90° */}
                                        <line x1="80" y1="12" x2="80" y2="148" stroke="#000" strokeWidth="1.5" strokeDasharray="4 3" />
                                        {/* Pointer */}
                                        <line x1="80" y1="80" x2="80" y2="20" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                                        <circle cx="80" cy="80" r="4" fill="#000" />
                                        {/* Labels */}
                                        <text x="80" y="10" textAnchor="middle" fontSize="8" fill="#6b7280" fontFamily="monospace">90°</text>
                                        <text x="152" y="83" textAnchor="middle" fontSize="8" fill="#6b7280" fontFamily="monospace">180°</text>
                                        <text x="8" y="83" textAnchor="middle" fontSize="8" fill="#6b7280" fontFamily="monospace">1°</text>
                                        <text x="80" y="155" textAnchor="middle" fontSize="8" fill="#6b7280" fontFamily="monospace">—</text>
                                    </svg>
                                    <p className="text-xs text-gray-500 text-center">Axis ranges from 1° to 180° — shown here at 90°</p>
                                </div>

                                <ExampleBadge label="AXIS  90" />
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — PD */}
                        <section id="pd" className="scroll-mt-8">
                            <SectionHeading number="04" title="Pupillary Distance (PD)" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Pupillary Distance is the distance between the centres of your pupils, measured in millimetres.
                                    This measurement ensures your lenses are correctly aligned with your eyes for clear and comfortable vision.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    If your PD is not listed on your prescription, you may{" "}
                                    <Link href="/howtomeasureyourpd" className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all">
                                        measure it yourself
                                    </Link>{" "}
                                    or ask your optician for this information.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 05 — Example Prescription */}
                        <section id="example" className="scroll-mt-8">
                            <SectionHeading number="05" title="Example Prescription" />
                            <div className="border-t border-gray-100 pt-6 space-y-5">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Below is an example of what a typical prescription might look like. This tells us the exact lens strength required for each eye.
                                </p>

                                {/* Prescription table */}
                                <div className="border border-gray-100 overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-yellow-600 text-white">
                                                <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest">Eye</th>
                                                <th className="text-center px-5 py-3 text-xs font-bold uppercase tracking-widest">SPH</th>
                                                <th className="text-center px-5 py-3 text-xs font-bold uppercase tracking-widest">CYL</th>
                                                <th className="text-center px-5 py-3 text-xs font-bold uppercase tracking-widest">Axis</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-100 bg-white">
                                                <td className="px-5 py-4 font-bold text-black text-xs uppercase tracking-widest">
                                                    Right <span className="text-gray-400 font-normal">(OD)</span>
                                                </td>
                                                <td className="px-5 py-4 text-center font-mono font-semibold text-black">−2.00</td>
                                                <td className="px-5 py-4 text-center font-mono font-semibold text-black">−1.00</td>
                                                <td className="px-5 py-4 text-center font-mono font-semibold text-black">90</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-5 py-4 font-bold text-black text-xs uppercase tracking-widest">
                                                    Left <span className="text-gray-400 font-normal">(OS)</span>
                                                </td>
                                                <td className="px-5 py-4 text-center font-mono font-semibold text-black">−1.75</td>
                                                <td className="px-5 py-4 text-center font-mono font-semibold text-black">−0.75</td>
                                                <td className="px-5 py-4 text-center font-mono font-semibold text-black">85</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Column key */}
                                <div className="grid grid-cols-3 gap-px bg-gray-100 border border-gray-100">
                                    {[
                                        { abbr: "SPH", desc: "Lens power for each eye" },
                                        { abbr: "CYL", desc: "Astigmatism correction" },
                                        { abbr: "AXIS", desc: "Direction of astigmatism" },
                                    ].map((col) => (
                                        <div key={col.abbr} className="bg-white px-5 py-4">
                                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-1 font-mono">{col.abbr}</p>
                                            <p className="text-xs text-gray-500">{col.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 06 — Important */}
                        <section id="important" className="scroll-mt-8">
                            <SectionHeading number="06" title="Important" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="bg-yellow-600 text-white px-6 py-6 flex gap-5">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6 flex-shrink-0 mt-0.5 text-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                    <p className="text-gray-100 text-sm leading-relaxed">
                                        Your prescription should normally be <strong className="text-white font-semibold">no more than 24 months old</strong>. Regular eye examinations are important for maintaining healthy vision and ensuring your prescription remains accurate.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Banner */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Ready to order?</p>
                                <p className="text-gray-100 text-sm">Browse our frames and enter your prescription at checkout.</p>
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