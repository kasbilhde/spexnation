'use client'

import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';


/* ─── Main component ────────────────────────────────────────── */

export default function HeroSlider() {
    const swiperRef = useRef(null);
    const [allBanner, setallBanner] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const goTo = (index) => {
        swiperRef.current?.slideToLoop(index);
    };




    const fetchAccessories = async () => {
        setIsLoading(true);
        try {
            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allbanner`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallBanner(res?.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchAccessories();
    }, [])


    return (
        <section className="relative w-full h-[240px] md:h-[65vh] overflow-hidden">

            <Swiper
                key={allBanner.length}   // 👈 important
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex ? swiper.realIndex : 0)}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                loop
                speed={900}
                className="!w-full !h-full"
            >
                {allBanner.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => <SlideContent slide={slide} isActive={isActive} />}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ── Custom Pagination ── */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {allBanner.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`
              rounded-full cursor-pointer
              transition-all duration-300 ease-out
              ${activeIndex === i
                                ? 'w-8 h-3 bg-white border-2 border-white'
                                : 'w-3 h-3 rounded bg-transparent border-2 border-white'
                            }
            `}
                    />
                ))}
            </div>

        </section>
    );
}

/* ─── Individual slide ──────────────────────────────────────── */

function SlideContent({ slide, isActive }) {
    const stagger = (i) => ({
        hidden: { opacity: 0, y: 26 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
        },
    });

    return (
        <Link href={slide?.Route} style={{ backgroundImage: `url(${slide.img})` }} className={`w-full h-full bg-gray-200 flex items-center overflow-hidden bg-cover md:bg-cover bg-no-repeat bg-center`}>

            {/* Text content */}
            {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                <div className="max-w-lg">
                    {!isActive && (
                        <>

                            <motion.h2
                                className="text-4xl md:text-5xl font-light leading-[1.1] text-gray-100 mb-5 tracking-tight"
                                variants={stagger(1)} initial="hidden" animate="visible"
                            >
                                {slide.title}
                            </motion.h2>

                            <motion.p
                                className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-6"
                                variants={stagger(2)} initial="hidden" animate="visible"
                            >
                                {slide.subtitle}
                            </motion.p>



                            <motion.div
                                variants={stagger(3)} initial="hidden" animate="visible"
                                className="mt-8 flex flex-col flex-wrap gap-2 mb-8 justify-center md:justify-start opacity-90 text-white">
                                <div className="text-md">
                                    <span className='font-light'>Incredible Eyewear, Incredible Prices</span>
                                </div>
                                <div className="text-md font-light">Free UK Delivery</div>
                            </motion.div>


                            <motion.div variants={stagger(4)} initial="hidden" animate="visible">
                                <Link
                                    href={slide.link}
                                    className={`text-white font-light px-6 py-3 rounded transition flex items-center justify-center gap-2 pBg w-fit`}
                                >
                                    Shop Now
                                    <ArrowRight size={15} />
                                </Link>
                            </motion.div>
                        </>
                    )}
                </div>
            </div> */}
        </Link >
    );
}