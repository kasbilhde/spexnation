

"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Scroll-reveal hook ─────────────────────────────── */
function useInView(threshold = 0.12) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* ─── Pillars data ───────────────────────────────────── */
const pillars = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Professional Optical Expertise",
        body: "Unlike many online eyewear retailers, Spexnation was built with clinical optical knowledge at its core. Every aspect of the buying experience has been designed with professional understanding of lenses, prescriptions, and visual comfort. This ensures customers receive eyewear that not only looks good, but also performs exactly as it should.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        title: "Style and Quality",
        body: "At Spexnation, we believe glasses should be both functional and stylish. Our frames are carefully selected to offer modern designs that suit a wide range of tastes, while maintaining durability and comfort for everyday wear.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Clear Choices, Fair Pricing",
        body: "We believe buying glasses should be simple and transparent. Instead of overwhelming customers with confusing options, Spexnation focuses on clear lens choices and straightforward pricing, helping you find the right glasses with confidence.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Designed for Everyday Wear",
        body: "Every pair of glasses from Spexnation is made with the goal of delivering comfort, clarity, and style, so you can rely on your eyewear throughout your day.",
    },
];

/* ─── PAGE ───────────────────────────────────────────── */
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO ─────────────────────────────────── */}
            <section className="relative bg-black text-white overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1600&q=80"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-28 md:py-40">
                    <p className="text-xs tracking-[0.35em] uppercase sCl font-semibold mb-5">
                        Our Story
                    </p>
                    <h1
                        className="font-bold uppercase leading-none mb-6 text-white"
                        style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)", letterSpacing: "-0.02em" }}
                    >
                        About<br />Spexnation
                    </h1>
                    <div className="w-12 h-0.5 bg-white mb-8" />
                    <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
                        Buying glasses online can often feel confusing and overwhelming. Too many options,
                        unclear pricing, and complicated lens choices can make the process harder than it needs to be.
                    </p>
                </div>
            </section>


            {/* ── FOUNDING STORY ───────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <Reveal>
                        <p className="text-xs tracking-[0.35em] uppercase sCl font-semibold mb-4">Founded with Purpose</p>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black mb-5 leading-tight">
                            Simplicity Meets<br />Professional Standards
                        </h2>
                        <div className="w-10 h-0.5 bg-black mb-7" />
                        <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                            Spexnation was founded by an Optometrist and Dispensing Optician duo who wanted
                            to simplify the way people buy glasses online while maintaining the high professional
                            standards expected from an optical practice.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-[15px]">
                            Their goal was simple: create a place where customers can find stylish, high-quality
                            eyewear with clear choices and transparent pricing, without the unnecessary complexity
                            that often comes with buying glasses online.
                        </p>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80"
                                alt="Person wearing Spexnation glasses"
                                className="w-full h-72 md:h-[440px] object-cover"
                            />
                            {/* Floating stat badge */}
                            <div className="absolute -bottom-6 -left-4 md:-left-8 sBg text-white px-7 py-6 shadow-xl">
                                <p className="text-3xl font-bold leading-none">2</p>
                                <p className="text-[10px] uppercase tracking-widest text-gray-100 mt-1 font-medium">Expert Founders</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── DIVIDER ──────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="h-px bg-gray-100" />
            </div>

            {/* ── FOUR PILLARS ─────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
                <Reveal>
                    <div className="mb-14">
                        <p className="text-xs tracking-[0.35em] uppercase sCl font-semibold mb-3">What We Stand For</p>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">
                            Built on Four Principles
                        </h2>
                        <div className="w-10 h-0.5 bg-black mt-5" />
                    </div>
                </Reveal>

                {/* Cards — separated by 1px gray lines like the site's grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
                    {pillars.map((p, i) => (
                        <Reveal key={p.title} delay={i * 70}>
                            <div className="bg-white p-8 h-full group hover:bg-black transition-colors duration-300">
                                <div className="w-12 h-12 border border-yellow-400 group-hover:border-white/20 flex items-center justify-center mb-6 text-yellow-400 group-hover:text-white transition-colors duration-300">
                                    {p.icon}
                                </div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-white transition-colors duration-300 mb-4 leading-snug">
                                    {p.title}
                                </h3>
                                <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
                                    {p.body}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    );
}