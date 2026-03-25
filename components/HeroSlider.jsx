'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';


/* ─── Main component ────────────────────────────────────────── */

export default function HeroSlider() {
    const swiperRef = useRef(null);
    const [allBanner, setallBanner] = useState([
        {
            productType: "banner",
            Route: "/shop",
            img: "/HeroBanner.png",

        }
    ]);
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




    console.log(allBanner);


    return (
        <section className="relative w-full h-fit overflow-hidden">

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
        <Link href={slide?.Route} className={`w-full h-fit bg-gray-200 flex items-center overflow-hidden`}>


            <Image src={slide?.img} alt={"Hero Banner Image"} width={0} height={0} sizes="100vw" className="w-full h-full object-cover" />


        </Link >
    );
}