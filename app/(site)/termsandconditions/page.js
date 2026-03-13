"use client";

import Link from "next/link";

/* ─── TOC sections ───────────────────────────────────── */
const sections = [
    { id: "company", label: "Company Information" },
    { id: "eligibility", label: "Eligibility to Purchase" },
    { id: "prescription-requirements", label: "Prescription Requirements" },
    { id: "prescription-responsibility", label: "Prescription Responsibility" },
    { id: "product-information", label: "Product Information" },
    { id: "orders", label: "Orders" },
    { id: "pricing", label: "Pricing" },
    { id: "availability", label: "Availability" },
    { id: "delivery", label: "Delivery" },
    { id: "returns", label: "Returns" },
    { id: "website-use", label: "Website Use" },
    { id: "liability", label: "Liability" },
    { id: "governing-law", label: "Governing Law" },
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
export default function TermsAndConditions() {
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
                        Terms &amp;<br />Conditions
                    </h1>
                    <div className="w-10 h-0.5 bg-white mb-6" />
                    <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                        These Terms &amp; Conditions govern your use of the Spexnation website and the purchase of
                        products from us. By using this website and placing an order, you agree to be bound by the
                        terms set out below.
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
                                    className="text-xs text-gray-500 hover:text-black transition-colors py-1.5 tracking-wide border-l-2 border-transparent hover:border-yellow-600 pl-3 font-medium"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Terms content */}
                <main className="flex-1 min-w-0">
                    <div className="space-y-12">

                        {/* 01 — Company Information */}
                        <section id="company" className="scroll-mt-8">
                            <SectionHeading title="Company Information" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">This website is operated by:</p>
                                <div className="bg-gray-50 border border-gray-100 px-6 py-5 text-sm text-gray-700 leading-relaxed">
                                    <p className="font-bold text-black mb-1">Wakasim Ltd</p>
                                    <p>228 Walmersley Road</p>
                                    <p>Bury</p>
                                    <p>BL9 6NH</p>
                                    <p>United Kingdom</p>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mt-5">
                                    Throughout these Terms &amp; Conditions, "Spexnation", "we", "our", or "us" refers to Wakasim Ltd.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 02 — Eligibility */}
                        <section id="eligibility" className="scroll-mt-8">
                            <SectionHeading number="02" title="Eligibility to Purchase" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    By placing an order on this website, you confirm that:
                                </p>
                                <ul className="space-y-3">
                                    <CheckItem text="You are 16 years of age or older" />
                                    <CheckItem text="You have a valid written prescription issued by a qualified optometrist or medical professional" />
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 03 — Prescription Requirements */}
                        <section id="prescription-requirements" className="scroll-mt-8">
                            <SectionHeading number="03" title="Prescription Requirements" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    When ordering prescription glasses, you confirm that:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <CheckItem text="Your prescription has been issued within the last 24 months" />
                                    <CheckItem text="The prescription information you provide is accurate and complete" />
                                </ul>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Spexnation reserves the right to request a copy of your written prescription before processing an order.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We also reserve the right to decline orders where prescriptions fall outside safe dispensing parameters.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 04 — Prescription Responsibility */}
                        <section id="prescription-responsibility" className="scroll-mt-8">
                            <SectionHeading number="04" title="Prescription Responsibility" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Customers are responsible for ensuring that all prescription details entered on the website are accurate.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Spexnation cannot be held responsible for issues arising from incorrect prescription information entered during the ordering process.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    If you are unsure about your prescription, you should consult your optometrist before placing an order.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 05 — Product Information */}
                        <section id="product-information" className="scroll-mt-8">
                            <SectionHeading number="05" title="Product Information" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    We make every effort to ensure that product descriptions, images, and specifications are accurate. However:
                                </p>
                                <ul className="space-y-3">
                                    <CheckItem text="Colours may vary slightly depending on screen settings" />
                                    <CheckItem text="Product images are for illustration purposes" />
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 06 — Orders */}
                        <section id="orders" className="scroll-mt-8">
                            <SectionHeading number="06" title="Orders" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Placing an order on the Spexnation website constitutes an offer to purchase goods.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A contract between you and Spexnation is only formed once your order has been dispatched.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Because prescription glasses are custom manufactured, orders may not be able to be modified once production has begun.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Spexnation reserves the right to refuse or cancel any order at our discretion.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 07 — Pricing */}
                        <section id="pricing" className="scroll-mt-8">
                            <SectionHeading number="07" title="Pricing" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    All prices displayed on the website are in GBP (£). While we take care to ensure prices are correct, errors may occasionally occur. If a product is listed at an incorrect price, we reserve the right to:
                                </p>
                                <ul className="space-y-3">
                                    <CheckItem text="Cancel the order, or" />
                                    <CheckItem text="Contact you to confirm the correct price before proceeding." />
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 08 — Availability */}
                        <section id="availability" className="scroll-mt-8">
                            <SectionHeading number="08" title="Availability" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    All products are subject to availability. If a product becomes unavailable after an order has been placed, we will contact you to arrange:
                                </p>
                                <ul className="space-y-3">
                                    <CheckItem text="An alternative product, or" />
                                    <CheckItem text="A full refund." />
                                </ul>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 09 — Delivery */}
                        <section id="delivery" className="scroll-mt-8">
                            <SectionHeading number="09" title="Delivery" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Delivery times are estimates and may vary depending on prescription requirements and production times.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Further details can be found on our{" "}
                                    <Link href="/deliveryinformation" className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all">
                                        Delivery Information page
                                    </Link>.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 10 — Returns */}
                        <section id="returns" className="scroll-mt-8">
                            <SectionHeading number="10" title="Returns" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our returns policy is outlined on our{" "}
                                    <Link href="/returnspolicy" className="text-yellow-600 font-semibold underline underline-offset-2 hover:no-underline transition-all">
                                        Returns Policy page
                                    </Link>.
                                </p>
                                <div className="bg-gray-50 border-l-4 border-yellow-600 px-5 py-4">
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        Prescription lenses are custom made and may not be eligible for return or refund unless stated otherwise.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 11 — Website Use */}
                        <section id="website-use" className="scroll-mt-8">
                            <SectionHeading number="11" title="Website Use" />
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    You agree not to misuse this website or attempt to interfere with its operation.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 12 — Liability */}
                        <section id="liability" className="scroll-mt-8">
                            <SectionHeading number="12" title="Liability" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Spexnation shall not be liable for any indirect or consequential losses arising from the use of this website or products purchased through it.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Nothing in these Terms excludes or limits liability where it would be unlawful to do so under UK law.
                                </p>
                            </div>
                        </section>

                        <div className="h-px bg-gray-100" />

                        {/* 13 — Governing Law */}
                        <section id="governing-law" className="scroll-mt-8">
                            <SectionHeading number="13" title="Governing Law" />
                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    These Terms &amp; Conditions are governed by the laws of England and Wales.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Any disputes arising in connection with these terms shall be subject to the jurisdiction of the courts of England and Wales.
                                </p>
                            </div>
                        </section>

                        {/* Contact CTA */}
                        <div className="bg-yellow-600 text-white px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase mb-2">Questions about our terms?</p>
                                <p className="text-gray-100 text-sm">Our team is here to help with any queries.</p>
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