"use client";

import Image from "next/image";
import Link from "next/link";

/* ─── TOC ────────────────────────────────────────────── */
const sections = [
    { id: "what-is-pd", label: "What Is PD?" },
    { id: "method-1", label: "Method 1 – Using a Mirror" },
    { id: "method-2", label: "Method 2 – Ask a Friend" },
    { id: "why-pd", label: "Why PD Is Important" },
    { id: "tip", label: "Tip" },
];

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-5">
            <h2 className="text-lg font-bold uppercase tracking-widest text-black">{title}</h2>
        </div>
    );
}

function Step({ number, children }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white flex items-center justify-center text-xs font-bold">
                {number}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed pt-1">{children}</p>
        </div>
    );
}

/* ─── Inline SVG PD diagram ──────────────────────────── */
function PDDiagram() {
    return (
        <div className="bg-gray-50 border border-gray-100 p-6 md:p-8">

            {/* Eye illustration */}
            <div className="relative w-full">
                <div>
                    <h3 className="text-lg font-medium text-gray-700">{`Measure your Pupillary Distance (PD)`}</h3>
                    <p className="text-md font-medium text-gray-700/70">It only takes 30 seconds</p>
                    <div className="my-4 w-full">
                        <Image className="h-full w-full" src="/pdMesureImage.png" alt="placeholder" width={100} height={100} />
                    </div>
                    <p className="text-gray-400 text-sm">Align the <b>0mm</b> mark <b>of a millimetre ruler with the centre of your left pupil.</b> Then, look straight and read the mm number lined up with the centre of <b>your right pupil.</b></p>
                    <b className="pt-4 text-md">Most adults: 54-74mm</b>
                </div>
            </div>

            {/* Range badge */}
            {/* <div className="mt-5 bg-yellow-600 text-white py-3 flex items-center justify-center gap-3">
                <svg viewBox="0 0 40 16" className="w-10 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="10" cy="8" rx="9" ry="6" stroke="white" strokeWidth="1.2" />
                    <ellipse cx="30" cy="8" rx="9" ry="6" stroke="white" strokeWidth="1.2" />
                </svg>
                <span className="text-xs font-bold tracking-widest uppercase">Most adults: 54–74mm</span>
            </div> */}
        </div>
    );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function HowToMeasurePD() {
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
                        How to Measure<br />Your PD
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        Pupillary Distance (PD) is the distance between the centres of your pupils, measured in
                        millimetres. This measurement ensures that your lenses are correctly aligned with your
                        eyes for clear and comfortable vision.
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

                        {/* Info box */}
                        <div className="mt-8 bg-gray-50 border border-gray-100 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Need Help?</p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                If you're unsure about your PD, our team is happy to guide you.
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

                {/* Guide content */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-14">

                        {/* 01 — What Is PD */}
                        <section id="what-is-pd" className="scroll-mt-8">
                            <SectionHeading number="01" title="What Is PD?" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Pupillary Distance (PD) is the distance between the centres of your pupils, measured in millimetres.
                                    This measurement ensures that your lenses are correctly aligned with your eyes for clear and
                                    comfortable vision.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    If your PD is not listed on your prescription, you can measure it yourself using a ruler and a mirror.
                                </p>

                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Method 1 */}
                        <section id="method-1" className="scroll-mt-8">
                            <SectionHeading number="02" title="Method 1 – Measure Using a Mirror" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                                    {/* Method badge */}
                                    <div className="flex-shrink-0 bg-yellow-600 text-white px-5 py-4 flex flex-col items-center justify-center gap-1 self-start">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Solo</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                                        You can measure your own PD in under 30 seconds using just a millimetre ruler and a mirror.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Step number="1">Stand about <strong className="text-black font-semibold">20cm away from a mirror</strong>.</Step>
                                    <Step number="2">Hold a <strong className="text-black font-semibold">millimetre ruler</strong> against your brow or nose.</Step>
                                    <Step number="3">Close your <strong className="text-black font-semibold">right eye</strong> and align the <strong className="text-black font-semibold">0 mark</strong> with the centre of your left pupil.</Step>
                                    <Step number="4">Without moving the ruler, open your right eye and close your left eye.</Step>
                                    <Step number="5">The measurement at the centre of your <strong className="text-black font-semibold">right pupil</strong> is your <strong className="text-black font-semibold">PD</strong>.</Step>
                                </div>

                                <div className="mt-6 bg-gray-50 border border-gray-100 px-5 py-4 flex items-center gap-3">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                    <p className="text-gray-600 text-sm">
                                        Typical adult PD ranges from <strong className="text-black font-semibold">54mm to 74mm</strong>.
                                    </p>
                                </div>
                            </div>
                            <PDDiagram />
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Method 2 */}
                        <section id="method-2" className="scroll-mt-8">
                            <SectionHeading number="03" title="Method 2 – Ask a Friend" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                                    <div className="flex-shrink-0 bg-yellow-600 text-white px-5 py-4 flex flex-col items-center justify-center gap-1 self-start">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>
                                        <span className="text-[10px] font-bold uppercase tracking-widest mt-1">With Help</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                                        You can also ask someone to measure your PD while you look straight ahead — this can sometimes be more accurate.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Step number="1">Look directly forward at a distant object.</Step>
                                    <Step number="2">Your helper places a <strong className="text-black font-semibold">millimetre ruler</strong> across the bridge of your nose.</Step>
                                    <Step number="3">They measure the distance between the centres of both pupils.</Step>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — Why PD Is Important */}
                        <section id="why-pd" className="scroll-mt-8">
                            <SectionHeading number="04" title="Why PD Is Important" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Your PD ensures the optical centre of the lenses aligns with your eyes. Incorrect PD measurements may cause:
                                </p>
                                <div className="grid sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
                                    {[
                                        {
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            ),
                                            label: "Blurred Vision",
                                        },
                                        {
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                                </svg>
                                            ),
                                            label: "Eye Strain",
                                        },
                                        {
                                            icon: (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                                </svg>
                                            ),
                                            label: "Discomfort",
                                        },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-white p-6 flex flex-col items-center text-center gap-3">
                                            <div className="w-10 h-10 bg-yellow-600 border border-gray-100 flex text-white items-center justify-center text-black">
                                                {item.icon}
                                            </div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-black">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 05 — Tip */}
                        <section id="tip" className="scroll-mt-8">
                            <SectionHeading number="05" title="Tip" />
                            <div className="border-t border-gray-100 pt-6">
                                <div className="bg-yellow-600 text-white px-6 py-6 flex gap-5">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6 flex-shrink-0 mt-0.5 text-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                    <p className="text-gray-100 text-sm leading-relaxed">
                                        If you already own glasses that fit well, your optician may be able to tell you your PD from your previous measurements.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Banner */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Ready to order your glasses?</p>
                                <p className="text-gray-100 text-sm">Now that you have your PD, browse our full range of frames.</p>
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